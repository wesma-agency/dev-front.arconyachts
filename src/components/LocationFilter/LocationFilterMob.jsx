import { PATH } from 'config/path'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import Checkbox from 'ui/Filters/Checkbox'
import { CatalogFilterContext } from 'utils/context/CatalogFilterContext'
import { divideFilter } from 'utils/divideFilter'
import { useBreakpoint } from 'utils/useBreakpoint'
import {
  StyledApply,
  StyledApplyWrapper,
  StyledBackIcon,
  StyledDropIcon,
  StyledItemsWrapper,
  StyledItemWrapper,
  StyledSubLocationItem,
  StyledSublocationWrapper,
  StyledWrapper,
  SubLocationTitle,
  SubLocationTitleWrapper,
} from './LocationFilterMob.styled'

const SubLocation = ({
  locations = [],
  locationOpened = false,
  setLocationOpened = () => {},
  close = () => {},
  isRegion = false,
  top = 0,
  toggleLocation,
  activeLocations,
  isClosing,
  setIsClosing,
  onApply,
}) => {
  return (
    <StyledSublocationWrapper
      isClosing={isClosing && 'closing'}
      isRegion={isRegion && isRegion}
      top={top}
    >
      <SubLocationTitleWrapper>
        <SubLocationTitle>
          {locationOpened && locationOpened.title}
        </SubLocationTitle>
        <StyledBackIcon
          onClick={() => {
            setIsClosing(true)
            setTimeout(close, 300)
          }}
        />
      </SubLocationTitleWrapper>
      <StyledItemsWrapper>
        {locations.map((location, i) => {
          const subLocations = []

          location?.regions?.map((region) => subLocations.push(region))
          subLocations.push(location)
          return (
            <StyledSubLocationItem key={i}>
              <Checkbox
                title={location.title}
                value={
                  subLocations.filter((item) =>
                    activeLocations?.includes(item.slug)
                  ).length > 0
                }
                onClick={() => toggleLocation(location)}
              />
              {!isRegion && location.regions && location.regions.length > 0 && (
                <StyledDropIcon onClick={() => setLocationOpened(location)} />
              )}
            </StyledSubLocationItem>
          )
        })}
      </StyledItemsWrapper>
      {!isRegion && (
        <StyledApplyWrapper>
          <StyledApply onClick={onApply}>Применить фильтры</StyledApply>
        </StyledApplyWrapper>
      )}
    </StyledSublocationWrapper>
  )
}

