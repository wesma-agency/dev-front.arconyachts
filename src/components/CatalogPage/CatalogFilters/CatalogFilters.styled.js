import styled, { css } from 'styled-components'
import Checkbox from 'ui/Filters/Checkbox'
import FilterItem from 'ui/Filters/FilterItem'
import { spoiler } from 'utils/mixins'
import { color, media, trans } from 'utils/vars'
import Radio from 'ui/Filters/Radio'

export const StyledCheckbox = styled(Checkbox)`
  &:not(:first-child) {
    margin-top: 18px;
  }

  ${media.tablet} {
    &:not(:first-child) {
      margin-top: 21px;
    }

    & > div {
      line-height: 18px;
      font-size: 16px;
    }
  }
`

export const StyledRadio = styled(Radio)`
  &:not(:first-child) {
    margin-top: 18px;
  }

  ${media.tablet} {
    &:not(:first-child) {
      margin-top: 21px;
    }

    & > div {
      line-height: 18px;
      font-size: 16px;
    }
  }
`

export const StyledFilterItem = styled(FilterItem)`
  margin-right: 8px;
  margin-bottom: 12px;

  ${media.tablet} {
    margin-right: 0;
    margin-bottom: 0;

    ${({ locationFilter }) =>
      locationFilter &&
      css`
        z-index: 3;
      `}
  }
`
export const StyledMore = styled.div`
  cursor: pointer;
  transition: ${trans.base} margin, ${trans.base} color;
  color: ${color.black};
  white-space: nowrap;
  ${media.tablet} {
    font-size: 16px;
    line-height: 18px;
    margin-top: 10px;
  }
  &:hover {
    color: ${color.accentHover};
  }
  ${({ height }) =>
    height &&
    css`
      margin-top: 18px;

      ${media.tablet} {
        margin-top: 28px;
      }
    `};
`

export const StyledSpoilerWrapper = styled.div`
  width: 100%;
  margin-top: 18px;
  overflow: hidden;
  ${spoiler};
`

export const StyledSpoiler = styled.div``

export const StyledLocationFilter = styled.div``
