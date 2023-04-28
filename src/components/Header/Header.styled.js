import styled, { css } from 'styled-components'
import Burger, { StyledLine } from 'ui/Burger'
import Favorites from 'ui/Favorites'
import Socials from 'ui/Socials/Socials'
import { color, media, trans } from 'utils/vars'

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 50px;
  position: fixed;
  background-color: ${color.white};
  z-index: 4;
  border-bottom: 2px solid ${color.border};
  ${media.ultraWide} {
    padding: 0 40px;
  }
  ${media.fullhd} {
    padding: 0 20px;
  }
  ${media.notebook} {
    justify-content: flex-end;
    border-bottom: none;
    height: 60px;
  }

  ${media.tablet} {
    transition: ${trans.base} background-color;
  }

  ${media.phablet} {
    border-bottom: none;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      &:before {
        content: '';
        width: 380px;
        height: 2px;
        background: ${color.borderActive};
        position: absolute;
        left: 0;
        bottom: -2px;
        ${media.notebook} {
          content: none;
        }
      }
    `}
`

export const StyledMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: ${trans.medium} transform;
  ${media.notebook} {
    background-color: ${color.backgroundDark};
    z-index: 3;
    top: -1px;
    left: 0;
    display: block;
    position: fixed;
    height: calc(100% + 2px);
    transform: translate(-100%);
    padding: 120px 20px 20px;
    justify-content: space-between;
    width: 100%;
    overflow: auto;
    ${({ isActive }) =>
      isActive &&
      css`
        transform: translate(0);
      `};
  }

  ${media.phablet} {
    width: 100%;
    justify-content: flex-start;
    padding: 120px 20px 20px;
  }
`

export const StyledPlaceholder = styled.div`
  display: none;
  ${media.notebook} {
    z-index: 4;
    display: block;
    height: 60px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${color.backgroundDark};
    transition: ${trans.medium} transform;
    transform: translate(-100%);

    ${({ isActive }) =>
      isActive &&
      css`
        transform: translate(0);
      `};
  }
`

export const StyledMenuWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const StyledPhone = styled.a`
  min-width: max-content;
  font-size: 12px;
  height: 100%;
  margin-left: 24px;
  margin-right: 40px;
  letter-spacing: 0.05em;
  font-weight: 600;
  transition: ${trans.base} color;
  &:hover {
    color: ${color.accentHover};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &:hover {
        color: ${color.white};
      }
      color: ${color.white};
    `}

  ${media.ultraWide} {
    margin-right: 20px;
    letter-spacing: 0.03em;
  }
  ${media.fullhd} {
    margin-left: 8px;
    margin-right: 16px;
  }

  ${media.notebook} {
    position: fixed;
    top: 30px;
    transform: translateY(-50%);
    font-size: 14px;
    right: 45px;
    z-index: 4;
    height: auto;
    transition: ${trans.medium} color;
  }

  ${media.phablet} {
    display: none;
  }
`

export const StyledFavorites = styled(Favorites)`
  height: 100%;
  display: flex;
  align-items: center;

  ${media.notebook} {
    display: none;
  }
`

export const StyledFavoritesMob = styled(Favorites)`
  display: none;
  ${media.notebook} {
    transform: scale(0.8);
    display: block;
    z-index: 5;
    position: fixed;
    right: 18px;
    top: 19px;
    ${({ isActive }) =>
      isActive &&
      css`
        svg {
          fill: ${color.backgroundDark};
          path {
            stroke: ${color.white};
          }
        }
      `}
  }
`

export const StyledBurger = styled(Burger)`
  display: none;

  ${media.notebook} {
    display: block;
  }

  z-index: 4;
  position: fixed;
  transform: translateY(-50%);
  top: 32px;
  left: 10px;
`

export const StyledSocials = styled(Socials)`
  display: none;
  ${media.notebook} {
    display: flex;
    margin-left: 20px;
  }

  ${media.phablet} {
    margin-left: 0;
  }
`
