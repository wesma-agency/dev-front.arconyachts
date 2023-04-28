import styled, { css } from 'styled-components'
import { color, media, trans } from 'utils/vars'
import { spoiler, fonts } from 'utils/mixins'

export const StyledWrapper = styled.section`
  padding: 111px 0 131px;
  font-size: 16px;
  width: 100%;

  ${media.notebook} {
    padding: 60px 0 60px;
  }
`
export const StyledTitle = styled.h2`
  ${fonts.SangBleuSunrise}
  font-size: 24px;
  line-height: 150%;
  text-transform: uppercase;
  margin-bottom: 48px;
  width: 100%;
  ${media.notebook} {
    margin-bottom: 32px;
  }

  ${media.mobileLarge} {
    max-width: 300px;
    white-space: pre-wrap;
  }
`
export const StyledTextWrapper = styled.div`
  overflow: hidden;
  font-weight: 300;
  line-height: 160%;
  color: ${color.info};
  width: 100%;
  letter-spacing: -0.02em;

  p {
    width: 100%;
    &:not(:first-child) {
      margin-top: 48px;
    }

    ${media.tablet} {
      font-size: 14px;
      line-height: 22px;
    }
  }
`
export const StyledText = styled.div`
  width: 100%;
  margin-top: 0;
  ${({ height }) =>
    height &&
    css`
      margin-top: 48px;
    `}
  ${spoiler};
  transition: ${trans.base} height, ${trans.base} margin-top,
    ${trans.base} opacity;
`

export const StyledSpoiler = styled.div``

export const StyledParagraph = styled.div`
  width: 100%;
  &:not(:first-child) {
    margin-top: 48px;
  }

  ${media.tablet} {
    font-size: 14px;
    line-height: 22px;
  }
`
export const StyledMore = styled.div`
  margin-top: 18px;
  color: ${color.more};
  cursor: pointer;
  display: inline-block;
  padding: 10px 10px 10px 0;
  letter-spacing: 0.02em;
  transition: ${trans.base} color;

  &:hover {
    color: ${color.accentHover};
  }
`
