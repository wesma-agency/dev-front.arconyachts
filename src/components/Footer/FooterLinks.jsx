import React, { Fragment, useEffect, useRef, useState, useContext } from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import FooterContacts from './FooterContacts'
import {
  StyledArrow,
  StyledCategory,
  StyledCategoryTitle,
  StyledColumn,
  StyledLink,
  StyledLinks,
  StyledLinksMob,
  StyledLinksWrapper,
  StyledSubcategoriesWrapper,
  StyledSubcategory,
  StyledText,
  StyledTitle,
} from './FooterLinks.styled'
import { FooterContext } from 'utils/context/FooterContext'
import { PATH } from 'config/path'
import { useTranslation } from 'utils/useTranslation'

export const MobileCategory = ({ title, items, text, path }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [height, setHeight] = useState()
  const menu = useRef(null)
  useEffect(() => {
    setHeight(menu.current?.offsetHeight)
  }, [])
  return (
    <>
      <StyledCategory onClick={() => setIsOpened((prev) => !prev)}>
        <StyledCategoryTitle>{title}</StyledCategoryTitle>
        <StyledArrow isActive={!isOpened} />
      </StyledCategory>
      <StyledLinksWrapper isActive={isOpened} height={height}>
        <StyledSubcategoriesWrapper ref={menu}>
          {items.map((subcategory, i) => (
            <StyledSubcategory
              key={i}
              fullWidth={subcategory?.mobileFullWidth?.toString() && 'width'}
            >
              {subcategory.title && (
                <StyledTitle>{subcategory.title}</StyledTitle>
              )}
              {subcategory.items.map((item, i) => {
                return item.value !== null ? (
                  <StyledLink
                    prefetch={false}
                    href={{
                      ...(item.path
                        ? { pathname: item.path }
                        : { pathname: path }),
                      ...(item.value
                        ? { query: { [item.param]: item.value } }
                        : {}),
                    }}
                    key={i}
                    passHref
                  >
                    {item.title}
                  </StyledLink>
                ) : null
              })}
            </StyledSubcategory>
          ))}
        </StyledSubcategoriesWrapper>
      </StyledLinksWrapper>

      {text && <StyledText> {text}</StyledText>}
    </>
  )
}

const getLocationsNew = (locations, meta, inner = false) => {
  const getResult = (location) => {
    const index = meta.findIndex(
      (el) =>
        el.type === 'rent' &&
        el.filter === 'location' &&
        el.value === location.slug
    )
    if (index !== -1) {
      return {
        value: location.slug,
        title: location.name,
        path: `${PATH.CHARTER_CATALOG}/${location.slug}`,
      }
    } else {
      return {
        value: location.slug,
        title: location.name,
        param: 'location',
      }
    }
  }
  const result = []
  locations.forEach((location) => {
    if (inner) {
      result.push(getResult(location))
    }
    if (location.childrens?.length) {
      location.childrens.forEach((location) => {
        result.push(getResult(location))
        if (location.childrens?.length) {
          const inner = getLocationsNew(location.childrens, meta, true)
          result.push(...inner)
        }
      })
    }
  })
  return result
}

const getCabins = (cabins, meta) => {
  const result = []
  cabins.map((item) => {
    const index = meta.findIndex(
      (el) =>
        el.type === 'sale' && el.filter === 'cabin' && el.value === item.key
    )
    if (index !== -1) {
      result.push({
        title: item.value,
        path: `${PATH.SALE_CATALOG}/cabin-${meta[index].value}`,
      })
    } else {
      result.push({
        title: item.value,
        param: 'cabin',
        value: item.key,
      })
    }
  })
  return result.slice(0, 4)
}

