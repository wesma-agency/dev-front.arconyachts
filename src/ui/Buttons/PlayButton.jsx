import React from 'react'
import styled from 'styled-components'
import { media, color } from 'utils/vars'

const StyledWrapper = styled.div`
  cursor: pointer;
  width: 102px;
  height: 102px;
  border-radius: 50%;
  background: ${color.white};
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet} {
    width: 80px;
    height: 80px;
  }
  ${media.phablet} {
    width: 60px;
    height: 60px;
  }
  ${media.mobileLarge} {
    width: 50px;
    height: 50px;
  }
`

const StyledTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent ${color.black};
  position: relative;
  left: 4px;
`

const PlayButton = ({ ...props }) => {
  return (
    <StyledWrapper {...props}>
      <StyledTriangle />
    </StyledWrapper>
  )
}

export default PlayButton
