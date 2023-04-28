import React, { useRef, useState } from 'react'
import Simplebar from 'simplebar-react'
import { locations, previews } from './data'
import {
  ScrollWrapper,
  StyledPreview,
  StyledPreviewImage,
  StyledPreviewImageWrapper,
  StyledPreviews,
  StyledPreviewTitle,
  StyledTabContentWrapper,
} from './LocationFilter.styled'
import LocationSection from './LocationSection'
import { StyledStar } from './LocationSection.styled'

const ChooseTab = ({
  activeLocations,
  toggleLocation,
  show,
  locations,
  favorites,
  filters,
}) => {
  const [position, setPosition] = useState('shadow')
  const ref = useRef()
  const calcShadow = (el) => {
    if (el.scrollHeight <= el.clientHeight) return

    if (el.scrollTop + el.clientHeight < el.scrollHeight - 10) {
      setPosition('shadow')
    } else {
      setPosition('')
    }
  }
  return (
    <ScrollWrapper shadow={!position && 'shadow'} show={show && 'show'}>
      <Simplebar
        style={{ maxHeight: 475 }}
        autoHide={false}
        scrollableNodeProps={{ ref }}
        onScroll={(e) => calcShadow(e.target)}
      > 
        <StyledTabContentWrapper>
          {favorites.length > 0 && (
            <StyledPreviews>
              {favorites.map((preview, i) => (
                <StyledPreview
                  key={preview.location.slug}
                  onClick={() => toggleLocation(preview.location)}
                >
                  <StyledPreviewImageWrapper>
                    <StyledPreviewImage
                      cover="cover"
                      src={preview.image.fullpath}
                    />
                  </StyledPreviewImageWrapper>
                  <StyledPreviewTitle>
                    {preview.name}
                    {activeLocations?.includes(preview.location.slug) && (
                      <StyledStar />
                    )}
                  </StyledPreviewTitle>
                </StyledPreview>
              ))}
            </StyledPreviews>
          )}

          {locations.map((location, i) => (
            <LocationSection
              isCompilation={filters.find((el) => el.slug === location.slug)}
              filters={filters}
              key={i}
              toggleLocation={toggleLocation}
              index={i}
              activeLocations={activeLocations}
              {...location}
            />
          ))}
        </StyledTabContentWrapper>
      </Simplebar>
    </ScrollWrapper>
  )
}

export default ChooseTab
