import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import Badge from 'ui/Badge'
import Favorites from 'ui/Favorites'
import Image from 'ui/Image'
import Link from 'ui/Link'
import { aspectRatio, animations } from 'utils/mixins'
import { color, media, trans } from 'utils/vars'

export const StyledTitle = styled(Link)`
  font-weight: 600;
  text-transform: none;
  font-size: 24px;
  color: ${color.black};
  transition: ${trans.base} color;
  letter-spacing: 0.05em;
  line-height: 34px;

  &:hover {
    color: ${color.accentHover};
  }

  ${({ withoutSpacing }) =>
    withoutSpacing &&
    css`
      letter-spacing: normal;
    `}

  ${media.fullhd} {
    font-size: 22px;
  }
  ${media.notebook} {
    font-size: 20px;
  }
  ${media.tablet} {
    font-size: 18px;
  }
`

export const StyledFavorites = styled(Favorites)`
  position: relative;
  top: 2px;
  left: 1px;
  opacity: 0;
  transition: ${trans.base} opacity;
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
    `}

  ${media.tablet} {
    opacity: 1;
  }

  ${media.mobile} {
    & > svg {
      width: 14px;
      height: 17px;
    }
  }
`

export const StyledWrapper = styled.div`
  max-width: 380px;
  width: 100%;
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;

  &:hover,
  &:active {
    & .product-swiper-pagination {
      opacity: 1;
      pointer-events: initial;
    }
  }
  &:hover {
    ${StyledFavorites} {
      opacity: 1;
    }
  }

  & .product-swiper-pagination {
    box-sizing: border-box;
    padding: 0 12px;
    position: absolute;
    transition: ${trans.base} opacity;
    opacity: 0;
    pointer-events: none;
    bottom: 0 !important;
    width: 100%;
    display: flex;
    height: 100%;
    z-index: 19;
    justify-content: space-between;

    ${({ withoutPadding }) =>
      withoutPadding &&
      css`
        padding: 0; ;
      `}

    ${media.notebook} {
      opacity: 1;
    }

    .swiper-pagination-bullet {
      width: 100%;
      display: block;
      opacity: 1;
      height: auto;
      background: none;
      display: flex;
      align-items: flex-end;
      & > div {
        background: ${rgba(color.accent, 0.3)};
        width: 100%;
        margin: 12px 0;
        height: 2px;
      }

      &-active.swiper-pagination-bullet > div {
        background: ${color.accentHover};
      }
    }
  }
`

export const StyledImagesWrapper = styled.div`
  overflow: hidden;
  ${({ cardWidth, cardHeight }) => aspectRatio(cardWidth, cardHeight)};

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`
export const StyledImages = styled.div`
  width: 100%;
  /* position: relative; */
  /* ${aspectRatio(373, 272)} */
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  ${media.tablet} {
    margin-top: 20px;
  }
`

export const StyledParams = styled.div`
  display: flex;
  margin-top: 14px;
  color: ${color.more};
  font-size: 16px;
  flex-wrap: wrap;
  line-height: 160%;

  ${media.notebook} {
    font-size: 15px;
  }
  ${media.tablet} {
    font-size: 14px;
    margin-top: 5px;
  }
  ${media.mobileLarge} {
    font-size: 13px;
    margin-top: 5px;
  }
`
export const StyledParamsDivider = styled.div`
  display: flex;
  margin: 0 11px 0 12px;
`

export const StyledPrice = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-top: 16px;

  ${media.notebook} {
    font-size: 17px;
  }
  ${media.tablet} {
    font-size: 16px;
  }
`

export const StyledBadge = styled(Badge)`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
`

export const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  span,
  img {
    width: 100% !important;
    height: 100% !important;
  }
`

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${color.more};
  pointer-events: none;
  z-index: 1;
  animation: ${animations.fadeIn} ${trans.base} forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.white};
`
