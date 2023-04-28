import styled, { css } from 'styled-components'
// import Image from 'ui/Image'
import Image from 'next/image'
import { color, media, trans } from 'utils/vars'

export const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${trans.base} opacity;
  z-index: 1;
  overflow: hidden;
  max-height: 100%;
  max-width: 100%;
`

export const StyledImage = styled(Image)`
  filter: grayscale(100%);
  position: relative;
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  & span,
  & img {
    height: auto !important;
    width: auto !important;
    height: auto !important;
    width: auto !important;
  }

  ${({ isMain }) =>
    isMain &&
    css`
      ${media.tablet} {
        width: 80%;
      }
    `}
`
export const StyledDetailInfo = styled.div`
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  background: ${color.accentHoverTransparent};
  transition: ${trans.base} opacity;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  flex-direction: column;
`

export const StyledContainer = styled.a`
  position: relative;
  display: block;
  cursor: pointer;

  &:hover,
  &:active {
    ${StyledDetailInfo} {
      opacity: 1;

      ${media.tablet} {
        opacity: 0;
      }
    }
  }

  ${({ withoutPadding }) =>
    !withoutPadding &&
    css`
      &:before {
        content: '';
        width: 100%;
        display: block;
        padding-bottom: 61%;
      }
    `}
`

export const StyledCountry = styled(Image)``
export const StyledTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.05em;
  margin: 16px 0;
  text-align: center;
`

export const StyledCount = styled.div`
  color: ${color.more};
  font-size: 16px;
  line-height: 22px;
`
