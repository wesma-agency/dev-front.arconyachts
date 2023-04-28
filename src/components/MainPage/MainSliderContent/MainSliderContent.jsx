import Slider from 'components/Slider'
import Arrow from 'components/Slider/Arrow'
import React from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useSwiper } from 'utils/useSwiper'
import { breakpoints } from 'utils/vars'
import { v4 } from 'uuid'
import {
  SliderWrapper,
  StyledAboutText,
  StyledArrows,
  StyledFeaturesMob,
  StyledSliderWrapper,
  StyledTitle,
  StyledParagraph,
} from './MainSliderContent.styled'

const MainSliderContent = ({
  title,
  description,
  tabletView = true,
  children,
  className,
  ...props
}) => {
  const { tablet: isTablet } = useBreakpoint()
  const { goNext, goPrev, swiperRef } = useSwiper()

  const getContent = () => (
    <StyledSliderWrapper className={className}>
      <StyledAboutText>
        {description.map((item) => (
          <StyledParagraph key={v4()}>{item}</StyledParagraph>
        ))}
      </StyledAboutText>
      <SliderWrapper>
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
      </SliderWrapper>
      <StyledArrows>
        <Arrow direction="back" onClick={goPrev} big="big" />
        <Arrow onClick={goNext} big="big" />
      </StyledArrows>
    </StyledSliderWrapper>
  )
  return (
    <>
      <StyledTitle {...props}>{title}</StyledTitle>

      {tabletView ? !isTablet && getContent() : getContent()}
      {tabletView && isTablet && (
        <StyledFeaturesMob>{children}</StyledFeaturesMob>
      )}
    </>
  )
}

export default MainSliderContent
