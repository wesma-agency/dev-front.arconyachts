import React, { useEffect, useMemo, useState } from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import {
  StyledCountriesWrapper,
  StyledCountryTitle,
  StyledCountryWrapper,
  StyledRegionList,
  StyledRegionsWrapper,
  StyledRegionTitle,
  StyledStar,
  StyledTitle,
  StyledWrapper,
  LocationTitle,
  LocationTitleA,
  StyledRegionTitleA,
} from './LocationSection.styled'
import chunk from 'lodash.chunk'
import { useRouter } from 'next/router'

const LocationSection = ({
  toggleLocation,
  title,
  slug,
  countries,
  activeLocations,
  index,
  isCompilation,
  filters,
  ...props
}) => {
  const count =
    countries.length +
    countries.reduce((prev, current) => {
      return prev + (current.regions ? current.regions.length : 0)
    }, 0)
  const [columnCount, setColumnCount] = useState(4)
  const { fullhd, notebook } = useBreakpoint()
  useEffect(() => {
    if (notebook) {
      setColumnCount(2)
    } else if (fullhd) {
      setColumnCount(3)
    } else {
      setColumnCount(4)
    }
  }, [fullhd])
  const elementsPerColumn = useMemo(() => Math.ceil(count / columnCount), [
    count,
    columnCount,
  ])

  let locations = []

  countries.map((item) => {
    locations.push(item)
    item.regions?.map((region) => locations.push({ ...region, isRegion: true }))
  })

  const columns = [[], [], [], []]
  locations.map((item, i) => {
    let pushed = false
    for (const arr of columns) {
      if (arr.length < elementsPerColumn && !pushed) {
        arr.push(item)
        pushed = true
      }
    }
  })
  const router = useRouter()
  const link = [router.route.replace('/[slug]', ''), slug].join('/')
  const clickHandler = (e) => {
    e.preventDefault()
  }
  return (
    <StyledWrapper {...props} paddingBottom={index === 0 && 50}>
      <StyledTitle onClick={() => toggleLocation({ slug, title })}>
        {isCompilation ? (
          <LocationTitleA href={link} onClick={clickHandler}>
            {title}
          </LocationTitleA>
        ) : (
          <LocationTitle>{title}</LocationTitle>
        )}
        {activeLocations?.includes(slug) && <StyledStar />}
      </StyledTitle>
      <StyledCountriesWrapper>
        {columns.map((column, i) => (
          <StyledCountryWrapper key={i + column}>
            {column.map((item, index) => {
              const isCompilation = filters.find((el) => el.slug === item.slug)
              const link = [
                router.locale === 'ru' ? '/ru' : '',
                router.route.replace('/[slug]', ''),
                '/',
                item.slug,
              ].join('')
              {
                return isCompilation ? (
                  <StyledRegionTitleA
                    href={link}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleLocation(item)
                    }}
                    key={index + item.title}
                  >
                    {item.isRegion && <StyledRegionList>—</StyledRegionList>}
                    {item.title}
                    {activeLocations?.includes(item.slug) && <StyledStar />}
                  </StyledRegionTitleA>
                ) : (
                  <StyledRegionTitle
                    onClick={() => toggleLocation(item)}
                    key={index + item.title}
                  >
                    {item.isRegion && <StyledRegionList>—</StyledRegionList>}
                    {item.title}
                    {activeLocations?.includes(item.slug) && <StyledStar />}
                  </StyledRegionTitle>
                )
              }
            })}
          </StyledCountryWrapper>
        ))}
        {/* {countries.map((country, i) => (
          <StyledCountryWrapper key={country.slug}>
            <StyledCountryTitle onClick={() => toggleLocation(country)}>
              {country.title}
              {activeLocations?.includes(country.slug) && <StyledStar />}
            </StyledCountryTitle>
            <StyledRegionsWrapper>
              {country.regions?.length > 0 &&
                country.regions.map((region, i) => (
                  <StyledRegionTitle
                    key={region.slug}
                    onClick={() => toggleLocation(region)}
                  >
                    <StyledRegionList>—</StyledRegionList>
                    {region.title}
                    {activeLocations?.includes(region.slug) && <StyledStar />}
                  </StyledRegionTitle>
                ))}
            </StyledRegionsWrapper>
          </StyledCountryWrapper>
        ))} */}
      </StyledCountriesWrapper>
    </StyledWrapper>
  )
}

export default LocationSection
