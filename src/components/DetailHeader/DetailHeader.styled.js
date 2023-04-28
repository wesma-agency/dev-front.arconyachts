import ArrowIcon from 'assets/icons/filter-arrow.svg'
import Slider from 'components/Slider'
import styled, { css } from 'styled-components'
import Badge from 'ui/Badge'
import { ButtonDark } from 'ui/Buttons/ButtonDark'
import Image from 'ui/Image'
import {
  animations,
  boxShadow,
  container,
  fullWidth,
  gap,
  typography,
  fonts,
} from 'utils/mixins'
import { color, media, trans } from 'utils/vars'
import wrapComponent from 'utils/wrapComponent'

export const Wrapper = styled.div`
  width: 100%;

  & .swiper-scrollbar {
    color: ${color.scrollBar};
    border-radius: 0;
    width: 90%;
    left: 50%;
    transform: translate(-50%);
    height: 2px;
    opacity: 0;
    padding: 16px 0;
    box-sizing: content-box;
    background: none;

    &:before {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      top: calc(50% - 1px);
      background: ${color.borderSocials};
    }
    ${media.tablet} {
      opacity: 1;
    }
  }
  & .swiper-scrollbar > .swiper-scrollbar-drag {
    background: ${color.accent};
    border-radius: 0;
  }

  ${media.tablet} {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const StyledHeader = styled.div`
  margin-bottom: 53px;
  position: relative;

  ${({ isBuilding }) => (isBuilding ? `margin-bottom: 47px` : ``)};

  ${media.tablet} {
    margin-top: 24px;
    margin-bottom: 0;
  }
`
export const StyledShipyardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
  ${media.tablet} {
    margin-top: 6px;
  }
`

export const StyledCurrenciesWrapper = styled(StyledWrapper)`
  margin-top: 9px;

  ${media.tablet} {
    margin-top: 0;
    flex-direction: column;
  }
`

export const StyledPage = styled.div`
  font-weight: 600;
  font-size: 10px;
  text-transform: uppercase;
  color: ${color.more};
`
export const StyledShipyard = styled.div`
  ${fonts.SangBleuSunrise};
  font-style: italic;
  font-size: 54px;
  color: ${color.shipyardTitle};
  margin-top: 12px;

  ${media.fullhd} {
    font-size: 50px;
  }
  ${media.notebook} {
    font-size: 44px;
  }
  ${media.tablet} {
    font-size: 34px;
    margin: 0;
    margin-top: 10px;
  }
  ${media.phablet} {
    font-size: 24px;
  }
`

