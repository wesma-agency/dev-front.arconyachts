import styled, { css } from 'styled-components'
import { color, media, trans } from 'utils/vars'
import Image from 'ui/Image'
import { aspectRatio } from 'utils/mixins'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: ${trans.base} all;

  img {
    opacity: 1;
    transition: ${trans.base} opacity;
  }

  &:hover {
    color: ${color.accentHover};

    img {
      opacity: 0.7;
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
  width: 100%;
  ${aspectRatio(1, 1)}
  ${media.tablet} {
    margin-bottom: 24px;
  }

`

export const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  span,
  img {
    width: 100%;
    height: 100%;
  }

  ${media.mobileLarge} {

    span,
    img {
      object-fit: cover;
      object-position: center top;
    }
  }
`
export const Name = styled.b`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${color.personCardName};

  ${media.tablet} {
    margin-bottom: 8px;
    font-size: 16px;
  }
`

export const Position = styled.span`
  font-size: 16px;
  line-height: 22px;
  opacity: 0.4;

  ${media.tablet} {
    font-size: 14px;
  }
`

export const Appeal = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${trans.base} opacity;
  opacity: 0;

  ${({ isHovered }) =>
    isHovered &&
    css`
      opacity: 1;
    `}

  ${media.tablet} {
    display: flex;
    position: relative;
    opacity: 1;
    background: none;
    flex-direction: row;
    margin-top: 16px;

    svg {
      height: 24px;
      width: 24px;
    }
  }
`

export const AppealText = styled.span`
  margin-top: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  ${media.tablet} {
    margin-top: 0;
    margin-left: 18px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`
