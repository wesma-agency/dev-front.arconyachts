import styled, { css } from 'styled-components'
import { fullWidth, typography } from 'utils/mixins'
import { color, media } from 'utils/vars'

export const StyledTitle = styled.h2`
  ${typography.h2}
  text-transform: uppercase;
  line-height: 150%;
  max-width: 80%;

  ${media.notebook} {
    margin-bottom: 30px;
    max-width: 100%;
  }
  ${media.phablet} {
    font-weight: normal;
    line-height: 34px;
    margin-bottom: 24px;
  }
`

export const StyledAboutText = styled.div`
  font-size: 16px;
  line-height: 160%;
  width: 87%;
  margin-right: 7vw;
  margin-top: 46px;

  ${typography.p};
  ${({ isService }) =>
    isService &&
    css`
      max-width: 480px;
    `}

  ${({ isBuilding }) =>
    isBuilding &&
    css`
      max-width: none;
    `}

  ${media.fullhd} {
    margin-top: 45px;
    margin-right: 6vw;
  }
  ${media.notebook} {
    margin-top: 30px;
  }
  ${media.tablet} {
    margin-right: 0;
    margin-top: 0;
    width: 100%;

    ${({ offsetTop }) =>
      offsetTop &&
      css`
        margin-top: 20px;
      `}
  }
`

export const StyledSliderWrapper = styled.div`
  ${fullWidth}
  width: 71vw;
  margin-left: 22vw;

  ${media.fullhd} {
    width: 70vw;
  }

  ${media.tablet} {
    width: 100%;
    margin: 0;
    transform: none;
  }
`

export const SliderWrapper = styled.div`
  width: 100%;
  margin-top: 68px;

  .swiper-container {
    overflow: visible;
  }

  ${({ isService }) =>
    isService &&
    css`
      margin-top: 129px;
    `}

  ${media.fullhd} {
    margin-top: 72px;
  }
  ${media.notebook} {
    margin-top: 60px;
  }
  ${media.tablet} {
    margin-top: 64px;
  }
`

export const StyledArrows = styled.div`
  display: flex;
  margin-top: 70px;
  & > button {
    margin-right: 12px;
  }

  ${media.tablet} {
    display: none;
  }
`

export const StyledParagraph = styled.div`
  font-size: 16px;
  line-height: 160%;
  margin-top: 1.6em;

  ${media.tablet} {
    &:first-child {
      margin-top: 22px;
    }
    margin-top: 0;
    font-weight: normal;

    font-size: 16px;
    line-height: 26px;

    letter-spacing: -0.02em;
  }
`

export const StyledFeaturesMob = styled.div`
  margin-top: 37px;
  padding: 25px 0;
  background: ${color.accent};
  ${fullWidth}
`
