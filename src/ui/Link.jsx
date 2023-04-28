import NextLink from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { color, trans } from 'utils/vars'

export const StyledLink = styled.a`
  cursor: pointer;
  color: ${color.black};
  font-size: 12px;
  text-transform: uppercase;
  transition: ${trans.base} color, ${trans.base} font-weight;
`

const Link = ({
  className,
  target,
  isActive,
  href,
  children,
  as,
  ...props
}) => {
  if (target) {
    return (
      <StyledLink className={className} target={target} href={href} {...props}>
        {children}
      </StyledLink>
    )
  } else {
    return (
      <NextLink href={href} {...props} prefetch={false}>
        <StyledLink className={className} isActive={isActive}>
          {children}
        </StyledLink>
      </NextLink>
    )
  }
}

export default Link
