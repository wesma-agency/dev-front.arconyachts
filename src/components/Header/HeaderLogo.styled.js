import styled, { css } from 'styled-components'
import Link from 'ui/Link'
import Logo from 'ui/Logo'
import { color, media, trans } from 'utils/vars'

export const StyledLangs = styled.div`
  color: ${color.border};
  display: flex;
  font-size: 12px;
  margin-left: 6px;
  transform: translateY(-24px);

  ${media.notebook} {
    display: none;
  }
`
export const StyledLang = styled.a`
  color: inherit;
  cursor: pointer;
  transition: ${trans.base} color;

  &:hover {
    color: ${color.accentHover};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &:hover {
        color: ${color.black};
      }
      color: ${color.black};
    `};
`

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  justify-content: center;
  top: 7px;
  left: -3px;
  ${media.notebook} {
    display: none;
  }
`

export const StyledLogoMob = styled(Logo)`
  display: none !important;
  ${({ index }) =>
    index &&
    css`
      cursor: none;
      pointer-events: none;
    `}

  ${media.notebook} {
    cursor: pointer;
    display: flex !important;
    position: fixed;
    height: 60px;
    padding: 0 15px;
    box-sizing: content-box;
    top: 0;
    left: 40%;
    transform: translate(-50%);
    z-index: 5;

    & > svg {
      position: relative;
      top: 4px;
    }
  }
`

export const StyledLogo = styled(Link)`
  ${({ index }) =>
    index &&
    css`
      cursor: none;
      pointer-events: none;
    `}
  height: 100%;
  ${media.fullhd} {
    width: 100px;
  }
`

export const StyledLangsMob = styled.div`
  display: none;
  
  & > a:first-child {
    margin-right: 5px;
  }
  
  & > a:last-child {
    margin-left: 5px;
  }
  
  ${media.notebook} {
    cursor: pointer;
    display: flex !important;
    align-items: center;
    height: 60px;
    position: fixed;
    padding: 0 15px;
    box-sizing: content-box;
    top: 2px;
    right: 30%;
    z-index: 5;
  }
  
  ${media.phablet} {
     right: 15%;
  }
  

`