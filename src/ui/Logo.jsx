import LogoIcon from 'assets/icons/logo.svg'
import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { color, media, trans } from 'utils/vars'

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  path {
    transition: ${trans.medium} all;
    fill: ${color.black};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      path {
        fill: ${color.white} !important;
      }
    `};
`

const Logo = ({ className, onClick, isLink, ...props }, ref) => (
  <StyledLogo
    as={isLink ? 'a' : 'div'}
    className={className}
    onClick={onClick}
    ref={ref}
    {...props}
  >
    <LogoIcon />
  </StyledLogo>
)

export default forwardRef(Logo)
