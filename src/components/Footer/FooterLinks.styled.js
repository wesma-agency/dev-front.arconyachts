import ArrowIcon from 'assets/icons/dropdown-arrow.svg'
import styled, { css } from 'styled-components'
import Link from 'ui/Link'
import { color, media, trans, breakpoints } from 'utils/vars'
import wrapComponent from 'utils/wrapComponent'

const desktopHeight = 800
const tabletHeight = 2030

export const StyledBlock = styled.div``

export const StyledLinks = styled.div`
  max-height: ${({ maxHeight }) => maxHeight}px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 60px;
  min-height: 760px;
  align-content: space-between;

  ${media.fullhd} {
    /* max-height: ${tabletHeight}px; */
  }

  ${media.notebook} {
    display: none;
  }
`

export const StyledLinksWrapper = styled.div`
  max-height: 0;
  transition: max-height ${trans.base}, opacity ${trans.base},
    margin-bottom ${trans.base};
  overflow: hidden;
  opacity: 0;
  box-sizing: content-box;

  ${({ isActive, height }) =>
    isActive &&
    css`
      max-height: ${height}px;
      opacity: 1;
      margin-bottom: 32px;
    `}
`

export const StyledTitle = styled.div`
  font-weight: 700;
  margin-bottom: 10px;

  ${media.notebook} {
    font-size: 15px;
    margin-bottom: 20px;
  }
`

export const StyledLink = styled(Link)`
  margin-bottom: 11px;
  padding-right: 40px;
  max-width: 220px;
  font-size: 12px;
  color: ${color.footerLinks};
  text-transform: none;

  ${({ isLast }) =>
    isLast &&
    css`
      margin-bottom: 25px;
    `}

  &:hover {
    color: ${color.white};
  }

  & + ${StyledTitle} {
    margin-top: 25px;
  }

  ${media.fullhd} {
    max-width: 170px;
    padding-right: 20px;
  }
  
  ${media.notebook} {
    max-width: none;
    padding-right: 0;
    font-size: 14px;
    margin-bottom: 18px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const StyledCategory = styled.div`
  color: ${color.white};
  text-transform: uppercase;

  &:first-child {
    margin-top: -40px;
  }

  & + ${StyledTitle} {
    margin-top: 25px;
  }

  & + ${StyledLink} {
    margin-top: 20px;
  }

  &:not(:first-child) {
    /* margin-top: 46px; */
  }

  ${media.notebook} {
    display: flex;
    justify-content: space-between;

    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.05em;
    padding: 10px 0;
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 760px;
  height: ${({ maxHeight }) => maxHeight}px;

  ${media.fullhd} {
    height: auto;
  }
`

export const StyledText = styled.div`
  max-width: 280px;
  line-height: 20px;
  margin-top: -40px;
  margin-bottom: 25px;

  ${media.notebook} {
    max-width: 370px;
    width: 100%;
    margin-top: 30px;
  }
`

export const StyledCategoryTitle = styled.div`
  color: ${color.white};
`

export const StyledLinksMob = styled.div`
  display: none;

  ${media.notebook} {
    display: block;
    position: relative;
    top: -7px;
  }
`

export const StyledSubcategory = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  ${media.notebook} {
    margin-top: 30px;
    ${({ fullWidth }) =>
      fullWidth &&
      css`
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;

        ${StyledLink} {
          width: 33%;
        }
        ${StyledTitle} {
          width: 100%;
        }
      `}
  }
  ${media.tablet} {
    width: 48%;
    ${({ fullWidth }) =>
      fullWidth &&
      css`
        width: 100%;
        justify-content: space-between;

        ${StyledLink} {
          width: 48%;
        }
      `}
  }
  ${media.mobile} {
    width: 47%;
    ${({ fullWidth }) =>
      fullWidth &&
      css`
        width: 100%;

        ${StyledLink} {
          width: 100%;
        }
      `}
  }
`

export const StyledSubcategoriesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  ${media.tablet} {
    justify-content: space-between;
  }
`

const Arrow = wrapComponent(ArrowIcon)
export const StyledArrow = styled(Arrow)`
  margin-left: 12px;
  transition: ${trans.base} transform;
  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `}
`
