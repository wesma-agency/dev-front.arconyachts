import { PATH } from 'config/path'
import Link from 'next/link'
import React from 'react'
import { getUniqueListBy } from 'utils/arrayHelpers'
import { useTranslation } from 'utils/useTranslation'
import {
  StyledBlock,
  StyledBlockContent,
  StyledBlockTitle,
  StyledLink,
  StyledLinkWrapper,
  StyledPageContent,
  StyledTitle,
} from './SitemapPage.styled'
import {useRouter} from "next/router";


const SitemapPage = ({ saleFilters, charterFilters, locations, metaItems }) => {
  const sitemapStatic = useTranslation('sitemapStatic')
  // Получаем все мета данные ЧПУ
  let metaItemsListSail = []
  let metaItemsListRent = []
  const map = new Map();
  for (const item of metaItems) {
    if(!map.has(item.value) && item.type === 'sale'){
      // map.set(item.value, true);
      metaItemsListSail.push(item.value);
    }
    if(!map.has(item.value) && item.type === 'rent'){
      // map.set(item.value, true);
      metaItemsListRent.push(item.value);
    }
  }


  const charterList = [
    // charterFilters.conditions.map((cabin) => ({
    //   param: 'condition',
    //   slug: cabin.key,
    //   title: cabin.value,
    // })),
    [
      {
        param: 'condition',
        slug: 'past-usage',
        title: sitemapStatic.conditions.pastUsage,
        meta: -1,
      },
      {
        param: 'condition',
        slug: 'new',
        title: sitemapStatic.conditions.new,
        meta: -1,
      },
    ],
    charterFilters.body
      .map((body) => ({
        param: 'body',
        slug: body.slug,
        title: body.name,
        meta: metaItemsListRent.indexOf(body.slug)
      }))
      .filter((item) => item.slug && item.title),
    charterFilters.guests
      .map((cabin) => ({
        param: 'guest',
        slug: cabin.key,
        title: cabin.value,
        meta: metaItemsListRent.indexOf(cabin.key),
      }))
      .filter((item) => item.slug && item.title),
    charterFilters.shipyards
      .map((shipyard) => ({
        param: 'shipyard',
        slug: shipyard.slug,
        title: shipyard.name,
        meta: metaItemsListRent.indexOf(shipyard.slug),
      }))
      .filter((item) => item.slug && item.title),
    getUniqueListBy(
      charterFilters.tags.map((tag) => ({
        param: 'tag',
        slug: tag.slug,
        title: tag.name,
        meta: metaItemsListRent.indexOf(tag.slug),
      })),
      'slug'
    )
      .filter((item) => item.slug && item.title),
    locations
      .map((location) => ({
        param: 'location',
        slug: location.slug,
        title: location.name,
        meta: metaItemsListRent.indexOf(location.slug),
      }))
      .filter((item) => item.slug && item.title),
  ]

  const saleList = [
    [
      {
        param: 'condition',
        slug: 'past-usage',
        title: sitemapStatic.conditions.pastUsage,
        meta: 1,
      },
      {
        param: 'condition',
        slug: 'new',
        title: sitemapStatic.conditions.new,
        meta: 1,
      },
    ],
    saleFilters.body
      .map((body) => ({
        param: 'body',
        slug: body.slug,
        title: body.name,
        meta: metaItemsListSail.indexOf(body.slug),
      }))
      .filter((i) => i.slug && i.title),
    saleFilters.cabins
      .map((cabin) => ({
        param: 'cabin',
        slug: cabin.key,
        title: cabin.value,
        meta: metaItemsListSail.indexOf(cabin.key),
      }))
      .filter((i) => i.slug && i.title),
    saleFilters.shipyards
      .map((shipyard) => ({
        param: 'shipyard',
        slug: shipyard.slug,
        title: shipyard.name,
        meta: metaItemsListSail.indexOf(shipyard.slug),
      }))
      .filter((i) => i.slug && i.title),
    getUniqueListBy(
      saleFilters.tags.map((tag) => ({
        param: 'tag',
        slug: tag.slug,
        title: tag.name,
        meta: metaItemsListSail.indexOf(tag.slug),
      })),
      'slug'
    ).filter((i) => i.slug && i.title),
  ]
  const saleLength = saleList.flat().length
  const charterLength = charterList.flat().length

  return (
    <StyledPageContent>
      <StyledTitle>{sitemapStatic.title}</StyledTitle>
      <StyledBlock>
        <Link prefetch={false} href={PATH.HOME} passHref>
          <StyledBlockTitle>{sitemapStatic.name}</StyledBlockTitle>
        </Link>
      </StyledBlock>
      <StyledBlock>
        <Link prefetch={false} href={PATH.SALE_CATALOG} passHref>
          <StyledBlockTitle>{sitemapStatic.sale}</StyledBlockTitle>
        </Link>
        <StyledBlockContent
          isMultiple={true}
          itemsLength={saleLength}
          sectionsCount={saleList.length}
        >
          {saleList.map((item) =>
            item.map(({ title, param, slug, meta }, i, items) => (
              <StyledLinkWrapper key={slug} isLast={i === items.length - 1}>
                <StyledLink
                  href={ meta !== -1 ? PATH.SALE_CATALOG + '/' + (param === 'cabin' ? 'cabin-' + slug : slug) :
                    {
                        pathname: PATH.SALE_CATALOG,
                        query: { [param]: slug },
                      }
                  }
                  passHref
                >
                  {title}
                </StyledLink>
              </StyledLinkWrapper>
            ))
          )}
        </StyledBlockContent>
      </StyledBlock>
      <StyledBlock>
        <Link prefetch={false} href={PATH.CHARTER_CATALOG} passHref>
          <StyledBlockTitle>{sitemapStatic.charter}</StyledBlockTitle>
        </Link>
        <StyledBlockContent
          isMultiple={true}
          itemsLength={charterLength}
          sectionsCount={charterList.length}
        >
          {charterList.map((item) =>
            item.map(({ title, param, slug, meta }, i, items) => (
              <StyledLinkWrapper key={slug} isLast={i === items.length - 1}>
                <StyledLink
                  href={ meta !== -1 ? PATH.CHARTER_CATALOG + '/' + slug:
                    {
                      pathname: PATH.CHARTER_CATALOG,
                      query: { [param]: slug },
                    }
                  }
                  passHref
                >
                  {title}
                </StyledLink>
              </StyledLinkWrapper>
            ))
          )}
        </StyledBlockContent>
      </StyledBlock>
      <StyledBlock>
        <Link prefetch={false} href={PATH.SERVICE_MANAGEMENT} passHref>
          <StyledBlockTitle>{sitemapStatic.service}</StyledBlockTitle>
        </Link>
        <StyledBlockContent>
          {sitemapStatic.serviceItems.map((item, i) => (
            <StyledLinkWrapper key={i}>
              <StyledLink href={item.path} passHref>
                {item.title}
              </StyledLink>
            </StyledLinkWrapper>
          ))}
        </StyledBlockContent>
      </StyledBlock>
      <StyledBlock style={{ border: 'none' }}>
        <Link prefetch={false} href={PATH.ABOUT} passHref>
          <StyledBlockTitle>{sitemapStatic.about}</StyledBlockTitle>
        </Link>
        <StyledBlockContent>
          {sitemapStatic.aboutItems.map((item, i) => (
            <StyledLinkWrapper key={i}>
              <StyledLink href={item.path} passHref>
                {item.title}
              </StyledLink>
            </StyledLinkWrapper>
          ))}
        </StyledBlockContent>
      </StyledBlock>
    </StyledPageContent>
  )
}

export default SitemapPage
