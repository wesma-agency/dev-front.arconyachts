import styled, { css } from 'styled-components'
import { spoiler, typography, fullWidth, container, fonts } from 'utils/mixins'
import { color, media } from 'utils/vars'

export const StyledTitle = styled.h2`
  ${fonts.SangBleuSunrise}
  text-transform: uppercase;
  font-size: 80px;

  ${media.fullhd} {
    font-size: 65px;
  }
  ${media.notebook} {
    font-size: 52px;
  }
  ${media.tablet} {
    font-size: 36px;
  }
  ${media.phablet} {
    font-size: 26px;
  }
`

export const StyledAboutText = styled.div`
  font-size: 16px;
  line-height: 160%;
  max-width: 700px;
  margin-right: 7vw;
  margin-top: 55px;
  ${typography.p}

  p {
    &:not(:first-child) {
      margin-top: 30px;
    }

    ${media.tablet} {
      font-size: 14px;
      line-height: 22px;
    }
  }

  img {
    width: 100%;
  }

  h2 {
    ${typography.h2};
    line-height: 0.85em;
    margin-bottom: 30px;

    &:not(:first-child) {
      margin-top: 26px;
    }
  }

  h3 {
    ${typography.h3};
    margin-bottom: 20px;

    &:not(:first-child) {
      margin-top: 20px;
    }
  }

  i,
  em {
    ${typography.p};
    font-style: italic;
  }

  strong,
  b {
    ${typography.p};
    font-weight: 700;
  }

  ul,
  ol {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }

  li {
    padding-left: 30px;
    margin-top: 8px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0.25em;
      left: 0;
      width: 10px;
      height: 17px;
      background-image: url('/img/icons/arrow-right-gray.svg');
    }
  }

  ${({ isService }) =>
    isService &&
    css`
      max-width: 480px;
    `}

  ${({ isBuilding }) =>
    isBuilding &&
    css`
      max-width: none;
      width: 83%;
      font-weight: normal;
      font-size: 16px;
      line-height: 160%;
    `}

  ${media.fullhd} {
    margin-top: 45px;
    margin-right: 6vw;

    &:not(:first-of-type) {
      margin-top: 20px;
    }
  }
  ${media.notebook} {
    margin-top: 30px;
  }
  ${media.tablet} {
    margin-right: 0;
    margin-top: 0;

    ${({ offsetTop }) =>
      offsetTop &&
      css`
        margin-top: 20px;
      `}

    ${({ isBuilding }) =>
      isBuilding &&
      css`
        width: 100%;
      `}
  }
`

export const StyledSliderWrapper = styled.div`
  ${fullWidth};
  width: 71vw;
  margin-left: 22vw;

  ${media.fullhd} {
    width: 70vw;
  }

  ${media.tablet} {
    width: 100%;
    margin: 0;
    ${container};

    ${({ isBuilding }) => (isBuilding ? `padding-right: 0 !important;` : ``)}
  }
`

export const SliderWrapper = styled.div`
  width: 100%;
  margin-top: 86px;

  ${({ isBuilding }) => (isBuilding ? `margin-top: 119px` : ``)};

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
    margin-top: 50px;
  }
  ${media.phablet} {
    margin-top: 40px;
  }
`

export const StyledArrows = styled.div`
  display: flex;
  margin-top: 40px;
  & > button {
    margin-right: 12px;
  }

  ${media.tablet} {
    display: none;
  }
`

export const StyledParagraph = styled.div`
  font-size: 14px;
  line-height: 22px;
  margin-top: 20px;
  ${media.tablet} {
    &:first-child {
      margin-top: 22px;
    }
    margin-top: 14px;
  }
`
export const StyledText = styled.div`
  width: 100%;
  overflow: hidden;
  ${spoiler}
`

export const StyledSpoiler = styled.div``
export const StyledMore = styled.div`
  color: ${color.more};
  cursor: pointer;
  display: inline-block;
  padding: 10px 10px 10px 0;
  margin-top: 7px;
`

export const StyledFeaturesMob = styled.div`
  margin-top: 37px;
  padding: 25px 0;
  background: ${color.accent};
  ${fullWidth}
`

export const StyledCardWrapper = styled.div`
  padding-right: 60px;
`
