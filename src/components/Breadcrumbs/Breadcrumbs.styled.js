import styled, { css } from 'styled-components'
import Link from 'ui/Link'
import { color, media, trans } from 'utils/vars'

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 90px;
  transition: ${trans.base} color;
  color: ${color.borderActive};
  font-size: 14px;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({ smallIndent }) =>
    smallIndent &&
    css`
      margin-bottom: 60px;
    `}

  ${media.notebook} {
    flex-wrap: wrap;
  }

  ${media.tablet} {
    display: none;
  }
`

export const StyledDivider = styled.div`
  margin: 0 4px;
`

export const StyledLink = styled(Link)`
  color: ${color.borderActive};
  font-size: 14px;
  text-transform: none;
  display: block;
  padding: 10px 0;
  transition: ${trans.base} color;

  white-space: nowrap;
  &:hover {
    color: ${color.accentHover};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &:hover {
        cursor: default;
        color: ${color.borderActive};
      }
    `}
`

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  & > * {
    margin-left: 8px;
    margin-top: 4px;
    margin-bottom: 4px;

    &:first-child {
      margin-left: 0;
    }
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`
