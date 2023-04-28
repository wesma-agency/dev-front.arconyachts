import React from 'react'
import styled from 'styled-components'
import { color, trans } from 'utils/vars'

const StyledSocial = styled.a`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 1px solid ${color.borderSocials};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  transition: ${trans.base} background;
  path {
    transition: ${trans.base} fill;
  }

  &:hover {
    background: ${color.accent};
    path {
      fill: ${color.backgroundDark};
    }
  }
`

const Social = ({ children, ...props }) => {
  return <StyledSocial {...props}>{children}</StyledSocial>
}

export default Social
