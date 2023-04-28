import Slider from 'components/Slider'
import Arrow from 'components/Slider/Arrow'
import { rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'
import YachtCardFullwidth from 'ui/Cards/YachtCardFullwidth'
import { fullWidth } from 'utils/mixins'
import { useSwiper } from 'utils/useSwiper'
import { breakpoints, color, media } from 'utils/vars'
import { v4 } from 'uuid'

const content = [
  {
    label: 'Аренда',
    brand: 'Heesen',
    title: 'Lady Li 50m',
    image: {
      src: '/img/main/slide1@1x.jpg',
      srcSet: '/img/main/slide1@2x.jpg',
      alt: 'фото яхты',
    },
    text:
      'Суперяхта была построена на голландской верфи Heesen по индивидуальному заказу, была спущена на воду в мае 2015 года.',
  },
  {
    label: 'Продажа',
    brand: 'Heesen',
    title: 'Lady Li 50m',
    image: {
      src: '/img/main/slide1@1x.jpg',
      srcSet: '/img/main/slide1@2x.jpg',
      alt: 'фото яхты',
    },
    text:
      'Суперяхта была построена на голландской верфи Heesen по индивидуальному заказу, была спущена на воду в мае 2015 года.',
  },
  {
    label: 'Продажа',
    brand: 'Heesen',
    title: 'Lady Li 50m',
    image: {
      src: '/img/main/slide1@1x.jpg',
      srcSet: '/img/main/slide1@2x.jpg',
      alt: 'фото яхты',
    },
    text:
      'Суперяхта была построена на голландской верфи Heesen по индивидуальному заказу, была спущена на воду в мае 2015 года.',
  },
  {
    label: 'Продажа',
    brand: 'Heesen',
    title: 'Lady Li 50m',
    image: {
      src: '/img/main/slide1@1x.jpg',
      srcSet: '/img/main/slide1@2x.jpg',
      alt: 'фото яхты',
    },
    text:
      'Суперяхта была построена на голландской верфи Heesen по индивидуальному заказу, была спущена на воду в мае 2015 года.',
  },
]

const StyledWrapper = styled.div`
  position: relative;

  .swiper-pagination-bullets {
    display: none;
  }

  ${media.tablet} {
    margin-bottom: 42px;

    .swiper-container {
      width: 100%;
      padding-bottom: 50px;
    }

    .swiper-pagination-bullets {
      position: absolute;
      bottom: 0;
      width: 90%;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      transform: translate(-50%);
      left: 50%;
    }

    .swiper-pagination-bullet {
      padding: 12px 0;
      box-sizing: content-box;
      width: 100%;
      opacity: 1;
      border-radius: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      & > div {
        height: 2px;
        width: 100%;
        background: ${rgba(color.black, 0.2)};
      }
    }

    & .swiper-pagination-bullet-active {
      & > div {
        background: ${color.black};
      }
    }
  }
`

export const StyledArrows = styled.div`
  display: flex;
  position: absolute;
  bottom: 85px;
  top: auto;
  right: 0;
  z-index: 2;

  & > button {
    margin-left: 8px;
  }

  ${media.tablet} {
    top: 423px;
  }
`
const StyledArrow = styled(Arrow)`
  ${media.tablet} {
    width: 40px;
    height: 40px;
  }
`

export const StyledSliderWrapper = styled.div`
  padding-right: 0;
  margin-right: 0;
  ${fullWidth}

  .swiper-container {
    overflow: visible;
  }
`

const MainSlider = ({ banners }) => {
  const { goNext, goPrev, swiperRef } = useSwiper()
  return banners && banners.length > 0 ? (
    <StyledWrapper slidesAmount={content.length}>
      {banners.length > 1 && (
        <StyledArrows>
          <StyledArrow direction="back" onClick={goPrev} big="big" />
          <StyledArrow onClick={goNext} big="big" />
        </StyledArrows>
      )}
      <StyledSliderWrapper>
        <Slider
          loop={banners.length > 1}
          ref={swiperRef}
          params={{
            lazy: true,
            pagination: {
              el: '.product-swiper-pagination',
              clickable: true,
              type: 'bullets',
              renderBullet: (index, className) => {
                return `<div class=${className}><div></div></div>`
              },
            },
            slidesPerView: 'auto',
            loopedSlides: banners.length,
            spaceBetween: 0,
            breakpoints: {
              [breakpoints.tablet + 1]: { spaceBetween: 0 },
              [breakpoints.fullhd + 1]: { spaceBetween: 0 },
            },
          }}
        >
          {banners.map((banner) => (
            <YachtCardFullwidth {...banner} key={banner.id} />
          ))}
        </Slider>
      </StyledSliderWrapper>
    </StyledWrapper>
  ) : null
}

export default MainSlider
