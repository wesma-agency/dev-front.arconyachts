import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import ShipyardCard from 'ui/Cards/ShipyardCard'
import { fullWidth, typography } from 'utils/mixins'
import { color, media } from 'utils/vars'

export const StyledWrapper = styled.section``

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${media.phablet} {
    ${({ isBuilding }) =>
      isBuilding ? ` align-items: flex-start;` : `flex-direction: column;`};
  }
`
export const StyledHeader = styled.h3`
  ${typography.h3};

  ${({ isBuilding }) =>
    isBuilding &&
    css`
      ${typography.h2};
      font-weight: normal;
      line-height: 0.7em;
      letter-spacing: -0.02em;
      text-transform: uppercase;

      ${media.tablet} {
        line-height: 0.8em;
      }
    `}
`
export const StyledCaption = styled.div`
  font-size: 16px;
  color: ${color.more};
  height: 100%;
  margin-left: 32px;
  line-height: 0.88em;
  white-space: nowrap;

  ${media.phablet} {
    ${({ isBuilding }) =>
      isBuilding
        ? ` margin-left: 18px;`
        : ` margin-left: 0; margin-top: 20px;`};
  }
`

export const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 140px;
  margin-top: 63px;

  ${media.notebook} {
    margin-top: 40px;
    margin-bottom: 100px;
  }

  ${({ isMain }) =>
    isMain &&
    css`
      ${fullWidth};
      margin-top: 100px;
      margin-bottom: 0;
      .swiper-container {
        overflow: initial;
        width: 100%;
      }
      .swiper-pagination-detail {
        position: absolute;
        bottom: -60px;
        left: 50%;
        width: auto;
        transform: translateX(-50%);
      }

      ${media.notebook} {
        margin-bottom: 0;
      }
      ${media.tablet} {
        .swiper-pagination-detail {
            bottom: -40px;
        }
      }
    `};
  .swiper-container {
    width: 100%;
  }

  ${media.phablet} {
    margin-top: 10px;

    ${({ isBuilding }) => (isBuilding ? `padding: 0 7%` : ``)};

    .swiper-container {
      width: 100%;
    }

    & .swiper-pagination-detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      position: absolute;
      z-index: 2;
      top: calc(100% - 14px);
    }

    & .swiper-pagination-bullet {
      padding: 12px 0;
      box-sizing: content-box;
      width: 100%;
      opacity: 1;
      border-radius: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      & > div {
        height: 2px;
        width: 100%;
        background: ${rgba(color.black, 0.2)};
      }
    }
    & .swiper-pagination-bullet-active {
      & > div {
        background: ${color.black};
      }
    }

    & img,
    & span {
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
`

export const StyledCard = styled(ShipyardCard)`
  width: 25%;

  &:not(:last-child) {
    border-right: 1px solid ${color.borderDivider};
  }

  ${media.notebook} {
    width: 50%;
    ${({ isMain }) =>
      !isMain &&
      css`
        border-top: 1px solid ${color.borderDivider};
        &:nth-child(2n - 1) {
          border-right: 1px solid ${color.borderDivider};
        }
        &:nth-child(2n) {
          border-right: none;
        }
        &:nth-child(-n + 2) {
          border-top: none;
        }
      `}

    ${media.phablet} {
      width: 100%;

      ${({ isMain }) =>
        !isMain &&
        css`
          &:not(:last-child) {
            border-right: none;
          }
          &:nth-child(2n - 1) {
            border-right: none;
          }
          &:nth-child(2n) {
            border-right: none;
          }
          &:nth-child(-n + 2) {
            border-top: none;
          }
        `};
    }
  }

  ${({ isMain }) =>
    isMain &&
    css`
      max-width: 265px;
      width: 265px;
      margin-right: 0;
      padding-top: 15px;
      padding-bottom: 7px;

      ${media.notebook} {
        width: 265px;
      }
      ${media.tablet} {
        max-width: 200px;
        width: 200px;
        padding-top: 4px;
        padding-bottom: 4px;
      }
      ${media.phablet} {
        max-width: 160px;
        width: 160px;
      }
      ${media.mobileLarge} {
        max-width: 130px;
        width: 130px;
      }
    `}
`
export const SlideWrapper = styled.div`
  width: 100%;
`
