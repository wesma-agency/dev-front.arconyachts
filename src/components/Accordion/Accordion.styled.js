import styled, { css } from 'styled-components'
import { spoiler } from 'utils/mixins'
import { color, media, trans } from 'utils/vars'

export const StyledWrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${color.more};
  border-bottom: 1px solid ${color.more};
`

export const StyledTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  transition: ${trans.base} color;
  letter-spacing: -0.02em;

  ${media.fullhd} {
    font-size: 20px;
    line-height: 34px;
  }
  ${media.notebook} {
    font-size: 22px;
    line-height: 30px;
  }

  ${media.tablet} {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.05em;
  }
`

export const Bar = styled.div`
  width: 23px;
  height: 1px;
  background: ${color.black};
  transition: ${trans.base} background, ${trans.base} transform,
    ${trans.medium} width;

  ${media.tablet} {
    width: 15px;
  }
`
export const Bar1 = styled(Bar)`
  position: absolute;
`
export const Bar2 = styled(Bar)`
  transform: rotate(90deg);
`
export const StyledPlus = styled.div`
  margin-left: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${trans.base} background, ${trans.base} transform;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(-90deg);

      ${Bar1} {
        width: 0;
      }
    `}
`
export const StyledArrow = styled.div``
export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 32px 0;
  min-height: 100px;
  &:hover {
    ${StyledTitle} {
      color: ${color.spoilerTitle};
    }
    ${Bar} {
      background: ${color.spoilerTitle};
    }
  }

  ${media.tablet} {
    min-height: 83px;
    padding: 29px 0;
    &:hover {
      ${StyledTitle} {
        color: ${color.black};
      }
      ${Bar} {
        background: ${color.black};
      }
    }
  }
`

export const StyledContent = styled.div`
  ${spoiler};
  width: 100%;
  ${({ defaultOpened }) =>
    defaultOpened &&
    css`
      height: auto;
      opacity: 1;
      pointer-events: auto;
    `}
`
export const StyledSpoiler = styled.div``
