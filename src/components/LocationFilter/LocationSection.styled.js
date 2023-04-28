import StarIcon from 'assets/icons/star.svg'
import styled, { css } from 'styled-components'
import { color, media, trans } from 'utils/vars'
import wrapComponent from 'utils/wrapComponent'

export const StyledWrapper = styled.div`
  padding: 40px 0;
  font-size: 13px;
  line-height: 34px;
  display: flex;
  width: 100%;
  position: relative;
  &:first-child {
    padding-top: 0;
  }
  &:not(:last-child) {
    &:before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0px;
      width: 100%;
      height: 1px;
      background: ${color.border};
    }
  }

  ${({ paddingBottom }) =>
    paddingBottom &&
    css`
      padding-bottom: ${paddingBottom}px;
    `};
`

export const StyledTitle = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 32px;
  width: 20%;
  padding-right: 20px;

  ${media.fullhd} {
    flex-shrink: 2;
    width: 25%;
  }
  ${media.notebook} {
    flex-shrink: 1;
    width: 33%;
  }
`

export const StyledCountryWrapper = styled.div`
  width: 25%;

  ${media.fullhd} {
    width: 33%;
  }
  ${media.notebook} {
    width: 50%;
  }
`
export const StyledCountryTitle = styled.div`
  transition: ${trans.base} color;
  cursor: pointer;
  &:hover {
    color: ${color.accentHover};
  }
`
export const StyledRegionsWrapper = styled.div``
export const StyledRegionTitle = styled.div`
  transition: ${trans.base} color;
  cursor: pointer;
  &:hover {
    color: ${color.accentHover};
  }
`
export const StyledRegionTitleA = styled.a`
  display: block;
  transition: ${trans.base} color;
  cursor: pointer;
  &:hover {
    color: ${color.accentHover};
  }
`
export const StyledRegionFavorite = styled.div``
export const StyledRegionList = styled.span`
  color: ${color.border};
  margin-right: 4px;
`

export const StyledCountriesWrapper = styled.div`
  display: flex;
  width: 80%;
`

export const Star = wrapComponent(StarIcon)
export const StyledStar = styled(Star)`
  margin-left: 10px;
  display: inline-block;
  position: relative;
  top: 3px;
  cursor: pointer;
  path {
    transition: ${trans.base} fill;
  }
  &:hover {
    path {
      fill: ${color.accent};
    }
  }
`

export const LocationTitle = styled.div`
  cursor: pointer;
  display: inline;
  transition: ${trans.base} color;
  &:hover {
    color: ${color.accentHover};
  }
`
export const LocationTitleA = styled.a`
  cursor: pointer;
  display: inline;
  transition: ${trans.base} color;
  &:hover {
    color: ${color.accentHover};
  }
`
