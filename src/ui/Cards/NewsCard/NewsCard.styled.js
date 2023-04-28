import styled, { css } from 'styled-components'
import { color, media, trans } from 'utils/vars'
import { aspectRatio } from 'utils/mixins'
import Image from 'ui/Image'

export const ImagesWrapper = styled.div`
  ${({ cardWidth, cardHeight }) => aspectRatio(cardWidth, cardHeight)};
  width: 100%;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  ${media.mobileLarge} {
    ${aspectRatio(293, 210)};
  }
`

export const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  span,
  img {
    width: 100%;
    height: 100%;
  }
`

export const Date = styled.div`
  margin-top: 30px;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  line-height: 22px;
  color: ${color.more};

  ${media.tablet} {
    margin-top: 20px;
    font-size: 14px;
    line-height: 22px;

    ${({ withIndent }) =>
      withIndent &&
      css`
        margin-top: 24px;
      `}
  }
`

export const Title = styled.div`
  margin-top: 12px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: ${color.black};
  transition: ${trans.base} color;
  width: 100%;

  &:hover {
    color: ${color.accentHover};
  }

  ${media.fullhd} {
    font-size: 22px;
  }

  ${media.notebook} {
    font-size: 20px;
  }

  ${media.tablet} {
    margin-top: 4px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.05em;
  }
`

export const Text = styled.div`
  margin-top: 20px;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${color.featureText};
  width: 100%;
  ${media.tablet} {
    display: none;
  }
`

export const Wrapper = styled.div`
  max-width: 490px;
  width: 100%;
  cursor: pointer;
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  &:hover {
    ${Title} {
      color: ${color.accentHover};
    }
  }

  ${media.mobileLarge} {
    max-width: 293px;
  }
`
