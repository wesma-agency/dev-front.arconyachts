import SortArrow from 'assets/icons/sort-arrow.svg'
import styled, { css } from 'styled-components'
import { color, trans, media } from 'utils/vars'
import wrapComponent from 'utils/wrapComponent'

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 46px;
  ${media.tablet} {
    display: none;
  }
`

export const StyledConcurrencies = styled.div`
  display: flex;
`
export const StyledSorts = styled.div`
  display: flex;
`
export const StyledItem = styled.div`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: ${color.more};
  transition: ${trans.base} color;
  cursor: pointer;
  display: flex;

  &:hover {
    color: ${color.accentHover};
    svg {
      opacity: 1;
    }
    path {
      stroke: ${color.accentHover};
    }
  }

  svg {
    opacity: 0.4;
    transition: ${trans.base} opacity;
  }
  path {
    transition: ${trans.base} stroke;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${color.black};
      svg {
        opacity: 1;
      }
      &:hover {
        color: ${color.black};
        svg {
          opacity: 1;
        }
        path {
          stroke: ${color.black};
        }
      }
    `}
`
export const StyledSort = styled(StyledItem)`
  margin-right: 34px;
`
export const StyledCurrency = styled(StyledItem)`
  margin-left: 16px;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: normal;

  &:hover {
    color: ${color.accentHover};
  }
`
export const Arrow = wrapComponent(SortArrow)
export const StyledArrow = styled(Arrow)`
  margin-left: 8px;
  transition: ${trans.base} transform;
  ${({ isAsc }) =>
    !isAsc &&
    css`
      transform: rotate(180deg);
    `};
`
