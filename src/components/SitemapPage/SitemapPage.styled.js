import styled, { css } from 'styled-components'
import Link from 'ui/Link'
import { typography } from 'utils/mixins'
import { media, color, trans } from 'utils/vars'

export const StyledTitle = styled.h1`
  ${typography.h1};
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 22px;

  ${media.tablet} {
    margin-top: 60px;
  }
`
export const StyledBlock = styled.div`
  border-bottom: ${({ isLastBlock }) =>
    !isLastBlock ? `1px solid ${color.mapBorder}` : 'none'};

  display: flex;
  padding-bottom: 40px;
  padding-top: 40px;
  width: 93.7%;

  ${media.fullhd} {
    flex-direction: column;
    width: 100%;
  }
`

export const StyledBlockContent = styled.div`
  ${({ itemsLength, sectionsCount }) =>
    itemsLength &&
    sectionsCount &&
    css`
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      max-height: ${34 * (itemsLength / 4) * 1.3}px;

      ${media.fullhd} {
        max-height: ${34 * (itemsLength / 2) * 1.3}px;
      }
    `}
  display: flex;
  flex-wrap: wrap;
  width: 79.6%;

  ${media.fullhd} {
    width: 100%;
  }

  ${media.phablet} {
    max-height: 100%;
  }
`

export const StyledBlockTitle = styled.a`
  width: 20.4%;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 34px;
  transition: ${trans.base} color;
  cursor: pointer;
  height: fit-content;
  &:hover {
    color: ${color.accentHover};
  }

  ${media.phablet} {
    width: 100%;
  }
`

export const StyledLink = styled(Link)`
  font-weight: normal;
  font-size: 13px;
  line-height: 34px;
  text-transform: none;
  transition: ${trans.base} color;

  &:hover {
    color: ${color.accentHover};
  }
`

export const StyledLinkWrapper = styled.div`
  ${({ isLast }) => isLast && `margin-bottom: 34px;`}
  ${({ isException }) => isException && `margin-bottom: 0;`}
  width: 25%;

  ${media.fullhd} {
    width: 49%;
    ${({ isException }) => isException && `margin-bottom: 34px;`}
  }

  ${media.phablet} {
    width: 100%;
  }
`

export const ContentWrapper = styled.div`
  display: inline;
`

export const StyledPageContent = styled.div`
  margin-bottom: 99px;
`
