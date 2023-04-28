import React from 'react'
import styled, { css } from 'styled-components'
import { color, media } from 'utils/vars'

export const StyledBar = styled.div`
  height: 2px;
  width: ${({ barWidth }) => barWidth}px;
  background: ${color.black};
  border-radius: 2px;
  position: absolute;

  ${({ bar1 }) =>
    bar1 &&
    css`
      transform: rotate(-45deg);
    `};
  ${({ bar2 }) =>
    bar2 &&
    css`
      transform: rotate(45deg);
    `};

  ${media.tablet} {
    height: 1px;
  }
`

const StyledClose = styled.div`
  position: relative;
  cursor: pointer;
`

const XMark = ({ width = 12, ...props }) => (
  <StyledClose {...props}>
    <StyledBar bar1="bar1" barWidth={width} />
    <StyledBar bar2="bar2" barWidth={width} />
  </StyledClose>
)

export default XMark
