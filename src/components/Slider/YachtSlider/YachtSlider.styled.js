import styled, { css } from 'styled-components'
import Button from 'ui/Buttons/Button'
import YachtCard from 'ui/Cards/YachtCard'
import { fullWidth } from 'utils/mixins'
import { media } from 'utils/vars'
import { typography } from 'utils/mixins'
import NewsCard from 'ui/Cards/NewsCard'

export const StyledCard = styled(YachtCard)`
  max-width: 490px;

  ${media.fullhd} {
    max-width: 450px;
  }
  ${media.notebook} {
    max-width: 420px;
  }

  ${media.tablet} {
    max-width: 340px;
  }
  ${media.phablet} {
    max-width: 290px;
  }
  ${media.phablet} {
    max-width: 275px;

    ${({ isNews }) =>
      isNews &&
      css`
        max-width: 293px;
      `}
  }

  ${media.mobile} {
    ${({ isNews }) =>
      isNews &&
      css`
        max-width: 275px;
      `}
  }
`

export const StyledNewsCard = styled(NewsCard)`
  max-width: 490px;

  ${media.fullhd} {
    max-width: 450px;
  }

  ${media.notebook} {
    max-width: 420px;
  }

  ${media.tablet} {
    ${({ isMain }) =>
      isMain ? 'max-width: 100%; margin-bottom: 45px;' : 'max-width: 340px;'}
  }

  ${media.phablet} {
    max-width: ${({ isMain }) => (isMain ? '100%' : '290px')};
  }

  ${media.mobile} {
    max-width: ${({ isMain }) => (isMain ? '100%' : '290px')};
  }
`

export const StyledTitle = styled.h2`
  ${({ isMain }) =>
    isMain
      ? css`
          ${typography.h1}
          font-size: 80px;
          line-height: 130%;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 50px;

          ${media.tablet} {
            margin-bottom: 10px;

            font-weight: normal;
            font-size: 26px;
            line-height: 34px;
          }
        `
      : css`
          font-weight: 500;
          font-size: 40px;
          line-height: 150%;
          letter-spacing: -0.02em;
        `};

  ${media.fullhd} {
    font-size: 34px;
  }
  ${media.notebook} {
    font-size: 30px;
  }
  ${media.tablet} {
    font-size: 26px;
    letter-spacing: normal;
  }
`
export const StyledArrows = styled.div`
  display: flex;
  margin-right: 12px;

  ${({ isNews }) =>
    isNews &&
    css`
      margin-right: 0;
    `}

  & > button {
    margin-left: 8px;
  }

  ${media.tablet} {
    ${({ isMain }) => (isMain ? 'display: none' : '')}
  }

  ${media.phablet} {
    display: none;
  }
`
export const StyledHeader = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .swiper-container {
    box-sizing: content-box;
  }

  ${({ isNews }) =>
    isNews &&
    css`
      margin-bottom: 60px;
    `}

  ${media.notebook} {
    margin-bottom: 30px;
  }
`

export const StyledButton = styled(Button)`
  margin: 80px 0 0;
  width: 266px;
  display: flex;
  justify-content: center;

  ${({ isNews }) =>
    isNews &&
    css`
      width: fit-content;
    `}

  ${({ isMain }) => (isMain ? `margin-top: 120px` : ``)};

  ${media.notebook} {
    margin-top: 60px;
    padding: 17px 52px;
  }

  ${media.tablet} {
    ${({ isMain }) => (isMain ? `margin-top: 63px; width: 100%;` : ``)};
  }

  ${media.mobileLarge} {
    margin: 40px 0 0;
    ${({ isMain }) => (isMain ? `margin-top: 63px` : ``)};
    width: 100%;
  }
`

export const StyledSliderWrapper = styled.div`
  padding-right: 0;
  margin-right: 0;
  ${fullWidth};
  max-width: 100%;
  margin-left: 7vw;
  ${media.fullhd} {
    margin-left: 6vw;
  }
  ${media.tablet} {
    margin-left: 5vw;
  }

  .swiper-container {
    overflow: visible;
  }
`

export const Wrapper = styled.section`
  margin-bottom: 154px;
  ${media.fullhd} {
    margin-bottom: 140px;
  }
  ${media.notebook} {
    margin-bottom: 130px;
  }
  ${media.tablet} {
    margin-bottom: 50px;
  }
`
