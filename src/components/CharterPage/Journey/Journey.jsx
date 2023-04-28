import { StyledWrapper as Arrow } from 'components/Slider/Arrow.jsx'
import CharterRoutes from 'components/YachtCharter/CharterRoutes'
import React from 'react'
import styled from 'styled-components'
import { container, fullWidth } from 'utils/mixins'
import { color, media } from 'utils/vars'

const StyledWrapper = styled.section`
  margin-top: 108px;
  width: 100%;
  background: ${color.accent};
  ${fullWidth}
  ${container}
  padding-bottom: 139px;

  ${Arrow} {
    &:hover {
      border-color: ${color.accentHover};
      background: ${color.accentHover};
    }
  }

  ${media.tablet} {
    margin-top: 82px;
    padding-bottom: 79px;
  }
`

const StyledNews = styled(CharterRoutes)`
  margin-top: 124px;

  ${media.fullhd} {
    margin-top: 110px;
  }
  ${media.notebook} {
    margin-top: 75px;
  }
  ${media.tablet} {
    margin-top: 52px;
  }
`

const Journey = ({ news }) => {
  return (
    <StyledWrapper>
      <StyledNews news={news} />
    </StyledWrapper>
  )
}

export default Journey
