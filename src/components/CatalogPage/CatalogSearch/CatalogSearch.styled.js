import FiltersIcon from 'assets/icons/filters.svg'
import SearchIcon from 'assets/icons/search.svg'
import styled, { css } from 'styled-components'
import XMark from 'ui/XMark'
import { color, media, trans } from 'utils/vars'
import wrapComponent from 'utils/wrapComponent'
import { fonts } from 'utils/mixins'

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  min-height: 104px;
  box-sizing: content-box;
  padding-top: 20px;
  ${media.fullhd} {
    min-height: 84px;
  }
  ${media.notebook} {
    min-height: 65px;
  }
  ${media.tablet} {
    min-height: 52px;
    padding-top: 60px;
  }
  ${media.phablet} {
    min-height: 42px;
  }
  ${media.mobileLarge} {
    min-height: 35px;
  }
`

export const largeText = css`
  font-weight: 500;
  font-size: 80px;
  color: ${color.black};
  ${fonts.SangBleuSunrise}
  line-height: 130%;

  ${media.fullhd} {
    font-size: 65px;
  }
  ${media.notebook} {
    font-size: 50px;
  }
  ${media.tablet} {
    font-size: 40px;
  }
  ${media.phablet} {
    font-size: 32px;
  }
  ${media.mobileLarge} {
    font-size: 26px;
  }
`
export const StyledHeaderWrapper = styled.div`
  position: relative;
  width: fit-content;
  max-width: calc(100% - 160px);

  ${media.tablet} {
    max-width: calc(100% - 60px);
  }
`

export const StyledHeader = styled.h1`
  ${largeText};

  font-size: 5.24vw;

  ${media.fullhd} {
    font-size: 5.075vw;
  }
  ${media.notebook} {
    font-size: 5.1vw;
  }
  ${media.tablet} {
    font-size: 5.207vw;
  }
  ${media.phablet} {
    font-size: 5vw;
  }
  ${media.mobileLarge} {
    font-size: 5.415vw;
  }

  ${`@media screen and (max-width: 420px)`} {
    font-size: 4.5vw;
  }

  transition: ${trans.medium} opacity;
  opacity: 1;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;

  ${media.tablet} {
    flex-grow: 1000;
    flex-shrink: 10000;
    text-align: center;
    padding: 0 10px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0;
    `}
`

export const StyledSubTitle = styled.span`
  font-size: 14px;
  margin-left: 10px;
`

export const SearchIconBlock = wrapComponent(SearchIcon)
export const StyledSearchIcon = styled(SearchIconBlock)`
  cursor: pointer;

  svg path {
    transition: ${trans.base} stroke;
  }

  &:hover svg path {
    stroke: ${color.accentHover};
  }
  ${media.tablet} {
    svg {
      width: 32px;
      height: 32px;
    }

    ${({ isActive }) =>
      isActive &&
      css`
        display: none;
      `}
  }
`

const FiltersIconBlock = wrapComponent(FiltersIcon)
export const StyledFiltersIcon = styled(FiltersIconBlock)`
  cursor: pointer;
  display: none;

  ${media.tablet} {
    display: block;
  }
`

export const StyledInput = styled.input`
  padding: 0;
  background: none;
  border: none;
  ${largeText};
  margin-left: 28px;
  padding-right: 50px;
  width: 100%;
  text-transform: uppercase;

  &::placeholder {
    font-weight: 300;
    color: ${color.black};
    opacity: 0.2;
    font-size: 0.75em;
    ${media.tablet} {
      font-size: 1em;
    }
  }

  ${media.tablet} {
    margin-left: 0;
  }

  ${media.notebook} {
    display: none;
  }
`

export const StyledTitle = styled.div`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: ${color.more};
  position: absolute;
  top: 0;
  left: 0;
  text-transform: uppercase;

  ${media.tablet} {
    ${({ catalogPage }) =>
      catalogPage &&
      css`
        display: none;
      `}
    left: 50%;
    transform: translate(-50%);
  }
`

export const StyledSearchWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  transition: ${trans.medium} transform;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translate(calc(-100% + 50px));
    `}
`

export const StyledInputWrapper = styled.div`
  opacity: 0;
  box-sizing: border-box;
  padding-left: 50px;
  position: absolute;
  left: 100%;
  bottom: 0;
  display: flex;
  width: 100%;
  transition: ${trans.medium} opacity, ${trans.medium} transform;

  ${media.tablet} {
    height: auto;
    transform: none;
    padding-left: 0;
    ${({ isActive }) =>
      isActive &&
      css`
        transform: translate(-100%);
        opacity: 1;
      `}
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translate(-100%);
      opacity: 1;
    `}
`

export const StyledClose = styled(XMark)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 2;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.4;
  & div {
    width: 32px;
    transition: ${trans.base} background;
  }
  &:hover div {
    background: ${color.accentHover};
  }

  ${media.tablet} {
    & div {
      width: 24px;
    }
    right: 0;
    width: 32px;
    height: 32px;
  }
`

export const StyledFound = styled.div`
  color: ${color.textActive};
  font-size: 18px;
  line-height: 22px;
  position: absolute;
  left: calc(100% + 16px);
  top: 20px;
  white-space: nowrap;
  text-transform: none;

  ${media.fullhd} {
    top: 15px;
  }

  ${media.notebook} {
    top: 12px;
  }
  ${media.tablet} {
    display: none;
  }
`

export const StyledInputMob = styled(StyledInput)`
  display: none;
  ${media.notebook} {
    display: inline-block;
    width: 90%;
  }
`
