import Arrow from 'components/Slider/Arrow'
import { StyledArrows as Arrows } from 'components/Slider/YachtSlider/YachtSlider.styled'
import styled, { css } from 'styled-components'
import { ButtonDark } from 'ui/Buttons/ButtonDark'
import Paragraph from 'ui/Paragraph'
import { typography } from 'utils/mixins'
import { color, media, trans } from 'utils/vars'
import FeatureCard from 'ui/Cards/FeatureCard'

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 170px;

  ${media.fullhd} {
    margin-top: 110px;
  }
  ${media.notebook} {
    margin-top: 90px;
  }
  ${media.tablet} {
    margin-top: 81px;
  }
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  ${({ withoutPadding }) =>
    withoutPadding &&
    css`
      padding: 0 !important;
    `}
  margin-bottom: 36px;

  ${media.fullhd} {
    margin-bottom: 50px;
  }
  ${media.notebook} {
    margin-bottom: 42px;
  }
  ${media.tablet} {
    margin-bottom: 26px;
  }
`

export const StyledSliderWrapper = styled.div`
  padding-right: 0;
  margin-right: 0;

  .swiper-container {
    overflow: visible;
  }
`

export const StyledSlide = styled.div`
  max-width: 380px;

  ${media.tablet} {
    max-width: 293px;
  }
`

export const StyledArrow = styled(Arrow)``

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  ${media.tablet} {
    margin-top: 6px;
  }
`

export const ParamsWrapper = styled(StyledWrapper)`
  ${media.tablet} {
    display: none;
  }
  ${({ shipyardPage }) =>
    shipyardPage &&
    css`
      ${media.tablet} {
        flex-direction: column;
        margin-top: 0;
      }
    `}
`

export const StyledParamsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 39%;
  margin-top: 7px;
  margin-bottom: 28px;

  ${({ shipyardPage }) =>
    shipyardPage &&
    css`
      width: 53%;
    `}

  ${media.tablet} {
    width: 100%;
    margin-top: 43px;
  }
`
export const StyledParamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &:not(:last-child) {
    margin-right: 20px;
  }
  ${media.tablet} {
    min-width: calc(50% - 20px);
    width: fit-content;
    margin-bottom: 25px;
  }
`
export const StyledParamTitle = styled.div`
  margin-bottom: 12px;
  color: ${color.more};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
  padding-top: 12px;
  letter-spacing: 0.05em;

  ${media.tablet} {
    letter-spacing: normal;
    padding: 0;
  }
`
export const StyledParam = styled.div`
  font-size: 18px;
  white-space: nowrap;
  display: flex;
  align-items: flex-end;
  position: relative;

  ${media.tablet} {
    white-space: initial;
    font-size: 16px;
  }
`
export const StyledButton = styled(ButtonDark)`
  margin-left: 10px;
  max-height: 67px;
  white-space: nowrap;
  width: 100%;
  max-width: 290px;
  ${media.notebook} {
    margin-left: 30px;
    padding: 24px 32px;
  }
  ${media.tablet} {
    letter-spacing: 0.05em;
    margin: 0;
    max-width: 380px;
    width: 100%;
    padding: 20px 32px;
  }
`
export const StyledLength = styled.span`
  color: ${color.more};
  font-size: 16px;
  transition: ${trans.base} color;
  cursor: pointer;
  position: relative;
  margin-left: 2px;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${color.black};
      cursor: default;
    `}
`

export const StyledParams = styled.div``

export const StyledIntro = styled(Paragraph)`
  width: 77%;
  letter-spacing: normal;

  ${media.tablet} {
    width: 100%;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;

    letter-spacing: -0.02em;
  }
`

export const StyledIntroBlock = styled.div``

export const StyledButtonDark = styled(ButtonDark)`
  margin-top: 82px;

  ${media.tablet} {
    margin-top: 33px;
    padding: 17px 38px;
    background: transparent;
    color: ${color.black};
  }
  ${media.phablet} {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 18px;
  }
`

export const StyledTitle = styled.h2`
  ${typography.h1}
  font-size: 80px;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 22px;

  ${media.tablet} {
    margin-bottom: 21px;

    font-weight: normal;
    font-size: 26px;
    line-height: 34px;
  }
`

export const StyledArrows = styled(Arrows)`
  transform: translateY(-24px);
  margin: 0;
`

export const StyledCard = styled(FeatureCard)`
  &:last-child {
    margin-right: 0;
  }

  ${media.tablet} {
    &:first-child {
      padding-top: 36px;
    }

    & > div:last-child > div:last-child {
      max-width: none;
    }
  }
`
