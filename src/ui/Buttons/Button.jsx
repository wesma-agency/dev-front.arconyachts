import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { color, trans } from 'utils/vars'

const StyledButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid ${color.black};
  padding: 24px 52px;
  color: ${color.black};
  background: none;
  transition: ${trans.base} background, ${trans.base} color,
    ${trans.base} border;
  letter-spacing: 0.02em;

  &:hover {
    background: ${color.accentHover};
    border-color: ${color.accentHover};
    color: ${color.black};
  }
`

const Button = ({ children, isLink, ...props }, ref) => {
  return (
    <StyledButton
      ref={ref}
      {...props}
      aria-label={children}
      as={isLink ? 'a' : 'button'}
    >
      {children}
    </StyledButton>
  )
}

export default forwardRef(Button)
