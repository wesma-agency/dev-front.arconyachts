import Arrow from 'components/Slider/Arrow'
import styled, { css } from 'styled-components'
import { container } from 'utils/mixins'
import { color, media, trans } from 'utils/vars'

export const Wrapper = styled.div`
  width: 100%;
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

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  ${container}
  ${({ withoutPadding }) =>
    withoutPadding &&
    css`
      padding: 0 !important;
    `}
  margin-bottom: 58px;

  ${media.fullhd} {
    margin-bottom: 50px;
  }
  ${media.notebook} {
    margin-bottom: 42px;
  }
  ${media.tablet} {
    margin-bottom: 32px;
  }
`

export const StyledSliderWrapper = styled.div`
  padding-right: 0;
  margin-right: 0;
  max-width: 100%;
  margin-left: 7vw;
  ${media.fullhd} {
    margin-left: 6vw;
  }
  ${media.tablet} {
    margin-left: 5vw;
  }

  .swiper-container {
    overflow: visible;
  }
`

export const StyledSlide = styled.div`
  max-width: 380px;

  ${media.tablet} {
    max-width: 293px;
  }
  ${media.mobile} {
    max-width: 275px;
  }
`

export const StyledArrow = styled(Arrow)`
  background: transparent;
  transition: ${trans.base} background;
  &:hover {
    border-color: ${color.placeholder};
    background: ${color.accentHover};
  }
`

export const StyledCardWrapper = styled.div`
  max-width: 380px;
  cursor: pointer;
  ${media.tablet} {
    max-width: 293px;
  }

  ${media.mobile} {
    max-width: 275px;
  }
  &:last-child {
    margin-right: 7vw;
    ${media.fullhd} {
      margin-right: 6vw;
    }
    ${media.tablet} {
      margin-right: 5vw;
    }
  }
`
