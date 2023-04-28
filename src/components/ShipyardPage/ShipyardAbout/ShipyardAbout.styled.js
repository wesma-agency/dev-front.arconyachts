import VideoBlock from 'components/VideoBlock'
import styled, { css } from 'styled-components'
import { fullWidth, spoiler, typography, fonts } from 'utils/mixins'
import { color, media, trans } from 'utils/vars'

export const StyledHeader = styled.h2`
  ${fonts.SangBleuSunrise}
  margin-top: 116px;
  margin-bottom: 50px;

  ${media.tablet} {
    margin-top: 70px;
    margin-bottom: 20px;
  }
  ${typography.h2};
  text-transform: uppercase;
`

export const StyledContentWrapper = styled.div`
  ${fullWidth};
  width: calc(100vw - 22vw - 14.5vw);
  margin-left: 22vw;
  ${typography.p};

  p {
    margin-bottom: 1.6em;
    &:last-child {
      margin-bottom: 0;
    }
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

  ${media.tablet} {
    margin-left: 0;
    margin-right: 0;

    width: 100%;
    transform: none;
  }
`

export const StyledParagraph = styled.div`
  ${typography.p};
  margin-bottom: 1.6em;
  &:last-child {
    margin-bottom: 0;
  }
`
export const StyledVideo = styled(VideoBlock)`
  margin-bottom: 60px;
  margin-top: 37px;

  ${media.tablet} {
    margin-left: -5vw;
    width: 100vw;
    margin-bottom: 31px;
  } ;
`

export const StyledMore = styled.div`
  ${typography.p};
  letter-spacing: 0.02em;

  ${media.tablet} {
    letter-spacing: normal;
  }
  cursor: pointer;
  transition: ${trans.base} margin, ${trans.base} color, ${trans.base} transform;

  color: ${color.more};
  display: inline-block;
  padding: 10px 10px 10px 0;
  margin-top: 10px;
  &:hover {
    color: ${color.accentHover};
  }

  ${media.tablet} {
    position: relative;
    transform: translate(0, -1.6em);

    ${({ isOpened }) =>
      isOpened &&
      css`
        transform: translate(0, 0);
      `}
  }
`

export const StyledSpoilerWrapper = styled.div`
  ${spoiler};
`
export const StyledSpoiler = styled.div``
