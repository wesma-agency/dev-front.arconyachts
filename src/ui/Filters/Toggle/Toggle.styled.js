import styled, { css } from 'styled-components'
import { color, media, trans } from '../../../utils/vars'
import { gap } from 'utils/mixins'

export const StyledRadio = styled.div`
  padding: 12px 20px;
  margin-bottom: 12px;
  position: relative;
  font-size: 13px;
  display: inline-block;
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
  border: 0.5px solid ${color.textActive};
  cursor: pointer;
  background: white;
  transition: ${trans.base} background, ${trans.base} border;

  ${gap(8)}

  &:hover {
    background: ${color.hover};
    border-color: ${color.hover};
  }

  ${({ checked }) =>
    checked &&
    css`
      border-color: ${color.accentHover};
      background: ${color.accent};
      border-color: ${color.accent};

      &:hover {
        background: ${color.accent};
        border-color: ${color.accent};
      }
    `}

  ${media.tablet} {
    padding: 11px;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 0;
  }
`

export const StyledTitle = styled.div`
  float: left;

  ${media.tablet} {
    font-size: 12px;
    line-height: 15px;
  }
`

export const StyledQuantity = styled.span`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;
  margin-left: 12px;
  opacity: 0.3;

  ${media.tablet} {
    font-size: 12px;
    line-height: 15px;
  }
`
