import styled, { css } from 'styled-components'
import Link from 'ui/Link'
import { color, media, size, trans } from 'utils/vars'

export const StyledLink = styled(Link)`
  position: relative;
  padding: 0 19px;
  height: 100%;
  letter-spacing: 0.05em;
  min-width: fit-content;

  &:before {
    content: '';
    ${media.notebook} {
      content: none;
    }
    width: 0;
    height: 2px;
    background: ${color.borderActive};
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: -2px;
    transition: ${trans.base} width, ${trans.base} opacity;
    opacity: 0.6;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${color.textActive};
      font-weight: 500;

      &:before {
        width: 100%;
        opacity: 1;
      }
    `}

  ${media.ultraWide} {
    padding: 0 10px;
    letter-spacing: 0.04em;
  }
  ${media.fullhd} {
    font-size: 10px;
  }
  ${media.notebook} {
    color: ${color.white};
    font-size: 16px;
    height: auto;
    padding: 20px;
  }

  ${media.phablet} {
    padding: 0 20px 20px 0;

    &:not(:first-child) {
      padding: 20px 20px 20px 0;
    }
  }
`

export const StyledLinks = styled.div`
  height: 100%;
  display: inline-flex;

  ${media.notebook} {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 15px;
    width: 100%;
  }
`
