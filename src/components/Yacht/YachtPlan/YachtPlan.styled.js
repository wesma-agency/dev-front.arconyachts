import styled, { css } from 'styled-components'
import Container from 'ui/Container'
import Image from 'ui/Image'
import { color, media, trans, breakpoints } from 'utils/vars'
import { fonts } from 'utils/mixins'

export const StyledWrapper = styled.section`
  margin-top: 180px;

  ${media.fullhd} {
    margin-top: 140px;
  }
  ${media.notebook} {
    margin-top: 120px;
  }
  ${media.tablet} {
    margin-top: 100px;
  }
  ${media.phablet} {
    margin-top: 82px;
  }
`

export const StyledTitle = styled.h2`
  ${fonts.SangBleuSunrise}
  font-size: 80px;
  text-transform: uppercase;
  width: 100%;
  display: flex;
  line-height: 130%;

  ${media.fullhd} {
    font-size: 65px;
  }
  ${media.notebook} {
    font-size: 50px;
  }
  ${media.tablet} {
    justify-content: center;
    font-size: 36px;
  }
  ${media.phablet} {
    font-size: 26px;
  }
`

export const StyledTabsWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid ${color.subacive};
  position: relative;
  display: block;
  white-space: nowrap;
  overflow-x: auto;
  border: none;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent;
  }

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
  &:after {
    content: '';
    width: 0;
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${color.subacive};
  }
  &:before {
    content: '';
    width: 100%;
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${color.subacive};
  }
  ${media.tablet} {
    margin-top: 13px;
  }
`

export const StyledUnderline = styled.div`
  width: 0;
  transition: ${trans.base} width, ${trans.base} background,
    ${trans.base} opacity;
  background: ${color.borderActive};
  opacity: 0.6;
  bottom: 0;
  height: 2px;
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  z-index: 5;

  ${({ isActive }) =>
    isActive &&
    css`
      width: 100%;
      opacity: 1;
    `}
`

export const StyledTab = styled.div`
  padding: 43px 53px;
  cursor: pointer;
  white-space: nowrap;
  font-size: 18px;
  position: relative;

  @media screen and (min-width: ${breakpoints.tablet + 1}px) {
    &:hover ${StyledUnderline} {
      width: 100%;
    }
  }
  display: inline-flex;
  justify-content: center;
  &:after {
    content: '';
    background: ${color.subacive};
    width: 100%;
    position: absolute;
    left: 0;
    height: 2px;
    bottom: 0;
  }

  ${media.fullhd} {
    padding: 36px 48px;
    font-size: 17px;
  }
  ${media.notebook} {
    padding: 30px 40px;
    font-size: 16px;
  }
  ${media.tablet} {
    padding: 24px 35px;
    font-size: 15px;
    padding: 23px 0px;
    font-size: 14px;

    min-width: 20%;
  }
  ${media.mobileLarge} {
    min-width: 30%;
  }
`
export const StyledTabContent = styled.div`
  width: 100%;
`

export const StyledImageWrapper = styled.div`
  margin-top: 120px;
  ${media.fullhd} {
    margin-top: 110px;
  }
  ${media.notebook} {
    margin-top: 100px;
  }
  ${media.tablet} {
    margin-top: 90px;
  }
  ${media.phablet} {
    margin-top: 80px;
  }

  & > div > div {
    padding-top: 0 !important;
  }
  img {
    height: auto !important;
    width: auto !important;
    position: static !important;
  }
`

export const StyledContentWrapper = styled(StyledImageWrapper)`
  max-width: 480px;
  font-size: 16px;
  line-height: 160%;
  ${media.notebook} {
    font-size: 15px;
  }
  ${media.tablet} {
    font-size: 14px;
    margin-top: 82px;
    max-width: min(95%, 480px);
  }
  ${media.phablet} {
    margin-top: 82px;
  }
`
export const StyledImage = styled(Image)`
  transform: rotate(-180deg);
`

export const ScrollOverlay = styled.div`
  background: linear-gradient(
    270deg,
    #ffffff 19.41%,
    rgba(255, 255, 255, 0) 94.5%
  );
  height: calc(100% - 2px);
  position: absolute;
  top: 0;
  left: 0;
  width: 175px;
  transform: rotate(180deg);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  opacity: 0;
  pointer-events: none;
  transition: ${trans.base} opacity;
  cursor: pointer;
  ${({ show }) =>
    show &&
    css`
      pointer-events: initial;
      opacity: 1;

      &:hover {
        svg {
          opacity: 0.5;
        }
      }
    `}

  ${media.tablet} {
    width: 50px;
  }

  svg {
    transition: ${trans.base} opacity;
    width: 11px;
    height: 20px;
  }
`
export const ScrollOverlayRight = styled(ScrollOverlay)`
  left: initial;
  right: 0px;
  transform: none;
`

export const Tabs = styled.div`
  width: 100%;
  position: relative;
`