const FooterLinks = () => {
  const {
    page_yachts,
    locations,
    yachts: projects,
    shipyards,
    yacht_meta_items,
  } = useContext(FooterContext)

  const footerStatic = useTranslation('footerStatic')

  function SortArray(x, y) {
    if (x.name < y.name) {
      return -1
    }
    if (x.name > y.name) {
      return 1
    }
    return 0
  }
  const shipyardMap = {}
  yacht_meta_items
    .filter((i) => i.filter === 'shipyard')
    .forEach((i) => (shipyardMap[i.value] = i))
  let shipyardArr = []
  for (let shipyard in shipyardMap) {
    if (shipyardMap.hasOwnProperty(shipyard)) {
      if (
        shipyardMap[shipyard].name &&
        shipyardMap[shipyard].value &&
        shipyards.data?.find((s) => s.name === shipyardMap[shipyard].name)
      )
        shipyardArr.push(shipyardMap[shipyard])
    }
  }
  shipyardArr = shipyardArr.sort(SortArray).slice(0, 30)
  const links = [
    {
      title: footerStatic.links.sale,
      path: PATH.SALE_CATALOG,
      items: [
        {
          title: footerStatic.links.condition,
          items: page_yachts.filter.conditions.map((item) => ({
            title: item.value,
            value: item.slug,
            path: `${PATH.SALE_CATALOG}/${item.key}`,
          })),
        },
        {
          title: footerStatic.links.cabins,
          items: getCabins(page_yachts.filter.cabins, yacht_meta_items),
          // items: page_yachts.filter.cabins.map((item) => ({
          //   title: item.value,
          //   param: 'cabin',
          //   value: item.key,
          // })),
        },
        {
          title: footerStatic.links.body,
          items: page_yachts.filter.body.map((item) => ({
            title: item.name,
            param: 'body',
            path: `${PATH.SALE_CATALOG}/${item.slug}`,
          })),
        },
        {
          title: footerStatic.links.tags,
          items: page_yachts.filter.tags.map((item) => ({
            title: item.name,
            value: item.slug,
            path: `${PATH.SALE_CATALOG}/${item.slug}`,
          })),
        },
      ],
    },
    {
      title: footerStatic.links.charter,
      path: PATH.CHARTER_CATALOG,
      items: [
        {
          title: footerStatic.links.locations,
          items: getLocationsNew(locations, yacht_meta_items)
            .filter((item) => item.path)
            .sort((a, b) => a.title.localeCompare(b.title)),
        },
      ],
    },
    {
      title: footerStatic.links.projects,
      path: PATH.PROJECTS,
      items: [
        {
          items: projects.data.map((item) => ({
            title: item.name,
            value: item.slug,
            path: `${PATH.PROJECTS}/${item.slug}`,
          })),
        },
      ],
    },
    {
      title: footerStatic.links.building,
      items: [
        {
          items: [
            { title: footerStatic.links.buildingProjects, path: PATH.PROJECTS },
          ],
        },
      ],
    },
    {
      title: footerStatic.links.serviceLink,
      items: [
        {
          items: [
            { path: PATH.SERVICE_SELLING, title: footerStatic.links.selling },
            { path: PATH.SERVICE_LEASING, title: footerStatic.links.leasing },
            { path: PATH.SERVICE_HANDLING, title: footerStatic.links.handling },
            {
              path: PATH.SERVICE_SUPPORT,
              title: footerStatic.links.support,
            },
            {
              path: PATH.SERVICE_CREW_MANAGEMENT,
              title: footerStatic.links.crewManagement,
            },
            {
              path: PATH.SERVICE_FINANCES,
              title: footerStatic.links.finances,
            },
            { path: PATH.SERVICE_LAW, title: footerStatic.links.law },
            {
              path: PATH.SERVICE_DOCK,
              title: footerStatic.links.dock,
            },
            {
              path: PATH.SERVICE_TRANSPORTATION,
              title: footerStatic.links.transportation,
            },
            {
              path: PATH.SERVICE_REGISTRATION,
              title: footerStatic.links.registration,
            },
          ],
        },
      ],
    },
    {
      title: footerStatic.links.shipyards,
      fullHeight: true,
      items: [
        {
          items: shipyardArr.map((item) => ({
            title: item.name,
            path: `${PATH.SHIPYARD}${item.value}`,
          })),
        },
      ],
    },
    {
      text: footerStatic.links.aboutText,
      title: footerStatic.links.about,
      items: [
        {
          items: [
            { path: PATH.NEWS, title: footerStatic.links.news },
            { path: PATH.ABOUT, title: footerStatic.links.company },
            { path: PATH.CONTACTS, title: footerStatic.links.contacts },
            { path: PATH.CONTACTS, title: footerStatic.links.requisites },
          ],
        },
      ],
    },
  ]
  const categoriesMobile = (footerLinks) =>
    footerLinks.map((item, i) => <MobileCategory key={i} {...item} />)

  const getCategory = (category) => (
    <>
      {category.text && <StyledText>{category.text}</StyledText>}
      {category.title && (
        <StyledCategory>
          <StyledCategoryTitle>{category.title}</StyledCategoryTitle>
        </StyledCategory>
      )}
      {category.items.map((item, i) => (
        <Fragment key={i}>
          {item.title && <StyledTitle>{item.title}</StyledTitle>}
          {item.items.map(
            (item, i, items) =>
              item.title &&
              (item.path ? (
                <StyledLink
                  isLast={i === items.length - 1 && 'last'}
                  href={item.path}
                  key={i}
                  passHref
                  prefetch={false}
                >
                  {item.title}
                </StyledLink>
              ) : (
                item.value && (
                  <StyledLink
                    href={{
                      pathname: category.path,
                      query: { [item.param]: item.value },
                    }}
                    isLast={i === items.length - 1 && 'last'}
                    key={i}
                    passHref
                    prefetch={false}
                  >
                    {item.title}
                  </StyledLink>
                )
              ))
          )}
        </Fragment>
      ))}
    </>
  )

  const { notebook, fullhd } = useBreakpoint()
  let height = 0
  if (!fullhd) {
    height = links[1].items[0].items.length * 0.68 * 35
  } else {
    height = links[1].items[0].items.length * 35
  }

  return (
    <>
      <StyledLinks maxHeight={height}>
        {!notebook &&
          links.map((item, i) =>
            item.fullHeight ? (
              <StyledColumn maxHeight={height} key={i}>
                {getCategory(item)}
              </StyledColumn>
            ) : (
              <Fragment key={i}>{getCategory(item)}</Fragment>
            )
          )}
        <FooterContacts />
      </StyledLinks>
      <StyledLinksMob>
        {notebook && categoriesMobile(links)}
        <FooterContacts />
      </StyledLinksMob>
    </>
  )
}

export default FooterLinks
