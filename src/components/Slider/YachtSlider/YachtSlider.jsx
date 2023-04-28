import Slider from 'components/Slider'
import Arrow from 'components/Slider/Arrow'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useSwiper } from 'utils/useSwiper'
import {
  StyledArrows,
  StyledButton,
  StyledCard,
  StyledHeader,
  StyledNewsCard,
  StyledSliderWrapper,
  StyledTitle,
  Wrapper,
} from './YachtSlider.styled'
import { useTranslation } from 'utils/useTranslation'

const yachtsList = [
  { images: ['/img/yachts-list/slide7.png'] },
  { images: ['/img/yachts-list/slide6.png'] },
  { images: ['/img/yachts-list/slide7.png'] },
  { images: ['/img/yachts-list/slide6.png'] },
  { images: ['/img/yachts-list/slide7.png'] },
  { images: ['/img/yachts-list/slide6.png'] },
  { images: ['/img/yachts-list/slide7.png'] },
]

const YachtSlider = ({
  data = yachtsList,
  title = useTranslation('sliderStatic').title,
  showButton = true,
  withoutPadding = false,
  isNews = false,
  withNewsCards = false,
  mobButtonText = useTranslation('sliderStatic').mobButtonText,
  buttonText = useTranslation('sliderStatic').buttonText,
  isMain = false,
  onClick = () => {},
  link = null,
  buttonLink,
  ...props
}) => {
  const { goNext, goPrev, swiperRef } = useSwiper()
  const { tablet } = useBreakpoint()
  useEffect(() => {
    data.length > 0 && swiperRef?.current?.swiper?.slideTo(0)
  }, [data])
  return (
    <Wrapper {...props}>
      <StyledHeader isNews={isNews}>
        <StyledTitle isMain={isMain}>{title}</StyledTitle>
        <StyledArrows isNews={isNews} isMain={isMain}>
          <Arrow direction="back" onClick={goPrev} big="big" />
          <Arrow onClick={goNext} big="big" />
        </StyledArrows>
      </StyledHeader>
      {!withNewsCards && (
        <StyledSliderWrapper>
          <Slider
            ref={swiperRef}
            params={{ slidesPerView: 'auto', slideToClickedSlide: false }}
          >
            {data.map((yacht) => (
              <StyledCard
                {...yacht}
                key={yacht.id}
                withoutPadding={withoutPadding && 'withoutPadding'}
                flexGrow={true}
                isNews={isNews && 'isNews'}
              />
            ))}
          </Slider>
        </StyledSliderWrapper>
      )}
      {isNews && withNewsCards && !isMain && (
        <StyledSliderWrapper>
          <Slider
            ref={swiperRef}
            params={{ slidesPerView: 'auto', slideToClickedSlide: false }}
          >
            {data.map((yacht, index) => (
              <StyledNewsCard
                {...yacht}
                key={yacht.id || yacht.slug || index}
                withoutPadding={withoutPadding && 'withoutPadding'}
                flexGrow={true}
              />
            ))}
          </Slider>
        </StyledSliderWrapper>
      )}
      {isNews && withNewsCards && isMain && (
        <StyledSliderWrapper>
          {!tablet && (
            <Slider
              ref={swiperRef}
              params={{ slidesPerView: 'auto', slideToClickedSlide: false }}
            >
              {data.map((yacht, index) => (
                <StyledNewsCard
                  {...yacht}
                  key={yacht.id || yacht.slug || index}
                  withoutPadding={withoutPadding && 'withoutPadding'}
                  flexGrow={true}
                />
              ))}
            </Slider>
          )}
          {tablet && (
            <>
              {data.map((yacht, index) => (
                <StyledNewsCard
                  {...yacht}
                  key={yacht.id || yacht.slug || index}
                  withoutPadding={withoutPadding && 'withoutPadding'}
                  flexGrow={true}
                  isMain={true}
                />
              ))}
            </>
          )}
        </StyledSliderWrapper>
      )}
      {showButton &&
        (buttonLink ? (
          <Link prefetch={false}  href={buttonLink} passHref>
            <StyledButton
              isNews={isNews}
              isLink
              isMain={isMain}
              onClick={onClick}
            >
              {tablet ? mobButtonText : buttonText}
            </StyledButton>
          </Link>
        ) : (
          <StyledButton isNews={isNews} isMain={isMain} onClick={onClick}>
            {tablet ? mobButtonText : buttonText}
          </StyledButton>
        ))}
    </Wrapper>
  )
}

export default YachtSlider
