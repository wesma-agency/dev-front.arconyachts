import { StyledHeader } from 'components/CharterPage/Journey/Journey.styled'
import Slider from 'components/Slider'
import Arrow from 'components/Slider/Arrow'
import {
  StyledArrows,
  StyledTitle,
} from 'components/Slider/YachtSlider/YachtSlider.styled'
import React from 'react'
import styled from 'styled-components'
import RouteCard from 'ui/Cards/RouteCard'
import { useSwiper } from 'utils/useSwiper'
import { useTranslation } from 'utils/useTranslation'
import { breakpoints, media } from 'utils/vars'

const StyledWrapper = styled.section`
  margin-top: 186px;

  .swiper-container {
    overflow: visible;
  }

  ${media.fullhd} {
    margin-top: 150px;
  }

  ${media.notebook} {
    margin-top: 120px;
  }

  ${media.tablet} {
    margin-top: 82px;
  }
`

const StyledCard = styled(RouteCard)``

const CharterRoutes = ({ routesRef, news, ...props }) => {
  const detailYachtStatic = useTranslation('detailYachtStatic')
  const { goNext, goPrev, swiperRef } = useSwiper()
  return (
    <StyledWrapper ref={routesRef} {...props}>
      <StyledHeader withoutPadding={'withoutPadding'}>
        <StyledTitle>{detailYachtStatic.travel_news.title}</StyledTitle>
        <StyledArrows>
          <Arrow direction="back" onClick={goPrev} big="big" />
          <Arrow onClick={goNext} big="big" />
        </StyledArrows>
      </StyledHeader>
      <Slider
        ref={swiperRef}
        params={{
          slidesPerView: 'auto',
          spaceBetween: 20,
          slideToClickedSlide: true,
          breakpoints: {
            [breakpoints.tablet + 1]: { spaceBetween: 32 },
            [breakpoints.fullhd + 1]: {
              spaceBetween: 47,
            },
          },
        }}
      >
        {news.map((item, i) => (
          <StyledCard {...item} key={item.id || i} />
        ))}
      </Slider>
    </StyledWrapper>
  )
}

export default CharterRoutes
