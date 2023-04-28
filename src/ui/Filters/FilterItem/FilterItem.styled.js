import ArrowIcon from 'assets/icons/filter-arrow.svg'
import styled, { css } from 'styled-components'
import XMark from 'ui/XMark'
import { animations, boxShadow } from 'utils/mixins'
import { color, media, trans } from 'utils/vars'

export const StyledFilter = styled.div`
  padding: 12px 20px;
  position: relative;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
  border: ${props => props.isDisabled ? 'none' : `0.5px solid ${color.textActive}`};
  cursor: ${props => props.isDisabled ? 'auto' : 'pointer'};
  background: ${props => props.isDisabled ? `${color.hover}` : `${color.white}`};
  transition: ${trans.base} background, ${trans.base} border;

  &:hover {
    background: ${color.hover};
    border-color: ${color.hover};
  }

  ${({ isOpened }) =>
    isOpened &&
    css`
      background: ${color.active};
      border-color: ${color.active};
      &:hover {
        background: ${color.active};
        border-color: ${color.active};
      }
    `};
  ${({ isActive }) =>
    isActive &&
    css`
      background: ${color.accent};
      border-color: ${color.accent};
      &:hover {
        background: ${color.accent};
        border-color: ${color.accent};
      }
    `};
  ${({ locationFilter }) =>
    locationFilter &&
    css`
      position: static;
    `};

  ${media.tablet} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: none !important;
    border: none !important;
    width: 100%;
    padding: 0 0 66px;
  }
`
export const StyledBlock = styled.div``
export const Arrow = ({ ...props }) => (
  <StyledBlock {...props}>
    <ArrowIcon />
  </StyledBlock>
)
export const StyledArrow = styled(Arrow)`
  margin-left: 12px;
  transition: ${trans.base} transform;
  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `};

  ${media.tablet} {
    display: none;
  }
`

export const StyledFilterDrop = styled.div`
  position: absolute;
  top: calc(100% + 16px);
  left: 0;
  background: ${color.white};
  ${boxShadow.filterDrop};
  border-radius: 16px;
  padding: 28px;
  cursor: default;
  opacity: 0;
  animation: ${animations.fadeIn} ${trans.base} forwards;
  z-index: 2;
  max-height: 450px;
  overflow: auto;
  min-width: 150px;

  ${({ locationFilter }) =>
    locationFilter &&
    css`
      width: 100%;
      /* box-shadow: none; */
      box-sizing: border-box;
      max-height: none;
      padding: 0;
    `}

  ${media.tablet} {
    max-height: none;
    overflow: initial;
    position: static;
    opacity: 1;
    box-shadow: none;
    padding: 0;
    ${({ rangeInput }) =>
      rangeInput &&
      css`
        padding: 0 8px;
      `}
    width: 100%;
  }
`

export const StyledClose = styled(XMark)`
  opacity: 0.4;
  width: 16px;
  margin-left: 12px;
  height: calc(100% + 24px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledTitle = styled.div`
  ${media.tablet} {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 30px;
  }
`
