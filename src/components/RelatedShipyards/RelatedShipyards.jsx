import Slider from 'components/Slider'
import React, { useRef } from 'react'
import { getNoun } from 'utils/getNoun'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useTranslation } from 'utils/useTranslation'
import { breakpoints } from 'utils/vars'
import {
  SlideWrapper,
  StyledCaption,
  StyledCard,
  StyledContent,
  StyledHeader,
  StyledHeaderWrapper,
  StyledWrapper,
} from './RelatedShipyards.styled'

const RelatedShipyards = ({
  shipyards,
  navigationRef = useRef(null),
  title = 'Другие верфи Великобритании',
  isBuilding = false,
  isMain = false,
  shownCards = 4,
  className,
  count = 0,
  ...props
}) => {
  const { phablet, fullhd, notebook } = useBreakpoint()
  const buildingStatic = useTranslation('buildingStatic')
  return (
    <StyledWrapper ref={navigationRef} className={className}>
      {!isMain && (
        <StyledHeaderWrapper isBuilding={isBuilding}>
          <StyledHeader isBuilding={isBuilding}>{title}</StyledHeader>
          {isBuilding && (
            <StyledCaption isBuilding={isBuilding}>{`${count} ${getNoun(
              count,
              ...buildingStatic.partnersContent.title
            )}`}</StyledCaption>
          )}
        </StyledHeaderWrapper>
      )}
      <StyledContent isMain={isMain} isBuilding={isBuilding} {...props}>
        {!phablet &&
          !isMain &&
          shipyards.length < 5 &&
          shipyards.map((shipyard) => (
            <StyledCard key={shipyard.id || shipyard.slug} {...shipyard} />
          ))}
        {(isMain || (shipyards.length > 4 && !phablet)) && (
          <Slider
            params={{
              pagination: {
                el: '.swiper-pagination-detail',
                clickable: true,
                renderBullet: (index, className) => {
                  return `<div class=${className}><div></div></div>`
                },
              },
              slidesPerView: 'auto',
              spaceBetween: 0,
              freeMode: true,
              breakpoints: {
                [breakpoints.tablet + 1]: { spaceBetween: 0 },
                [breakpoints.fullhd + 1]: { spaceBetween: 0 },
              },
            }}
          >
            {shipyards.map((shipyard) => (
              <StyledCard
                key={shipyard.id || shipyard.slug}
                isMain={(isMain || shipyards.length > 4) && 'main'}
                style={
                  isMain
                    ? {}
                    : {
                        width: notebook ? '45%' : fullhd ? '28%' : '22%',
                        maxWidth: 'none',
                      }
                }
                // withoutPadding={true}
                {...shipyard}
              />
            ))}
          </Slider>
        )}
        {phablet && !isMain && (
          <Slider
            params={{
              pagination: {
                el: '.swiper-pagination-detail',
                clickable: true,
                renderBullet: (index, className) => {
                  return `<div class=${className}><div></div></div>`
                },
              },
              slidesPerView: 1,
            }}
          >
            {shipyards.map((shipyard) => (
              <SlideWrapper key={shipyard.id || shipyard.slug} {...shipyard}>
                <StyledCard {...shipyard} isBuilding={isBuilding} />
              </SlideWrapper>
            ))}
          </Slider>
        )}
      </StyledContent>
    </StyledWrapper>
  )
}

export default RelatedShipyards
