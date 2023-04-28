import React from 'react'
import styled from 'styled-components'
import { color } from 'utils/vars'

const StyledBadge = styled.div`
  padding: 8px 20px;
  font-size: 12px;
  border-radius: 100px;
  background: ${color.white};
`

const Badge = ({ children, ...props }) => {
  return <StyledBadge {...props}>{children}</StyledBadge>
}

export default Badge
