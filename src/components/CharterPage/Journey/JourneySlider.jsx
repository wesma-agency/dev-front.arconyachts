import Slider from 'components/Slider'
import {
  StyledArrows,
  StyledTitle,
} from 'components/Slider/YachtSlider/YachtSlider.styled'
import React, { memo } from 'react'
import JourneyCard from 'ui/Cards/JourneyCard'
import { useSwiper } from 'utils/useSwiper'
import { breakpoints } from 'utils/vars'
import {
  StyledArrow,
  StyledCardWrapper,
  StyledHeader,
  StyledSliderWrapper,
  Wrapper,
} from './Journey.styled'

const JourneySlider = ({ journeys }) => {
  const { goNext, goPrev, swiperRef } = useSwiper()
  return (
    <Wrapper>
      <StyledHeader>
        <StyledTitle>Выберите путешествие</StyledTitle>
        <StyledArrows>
          <StyledArrow direction="back" onClick={goPrev} big="big" />
          <StyledArrow onClick={goNext} big="big" />
        </StyledArrows>
      </StyledHeader>
      <StyledSliderWrapper>
        <Slider
          ref={swiperRef}
          params={{
            slidesPerView: 'auto',
            spaceBetween: 20,
            slideToClickedSlide: true,
            breakpoints: {
              [breakpoints.tablet + 1]: { spaceBetween: 20 },
              [breakpoints.fullhd + 1]: {
                spaceBetween: 24,
              },
            },
          }}
        >
          {journeys.map((journey, i) => (
            <StyledCardWrapper key={i}>
              <JourneyCard {...journey} />
            </StyledCardWrapper>
          ))}
        </Slider>
      </StyledSliderWrapper>
    </Wrapper>
  )
}

export default memo(JourneySlider)
