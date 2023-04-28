import ArrowIcon from 'assets/icons/filter-arrow.svg'
import styled, { css } from 'styled-components'
import { animations, boxShadow } from 'utils/mixins'
import { breakpoints, color, media, trans } from 'utils/vars'
import wrapComponent from 'utils/wrapComponent'

export const StyledWrapper = styled.div`
  display: none;

  ${media.tablet} {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    letter-spacing: 0.02em;
    margin-top: 21px;
  }

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const StyledDrop = styled.div`
  opacity: 0;
  animation: ${animations.fadeIn} ${trans.base} forwards;
  z-index: 2;
  position: absolute;
  background: ${color.white};
  ${boxShadow.filterDrop};
  max-width: ${breakpoints.mobile}px;
  width: 100%;
  top: calc(100% + 12px);
  padding: 28px 26px;
  border-radius: 16px;
`

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

export const StyledActiveItem = styled.div`
  display: flex;
  font-size: 14px;

  ${media.mobile} {
    font-size: 12px;
    position: relative;

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }
`

export const StyledCurrenciesDrop = styled(StyledDrop)`
  right: 0;

  ${media.mobile} {
    left: 0;
    width: 90vw;
  }
`
export const StyledSortDrop = styled(StyledDrop)`
  left: 0;

  ${media.mobile} {
    width: 90vw;
  }
`

export const StyledItem = styled.div`
  font-size: 13px;
  &:not(:first-child) {
    margin-top: 21px;
  }
`