const LocationFilterMob = ({ locations, activeLocations, toggleLocation }) => {
  const [locationOpened, setLocationOpened] = useState(false)
  const [countryOpened, setCountryOpened] = useState(false)
  const { wrapper } = useContext(CatalogFilterContext)
  const { tablet } = useBreakpoint()
  const router = useRouter()
  const { query } = router
  useEffect(() => {
    if (tablet) {
      if (locationOpened || countryOpened) {
        wrapper.current.style.overflow = 'hidden'
      } else {
        wrapper.current.style.overflow = 'auto'
      }
    } else {
      wrapper.current.style.overflow = 'initial'
    }
  }, [locationOpened, countryOpened, tablet])

  const [isClosingLocation, setIsClosingLocation] = useState(false)

  const [isClosingCountry, setIsClosingCountry] = useState(false)

  const closeCountry = () => {
    setCountryOpened(false)
    setIsClosingCountry(false)
  }
  const closeLocation = () => {
    setLocationOpened(false)
    setIsClosingLocation(false)
  }

  const onApply = () => {
    setIsClosingCountry(true)
    setIsClosingLocation(true)

    setTimeout(() => {
      closeLocation()
      closeCountry()
    }, 300)
  }

  return (
    tablet && (
      <>
        <StyledWrapper>
          {locations.map((location, i) => {
            const subLocations = []
            location.countries?.map((country) => {
              subLocations.push(country.slug)
              country?.regions?.map((region) => subLocations.push(region.slug))
            })
            subLocations.push(location.slug)
            const value = subLocations.filter((item) =>
              activeLocations?.includes(item)
            )
            return (
              <StyledItemWrapper key={i}>
                <Checkbox
                  title={location.title}
                  value={value.length > 0}
                  onClick={() => {
                    if (value.length > 0) {
                      const newQuery = {
                        ...query,
                        location: Array.isArray(query.location)
                          ? query.location
                          : [query.location],
                      }
                      const newLocations = newQuery?.location?.filter(
                        (slug) => !subLocations.includes(slug)
                      )
                      if (newLocations?.length > 0) {
                        newQuery.location = newLocations
                      } else {
                        delete newQuery.location
                      }
                      router.push(
                        { pathname: PATH.CHARTER_CATALOG, query: newQuery },
                        undefined,
                        { shallow: true }
                      )
                    } else {
                      toggleLocation(location)
                    }
                  }}
                />
                <StyledDropIcon onClick={() => setLocationOpened(location)} />
              </StyledItemWrapper>
            )
          })}
        </StyledWrapper>
        {locationOpened && (
          <SubLocation
            locationOpened={locationOpened}
            setLocationOpened={setCountryOpened}
            close={closeLocation}
            top={wrapper.current.scrollTop}
            activeLocations={
              activeLocations?.includes(locationOpened.slug)
                ? locationOpened.countries.map((item) => item.slug)
                : activeLocations
            }
            toggleLocation={({ slug }) => {
              if (activeLocations?.includes(locationOpened.slug)) {
                const newQuery = { ...query }
                const newLocations = locationOpened.countries
                  .filter((item) => item.slug !== slug)
                  .map((item) => item.slug)
                  .concat(
                    activeLocations.filter(
                      (item) => item !== locationOpened.slug
                    )
                  )
                if (newLocations?.length > 0) {
                  newQuery.location = newLocations
                } else {
                  delete newQuery.location
                }
                router.push(
                  { pathname: PATH.CHARTER_CATALOG, query: newQuery },
                  undefined,
                  { shallow: true }
                )
              } else {
                const currentCountry = locationOpened.countries.filter(
                  (item) => item.slug === slug
                )
                let hasChildrenValue = false

                currentCountry[0].regions.map((region) => {
                  if (activeLocations.includes(region.slug)) {
                    hasChildrenValue = true
                  }
                })
                if (hasChildrenValue) {
                  const childrenRegions = currentCountry[0].regions.map(
                    (item) => item.slug
                  )
                  const locations = activeLocations.filter(
                    (location) => !childrenRegions.includes(location)
                  )

                  const newQuery = { ...query }

                  if (locations.length > 0) {
                    newQuery.location = locations
                  } else {
                    delete newQuery.location
                  }

                  router.push(
                    { pathname: PATH.CHARTER_CATALOG, query: newQuery },
                    undefined,
                    { shallow: true }
                  )
                } else {
                  toggleLocation({ slug })
                }
              }
            }}
            locations={locationOpened ? locationOpened.countries : []}
            isClosing={isClosingLocation}
            setIsClosing={setIsClosingLocation}
            onApply={onApply}
          />
        )}
        {countryOpened && (
          <SubLocation
            locationOpened={countryOpened}
            isRegion={true}
            close={closeCountry}
            top={wrapper.current.scrollTop}
            locations={countryOpened ? countryOpened.regions : []}
            activeLocations={
              activeLocations?.includes(countryOpened.slug) ||
              activeLocations?.includes(locationOpened.slug)
                ? countryOpened.regions.map((item) => item.slug)
                : activeLocations
            }
            toggleLocation={({ slug }) => {
              const result = []
              const currentLocation = locationOpened.slug
              const currentCountry = countryOpened.slug
              const restLocations = []
              const avoidLocations = []

              if (activeLocations.includes(currentLocation)) {
                const [restCountries, currentCountries] = divideFilter(
                  locationOpened.countries,
                  (country) => country.slug !== currentCountry
                )
                restCountries.map((item) => result.push(item.slug))
                currentCountries[0].regions
                  .filter((region) => region.slug !== slug)
                  .map((item) => result.push(item.slug))
                avoidLocations.push(currentLocation)
                locationOpened.countries.map((country) => {
                  avoidLocations.push(country.slug)
                  country.regions.map((region) =>
                    avoidLocations.push(region.slug)
                  )
                })
              } else if (activeLocations.includes(currentCountry)) {
                avoidLocations.push(currentCountry)
                countryOpened.regions
                  .filter((region) => {
                    avoidLocations.push(region.slug)
                    return region.slug !== slug
                  })
                  .map((item) => result.push(item.slug))
              } else if (!activeLocations.includes(slug)) {
                result.push(slug)
              } else {
                avoidLocations.push(slug)
              }
              activeLocations.map((location) => {
                if (!avoidLocations.includes(location)) {
                  restLocations.push(location)
                }
              })

              const newQuery = { ...query }

              if (result.concat(restLocations).length > 0) {
                newQuery.location = result.concat(restLocations)
              } else {
                delete newQuery.location
              }

              router.push(
                { pathname: PATH.CHARTER_CATALOG, query: newQuery },
                undefined,
                { shallow: true }
              )
            }}
            isClosing={isClosingCountry}
            setIsClosing={setIsClosingCountry}
            onApply={onApply}
          />
        )}
      </>
    )
  )
}

export default LocationFilterMob
