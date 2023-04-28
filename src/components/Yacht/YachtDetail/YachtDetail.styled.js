import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import Button from 'ui/Buttons/Button'
import Image from 'ui/Image'
import { container, fullWidth, aspectRatio, fonts } from 'utils/mixins'
import { color, media, trans, breakpoints } from 'utils/vars'
export const StyledSliderWrapper = styled.div`
  ${fullWidth}
  position: relative;

  & .swiper-pagination-detail {
    display: none;
  }

  ${media.tablet} {
    & .swiper-pagination-detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 40px;
      position: absolute;
      z-index: 2;
      top: calc(100% - 14px);
    }

    & .swiper-pagination-bullet {
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
export const StyledText = styled.div`
  transition: opacity ${trans.base};
  width: 70%;
  color: ${color.secondaryColor};
  margin: 40px 0 0;
  font-size: 16px;
  line-height: 160%;
  opacity: 0;
  box-sizing: content-box;

  ${media.fullhd} {
    margin-left: auto;
    font-size: 15px;
  }
  ${media.notebook} {
    margin-top: 30px;
    font-size: 14px;
  }
  ${media.tablet} {
    font-size: 13px;
    margin: 20px auto 0;
    text-align: center;
    width: 100%;
    line-height: 20px;

    width: 90vw;
    margin-left: -11vw;
    box-sizing: content-box;
    padding-bottom: 60px;
    ${container};
    transition: ${trans.base} opacity;
    ${({ isActive }) =>
      isActive &&
      css`
        opacity: 0 !important;
        pointer-events: none;
      `}
  }
  ${media.phablet} {
    font-size: 12px;
  }
`

export const StyledArrows = styled.div`
  display: flex;
  margin-left: 7vw;
  ${media.fullhd} {
    margin-left: 6vw;
  }
  & > button {
    margin-right: 11px;
  }

  position: absolute;
  z-index: 2;
  top: 86%;

  ${media.notebook} {
    top: 95%;
  }

  ${media.tablet} {
    display: none;
  }
`

export const StyledSection = styled.section`
  margin: 180px auto 0;
  width: 100%;

  & + section {
    margin-top: 115px;

    ${media.tablet} {
      margin-top: 100px;
    }
    ${media.phablet} {
      margin-top: 69px;
    }
  }

  ${media.fullhd} {
    margin: 150px auto 0;
  }

  ${media.notebook} {
    margin: 130px auto 0;
  }

  ${media.tablet} {
    margin: 100px auto 0;
  }

  ${media.phablet} {
    margin: 89px auto 0;
  }
`

export const StyledHeader = styled.h2`
  ${fonts.SangBleuSunrise}
  text-transform: uppercase;
  font-size: 80px;
  margin-bottom: 69px;
  ${media.fullhd} {
    font-size: 70px;
    margin-bottom: 65px;
  }
  ${media.notebook} {
    font-size: 56px;
    margin-bottom: 50px;
  }
  ${media.tablet} {
    font-size: 36px;
    text-align: center;
    margin-bottom: 40px;
  }
  ${media.phablet} {
    margin-bottom: 37px;
    font-size: 26px;
  }
`

export const StyledTour = styled.div`
  width: 100%;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  left: 0;
  top: 0;
  height: 100%;
  transition: opacity ${trans.base}, background ${trans.base};
  color: ${color.white};
  padding: 10%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  ${media.fullhd} {
    padding: 5%;
  }

  ${media.tablet} {
    height: 90%;
    padding: 8%;
    background: ${rgba(color.black, 0.7)};
    ${({ isActive }) =>
      isActive &&
      css`
        opacity: 1;
        pointer-events: initial;
      `}
  }
  ${media.mobile} {
    padding: 5%;
  }
`

export const StyledTourHeader = styled.h3`
  font-size: 36px;
  line-height: 150%;
  text-transform: uppercase;

  ${media.fullhd} {
    font-size: 30px;
  }
  ${media.notebook} {
    font-size: 26px;
  }
  ${media.tablet} {
    font-size: 24px;
    text-align: center;
  }
  ${media.phablet} {
    font-size: 18px;
    margin-top: 20px;
  }

  ${media.mobile} {
    margin-top: 0;
  }
`
export const StyledTourText = styled.div`
  font-style: italic;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  ${media.fullhd} {
    font-size: 20px;
  }
  ${media.tablet} {
    text-align: center;
    font-size: 16px;
    line-height: 150%;
  }
  ${media.tablet} {
    font-size: 14px;
  }
`
export const StyledTourButton = styled(Button)`
  background: none;
  border: 1px solid ${color.white};
  color: ${color.white};
  width: fit-content;

  ${media.tablet} {
    padding: 11px 32px;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 14px;
    line-height: 24px;
    width: 100%;
  }
`

export const StyledImage = styled(Image)``

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transition: ${trans.base} filter, ${trans.base} height;

  ${media.tablet} {
    height: calc(78vw * ${210 / 293});
    overflow: hidden;

    ${({ isActive }) =>
      isActive &&
      css`
        img {
          filter: blur(10px);
        }
        height: 90%;
      `}
  }
`

export const StyledImageWrapper = styled.div`
  width: 100%;
  position: relative;
  transition: ${trans.base} transform;
  flex-grow: 2;
  height: auto;
  cursor: pointer;
  overflow: hidden;
  ${aspectRatio(810, 480)}
  ${media.tablet} {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    &:before {
      content: none;
    }
  }
`

export const StyledBlock = styled.div`
  transition: ${trans.base} transform;
  height: auto;
  max-width: 56%;
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    ${aspectRatio(293, 210)}
  }

  &.swiper-slide-active:not(.swiper-slide-duplicate) {
    @media screen and (min-width: ${breakpoints.tablet + 1}px) {
      // ${StyledImageWrapper}:hover img {
      //   filter: blur(10px);
      // }
      ${StyledImageWrapper}:hover img.enable-hover {
        filter: blur(10px);
      }
      ${StyledImageWrapper}:hover ${StyledTour} {
        opacity: 1;
        background: ${rgba(color.black, 0.7)};
        z-index: 2;
        pointer-events: initial;
      }
    }
  }
  &.swiper-slide-active,
  &.swiper-slide-duplicate-active {
    ${StyledText} {
      opacity: 1;
    }
  }

  ${media.notebook} {
    max-width: 600px;
  }

  ${media.tablet} {
    max-width: 78%;
    min-height: 390px;
    ${StyledImageWrapper} {
      transform: scale(1);
    }
  }
`