export const StyledTitleWrapper = styled.div`
  ${media.tablet} {
    display: flex;
    align-items: flex-end;
    margin: 0;
    flex-wrap: wrap;
  }
`
export const StyledPrice = styled.div`
  font-weight: 500;
  font-size: 40px;
  letter-spacing: 0.04em;
  white-space: nowrap;

  ${media.fullhd} {
    font-size: 34px;
  }
  ${media.notebook} {
    font-size: 30px;
    letter-spacing: normal;
  }
  ${media.tablet} {
    white-space: initial;
    font-size: 28px;
    flex-shrink: 0;
  }
  ${media.phablet} {
    font-size: 26px;
  }
`
export const StyledTitle = styled.h1`
  color: ${color.shipyardHeader};
  display: inline;
  ${typography.h1};
  margin: 0;

  ${({ isBuilding }) =>
    isBuilding
      ? `font-weight: 500;
        font-size: 80px;
        line-height: 130%;
        letter-spacing: 0.02em;
        margin-bottom: 42px;
        ${media.tablet} {
          font-weight: normal;
          font-size: 26px;
          line-height: 38px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        `
      : ``}
`
export const StyledSubtitle = styled.div`
  ${fonts.SangBleuSunrise};
  color: ${color.shipyardHeader};
  font-size: 32px;
  display: inline-block;
  margin-top: 10px;

  ${media.fullhd} {
    font-size: 28px;
  }
  ${media.notebook} {
    font-size: 26px;
  }
  ${media.tablet} {
    margin-top: 0;
    font-size: 24px;
    display: block;
  }
  ${media.phablet} {
    font-size: 20px;
    margin-top: 5px;
  }
`

export const StyledItem = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: ${color.more};
  transition: ${trans.base} color;
  cursor: pointer;
  display: flex;

  &:hover {
    color: ${color.black};
    svg {
      opacity: 1;
    }
  }

  svg {
    opacity: 0.4;
    transition: ${trans.base} opacity;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${color.black};
      svg {
        opacity: 1;
      }
    `}
`

export const StyledCurrency = styled(StyledItem)`
  margin-left: 16px;
  font-size: 16px;

  &:hover {
    color: ${color.accentHover};
  }

  ${media.tablet} {
    ${gap(25)}
    font-size: 24px;
    margin-left: 0;
    ${({ isActive }) =>
      isActive &&
      css`
        display: none;
      `}
  }

  ${media.mobile} {
    ${gap(20)}
  }
`

export const StyledCurrencies = styled.div`
  display: flex;

  ${media.tablet} {
    margin-left: 27px;
    /* gap: 25px; */
  }

  ${media.mobile} {
    margin-left: 20px;
  }
  ${({ currenciesOrder }) =>
    currenciesOrder &&
    css`
      ${media.mobileLarge} {
        margin-top: 24px;
      }
    `}
`

export const StyledPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 10px;
  /* 
  ${({ currenciesOrder }) =>
    currenciesOrder &&
    css`
      flex-direction: column-reverse;
      justify-content: flex-end;
    `} */

  ${media.tablet} {
    margin-left: 0;
    margin-top: 32px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  ${({ currenciesOrder }) =>
    currenciesOrder &&
    css`
      ${media.mobileLarge} {
        flex-direction: column;
        align-items: flex-start;
        ${StyledCurrencies} {
          margin-left: 0;
        }
      }
    `}
`

export const StyledParamsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 74%;
  margin-top: 7px;

  ${({ shipyardPage }) =>
    shipyardPage &&
    css`
      width: 53%;
    `}

  ${({ isBuilding }) => (isBuilding ? `width: 47%` : ``)};

  ${media.tablet} {
    width: 100%;
    margin-top: 43px;

    ${({ isBuilding }) => (isBuilding ? `margin-top: 12px;` : ``)};
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
  padding-left: 0;
  padding-right: 0;
  display: flex;
  justify-content: center;
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

  &:not(:first-of-type) {
    margin-left: 6px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${color.black};
      cursor: default;
    `}
`

export const ParamsWrapper = styled(StyledWrapper)`
  margin-top: 56px;
  ${media.tablet} {
    flex-direction: column-reverse;
    margin-top: 28px;
  }
  ${({ shipyardPage }) =>
    shipyardPage &&
    css`
      ${media.tablet} {
        flex-direction: column;
        margin-top: 0;
      }
    `}

  ${({ isBuilding }) => (isBuilding ? `margin-top: 5px;` : ``)}
`

export const StyledSlider = styled(Slider)``

export const StyledSlide = styled.div`
  display: inline-block;
  width: auto;
  & > div {
    height: 100%;
    position: static !important;
    & > img {
      width: auto !important;
      height: 100% !important;
      position: static !important;
    }
  }
`

export const StyledBadge = styled(Badge)`
  border: 0.5px solid ${color.textActive};
  padding: 12px 20px;
  ${media.tablet} {
  }
`

export const StyledBadges = styled.div`
  display: flex;
  position: absolute;
  right: 40px;
  top: -120px;

  ${media.ultraWide} {
    right: 35px;
  }
  ${media.fullhd} {
    right: 30px;
  }
  ${media.notebook} {
    right: 25px;
  }

  & > div {
    margin-left: 10px;
  }

  ${media.tablet} {
    & > div {
      margin-left: 0;
      margin-right: 5px;
    }
    position: static;
    margin-top: 15px;
    margin-right: 5px;
  }
`

export const StyledTabs = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  flex-grow: 2;
`
export const StyledTab = styled.div`
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${color.more};
  position: relative;
  top: 0;
  transition: ${trans.base} color, ${trans.base} margin-right;
  ${gap(48)};

  &:hover {
    color: ${color.accentHover};
  }

  ${media.fullhd} {
    font-size: 12px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(calc(-100% - 10px), -50%);
    width: 0;
    height: 1px;
    background: ${color.black};
    transition: ${trans.base} width;
    ${media.fullhd} {
      display: none;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${color.black};
      &:before {
        width: 24px;
      }
    `}
`

export const StyledArrows = styled.div`
  display: flex;
  transition: ${trans.base} opacity;
  position: absolute;
  top: 30px;
  & > button {
    margin: 0;
    margin-right: 12px;
  }

  ${media.notebook} {
    display: none;
  }
`

export const StyledNavTitle = styled.div`
  opacity: 0;
  pointer-events: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  transition: ${trans.base} opacity;
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  flex-shrink: 10000;
  padding-right: 40px;
  & > div {
    margin-right: 0.25em;
  }
`

export const StyledTabsWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  ${fullWidth}
  ${container}
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  letter-spacing: 0.05em;
  background: ${color.white};
  height: 93px;

  ${({ isBuilding }) => (isBuilding ? `padding-top: 40px;` : ``)}

  &.sticky {
    position: fixed;
    top: 70px;
    z-index: 6;
    transition: ${trans.base} opacity;

    &-hide {
      opacity: 0;
      pointer-events: none;
    }

    & ${StyledNavTitle} {
      opacity: 1;
      pointer-events: initial;
    }
    & ${StyledArrows} {
      pointer-events: none;
      opacity: 0;
    }
    & ${StyledTab} {
      ${gap(72)}
      ${media.ultraWide} {
        ${gap(48)}
      }
      ${media.fullhd} {
        ${gap(24)}
      }
    }

    & + section {
      padding-top: 93px;
    }
  }
  ${media.notebook} {
    display: none;
    & + section {
      padding-top: 0;
    }
  }
`

export const StyledShipyardLogo = styled(Image)`
  position: relative;
  top: -18px;
  left: -14px;
  width: 20%;

  min-width: 133px;
  max-height: 250px;
  ${media.fullhd} {
    width: 25%;
  }

  ${media.tablet} {
    position: static;
    width: 40%;
  }

  span,
  img {
    width: 100%;
    height: 100% !important;
    object-fit: contain;
  }
`

export const StyledImage = styled(Image)`
  display: inline-block;
  height: 100%;

  & span,
  & img {
    height: 100%;
    object-fit: cover;
  }
`

export const StyledSliderWrapper = styled.div`
  width: 100vw;
  margin-left: -7vw;
  & .swiper-container {
    height: calc(100vw / 2.48);
    max-height: 620px;
    min-height: 440px;
  }
  ${media.fullhd} {
    margin-left: -6vw;
  }
  ${media.tablet} {
    margin-left: -5vw;
  }
`

export const StyledLengthMobile = styled.div``

export const Arrow = wrapComponent(ArrowIcon)
export const StyledArrow = styled(Arrow)`
  transition: ${trans.base} transform;
  margin-left: 8px;
  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `};
`

export const StyledLengthDrop = styled.div`
  opacity: 0;
  animation: ${animations.fadeIn} ${trans.base} forwards;
  white-space: nowrap;
  z-index: 2;
  position: absolute;
  background: ${color.white};
  ${boxShadow.filterDrop};
  top: calc(100% + 12px);
  padding: 28px 26px;
  border-radius: 16px;
`

export const StyledNavSubtitle = styled.div``
