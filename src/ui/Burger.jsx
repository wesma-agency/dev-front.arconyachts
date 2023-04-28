import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { color, media } from 'utils/vars'

const StyledBurger = styled.div`
  width: 24px;
  height: 20px;
  position: relative;
  ${media.tablet} {
    ${({ isWhite }) =>
      isWhite &&
      css`
        ${StyledLine} {
          background-color: ${color.white};
        }
      `}
  }
  ${({ isActive }) =>
    isActive &&
    css`
      ${StyledLine} {
        background-color: ${color.white};
      }
      ${Bar1} {
        top: 10px;
        background-color: transparent;
      }
      ${Bar2} {
        left: 0px;
        width: 24px;
        transform: rotate(45deg);
      }
      ${Bar3} {
        left: 0px;
        width: 24px;
        transform: rotate(-45deg);
      }
      ${Bar4} {
        background-color: transparent;
      }
      ${Bar5} {
        bottom: 10px;
        background-color: transparent;
      }
    `}

  ${media.mobileLarge} {
    width: 18px;
    height: 14px;
  }
`

export const StyledLine = styled.div`
  padding: 0;
  width: 24px;
  height: 1px;
  background-color: ${color.black};
  transition: all 0.2s ease-in-out, transform 0.2s ease-in-out 0.2s;
  position: absolute;

  ${media.mobileLarge} {
    width: 18px;
  }
`

const Bar1 = styled(StyledLine)`
  top: 0;
`
const Bar2 = styled(StyledLine)`
  top: 10px;
  transform: rotate(90deg);
  width: 1px;
  left: 10px;

  ${media.mobileLarge} {
    top: 7px;
    left: 7px;
  }
`
const Bar3 = styled(StyledLine)`
  top: 10px;
  left: 10px;
  width: 1px;

  ${media.mobileLarge} {
    top: 7px;
    left: 7px;
  }
`
const Bar4 = styled(StyledLine)`
  top: 10px;

  ${media.mobileLarge} {
    top: 7px;
  }
`
const Bar5 = styled(StyledLine)`
  bottom: 0;
  ${media.mobileLarge} {
    bottom: -1px;
  }
`

const StyledWrapper = styled.div`
  padding: 10px;
  cursor: pointer;
`

const Burger = forwardRef(
  ({ isActive, onClick, defaultWhite = false, ...props }, ref) => (
    <StyledWrapper {...props} ref={ref} onClick={onClick}>
      <StyledBurger isActive={isActive} isWhite={defaultWhite && 'white'}>
        <Bar1 />
        <Bar2 />
        <Bar3 />
        <Bar4 />
        <Bar5 />
      </StyledBurger>
    </StyledWrapper>
  )
)

export default Burger
