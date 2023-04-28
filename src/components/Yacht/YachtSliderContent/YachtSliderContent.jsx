import Slider from 'components/Slider'
import Arrow from 'components/Slider/Arrow'
import React, { useRef } from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useSpoiler } from 'utils/useSpoiler'
import { useSwiper } from 'utils/useSwiper'
import { breakpoints } from 'utils/vars'
import {
  SliderWrapper,
  StyledAboutText,
  StyledArrows,
  StyledFeaturesMob,
  StyledMore,
  StyledParagraph,
  StyledSliderWrapper,
  StyledSpoiler,
  StyledText,
  StyledTitle,
} from './YachtSliderContent.styled'

const SpoilerText = ({ text = '' }) => {
  const paragraphs = text
    .split(/\r?\n/)
    .join('')
    .match(/<p>.*?<\/p>/g)
  const ref = useRef(null)
  const { height, isOpened, toggleMore } = useSpoiler(ref)
  return paragraphs?.length > 2 ? (
    <StyledAboutText>
      {paragraphs.slice(0, 2).map((paragraph, index) => (
        <StyledParagraph
          key={index + paragraph}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}

      <StyledText height={height}>
        <StyledSpoiler ref={ref}>
          {paragraphs.slice(2).map((paragraph, index) => (
            <StyledParagraph
              key={index + paragraph}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </StyledSpoiler>
      </StyledText>
      <StyledMore onClick={toggleMore}>
        {isOpened ? 'Скрыть' : 'Показать полностью'}
      </StyledMore>
    </StyledAboutText>
  ) : (
    <StyledAboutText>
      <StyledParagraph dangerouslySetInnerHTML={{ __html: text }} />
    </StyledAboutText>
  )
}

const YachtSliderContent = ({
  title = 'О яхте',
  description,
  tabletView = true,
  aboutRef,
  managementRef,
  service = false,
  building = false,
  children,
  className,
  isBuilding,
  ...props
}) => {
  const { tablet: isTablet } = useBreakpoint()
  const { goNext, goPrev, swiperRef } = useSwiper()
  const getContent = () => (
    <StyledSliderWrapper className={className} isBuilding={isBuilding}>
      <StyledAboutText
        isService={service && 'service'}
        isBuilding={isBuilding && 'building'}
        offsetTop={!tabletView && 'offsetTop'}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <SliderWrapper isService={service && 'service'} isBuilding={isBuilding}>
        {!isBuilding && (
          <Slider
            ref={swiperRef}
            params={{
              breakpoints: {
                [breakpoints.tablet + 1]: { spaceBetween: 18 },
                [breakpoints.fullhd + 1]: {
                  spaceBetween: 24,
                },
              },
            }}
          >
            {children}
          </Slider>
        )}
        {isBuilding && (
          <Slider
            ref={swiperRef}
            params={{
              breakpoints: {
                [breakpoints.tablet + 1]: { spaceBetween: 20 },
                [breakpoints.fullhd + 1]: {
                  spaceBetween: 30,
                },
              },
            }}
          >
            {children}
          </Slider>
        )}
      </SliderWrapper>
      {children && (
        <StyledArrows>
          <Arrow direction="back" onClick={goPrev} big="big" />
          <Arrow onClick={goNext} big="big" />
        </StyledArrows>
      )}
    </StyledSliderWrapper>
  )
  return (
    <>
      <StyledTitle
        ref={(element) => {
          if (element) {
            if (service) {
              managementRef.current = element
            } else {
              aboutRef.current = element
            }
          }
        }}
        {...props}
      >
        {title}
      </StyledTitle>
      {tabletView && isTablet && description !== null && (
        <SpoilerText text={description} />
      )}

      {tabletView ? !isTablet && getContent() : getContent()}
      {tabletView && isTablet && children && (
        <StyledFeaturesMob>{children}</StyledFeaturesMob>
      )}
    </>
  )
}

export default YachtSliderContent
