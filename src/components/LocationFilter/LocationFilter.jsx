import React, { forwardRef, useEffect, useRef, useState } from 'react'
import getCoords from 'utils/getCoords'
import { useTranslation } from 'utils/useTranslation'
import ChooseRegion from './ChooseTab'
import {
  HiddenBlock,
  StyledClose,
  StyledHeader,
  StyledSearch,
  StyledSearchIcon,
  StyledSearchInput,
  StyledTab,
  StyledTabs,
  StyledWrapper,
} from './LocationFilter.styled'
import SearchTab from './SearchTab'

const getResult = (value, locations) => {
  let result = []
  const mapRegion = (item) => {
    if (
      item &&
      item.title &&
      item.title.toLowerCase().includes(value.toLowerCase())
    ) {
      result.push(item)
    }
  }
  locations.map((item) => {
    mapRegion(item)
    item.countries.map((item) => {
      mapRegion(item)
      item.regions.map(mapRegion)
    })
  })
  return result
}

const LocationFilter = forwardRef(
  ({ toggleLocation, activeLocations, menuRef, locations, favorites, filters }, ref) => {
    const [activeTab, setActiveTab] = useState(0)
    const [isSearching, setIsSearching] = useState(false)
    const hiddenBlock = useRef(null)
    const inputRef = useRef(null)
    const [value, setValue] = useState('')
    const onInputFocus = () => {
      setIsSearching(true)
    }
    const Search = () => {}
    const onIconClick = () => {
      if (!isSearching) {
        inputRef.current.focus()
      } else if (value) {
        Search()
      }
    }

    const element = useRef(null)
    useEffect(() => {
      if (element.current && menuRef.current) {
        element.current.parentNode.style.transform = `translateY(-${
          getCoords(element.current).top -
          getCoords(menuRef.current).top -
          menuRef.current.offsetHeight -
          15
        }px)`
      }
    }, [])

    const setInputWidth = (value) => {
      hiddenBlock.current.textContent = value
      inputRef.current.style.width = hiddenBlock.current.offsetWidth + 15 + 'px'
    }

    const yachtsFiltersStatic = useTranslation('yachtsFiltersStatic')

    useEffect(() => {
      if (isSearching) {
        setInputWidth(yachtsFiltersStatic.location.inputActive)
      } else {
        setInputWidth(yachtsFiltersStatic.location.input)
      }
    }, [isSearching])

    const result = value ? getResult(value, locations) : false
    const tabs = [
      {
        title: yachtsFiltersStatic.location.chooseTabTitle,
      },
      // { title: 'Указать на карте' },
    ]
    return (
      <StyledWrapper ref={element}>
        <StyledHeader>
          <StyledTabs isSearching={isSearching && 'searching'}>
            {tabs.map((tab, i) => (
              <StyledTab
                key={i}
                onClick={() => setActiveTab(i)}
                isActive={i === activeTab}
              >
                {tab.title}
              </StyledTab>
            ))}
          </StyledTabs>
          <StyledSearch>
            <StyledClose
              isSearching={isSearching && 'searching'}
              width={18}
              onClick={() => {
                setIsSearching(false)
                setValue('')
              }}
            />
            <StyledSearchInput
              placeholder={
                isSearching
                  ? yachtsFiltersStatic.location.inputActive
                  : yachtsFiltersStatic.location.input
              }
              ref={inputRef}
              isSearching={isSearching && 'searching'}
              onFocus={onInputFocus}
              value={value}
              onChange={(e) => {
                setInputWidth(e.target.value)
                setValue(e.target.value)
              }}
            />
            <HiddenBlock ref={hiddenBlock} />
            <StyledSearchIcon onClick={onIconClick} />
          </StyledSearch>
        </StyledHeader>
        <ChooseRegion
          toggleLocation={toggleLocation}
          activeLocations={activeLocations}
          show={!isSearching && activeTab === 0}
          locations={locations}
          favorites={favorites}
          filters={filters}
        />
        {/* {!isSearching && activeTab === 1 && <MapTab />} */}
        <SearchTab
          result={result}
          value={value}
          toggleLocation={toggleLocation}
          activeLocations={activeLocations}
          show={isSearching}
        />
      </StyledWrapper>
    )
  }
)
export default LocationFilter
