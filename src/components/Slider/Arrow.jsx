import ArrowIcon from 'assets/icons/arrow.svg'
import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { color, trans } from 'utils/vars'

export const StyledWrapper = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${color.placeholder};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color.white};
  transition: ${trans.base} border, ${trans.base} background;
  position: relative;

  ${({ directionArrow }) =>
    directionArrow === 'back' &&
    css`
      transform: rotate(180deg);
    `}
  ${({ big }) =>
    big &&
    css`
      width: 63px;
      height: 63px;

      svg {
        transform: scale(1.5);
      }
    `}

  path {
    transition: ${trans.base} fill;
    fill: black;
  }

  &:hover {
    border-color: ${color.accent};
    background: ${color.accent};
    path {
      fill: ${color.placeholder};
    }
  }
`
const Arrow = ({ direction, isLink = false, ...props }, ref) => (
  <StyledWrapper
    {...props}
    directionArrow={direction}
    as={isLink ? 'a' : 'button'}
    aria-label={direction === 'back' ? 'Назад' : 'Вперед'}
    ref={ref}
  >
    <ArrowIcon />
  </StyledWrapper>
)

export default forwardRef(Arrow)
