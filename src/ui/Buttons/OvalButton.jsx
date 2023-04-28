import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { color, media, trans } from 'utils/vars'

const StyledButton = styled.button`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;
  border: 0.5px solid ${color.textActive};
  white-space: nowrap;
  border-radius: 100px;
  color: ${color.black};
  background: none;
  transition: ${trans.base} background, ${trans.base} color,
    ${trans.base} border;

  &:hover {
    background: ${color.hover};
    border-color: ${color.hover};
  }

  ${media.tablet} {
    padding: 11px;
    font-size: 12px;
    line-height: 15px;
  }
`

const OvalButton = ({ children, isLink = false, ...props }, ref) => {
  return (
    <StyledButton
      {...props}
      as={isLink ? 'a' : 'button'}
      ref={ref}
      aria-label={children}
    >
      {children}
    </StyledButton>
  )
}

export default forwardRef(OvalButton)
