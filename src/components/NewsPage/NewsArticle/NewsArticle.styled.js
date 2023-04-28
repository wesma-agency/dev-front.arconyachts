import styled from 'styled-components'
import { fullWidth, typography } from 'utils/mixins'
import { color, media } from 'utils/vars'
import Image from 'ui/Image'

export const Article = styled.article`
  ${media.tablet} {
    margin-top: 54px;
  }
`

export const Header = styled.h1`
  ${typography.h1};
  font-weight: 500;
  line-height: 110%;
  margin-bottom: 80px;

  ${media.tablet} {
    font-weight: 400;
    line-height: 44px;
    margin-bottom: 30px;
  }
`
export const Date = styled.p`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${color.black};
  opacity: 0.4;
`

export const ImageWrapper = styled.div`
  ${fullWidth};
  display: block;
  white-space: nowrap;
  margin-bottom: 100px;

  ${media.tablet} {
    height: 440px;
    margin-bottom: 40px;
  }
`

export const Img = styled(Image)`
  span,
  img {
    width: 100% !important;
    height: 100% !important;
  }
`

export const TextWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  ${typography.p}

  p {
    color: ${color.black};

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

  ${media.tablet} {
    width: 100%;
  }
`

export const Text = styled.div`
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: ${color.black};

  &:not(:first-child) {
    margin-top: 30px;
  }

  ${media.tablet} {
    font-size: 14px;
    line-height: 22px;
  }
`
