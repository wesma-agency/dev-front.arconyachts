import Slider from 'components/Slider'
import { useSwiper } from 'utils/useSwiper'
import { breakpoints } from 'utils/vars'
import {
  ParamsWrapper,
  StyledArrow,
  StyledArrows,
  StyledButtonDark,
  StyledCard,
  StyledHeader,
  StyledIntro,
  StyledIntroBlock,
  StyledParam,
  StyledParamsWrapper,
  StyledParamTitle,
  StyledParamWrapper,
  StyledSliderWrapper,
  StyledTitle,
  Wrapper,
} from './MainBuilding.styled'
import Link from 'next/link'
import Image from 'next/image'
import { PATH } from 'config/path'
import { useTranslation } from 'utils/useTranslation'

const MainBuilding = ({}) => {
  const { goNext, goPrev, swiperRef } = useSwiper()
  const homeStatic = useTranslation('homeStatic')
  const { title, intro, params, buttonTitle, services } = homeStatic.building
  return (
    <Wrapper>
      <StyledHeader>
        <StyledIntroBlock>
          <StyledTitle>{title}</StyledTitle>
          {/* <StyledParams>{params}</StyledParams> */}
          <ParamsWrapper>
            <StyledParamsWrapper>
              {params.map(({ title, value }, i) => (
                <StyledParamWrapper key={i + title}>
                  <StyledParamTitle>{title}</StyledParamTitle>
                  <StyledParam>{value}</StyledParam>
                </StyledParamWrapper>
              ))}
            </StyledParamsWrapper>
          </ParamsWrapper>
          <StyledIntro>{intro}</StyledIntro>
        </StyledIntroBlock>

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
            slideToClickedSlide: true,
            breakpoints: {
              [breakpoints.tablet + 1]: { spaceBetween: 20 },
              [breakpoints.fullhd + 1]: {
                spaceBetween: 50,
              },
            },
          }}
        >
          {services.map((service, i) => (
            <StyledCard isBuilding {...service} key={i}>
              {!!service.src && (
                <Image
                  src={service.src}
                  alt={service.title}
                  width={80}
                  height={80}
                  loader={({src}) => src} // для загрузки без кэша (30.05.2023)
                />
              )}
            </StyledCard>
          ))}
        </Slider>
        <Link prefetch={false} href={PATH.BUILDING} passHref>
          <StyledButtonDark isLink>{buttonTitle}</StyledButtonDark>
        </Link>
      </StyledSliderWrapper>
    </Wrapper>
  )
}

export default MainBuilding
