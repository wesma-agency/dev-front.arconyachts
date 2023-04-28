import { Slider } from 'react-compound-slider'
import styled, { css } from 'styled-components'
import { color, media, trans } from 'utils/vars'

export const StyledWrapper = styled.div``

export const StyledLabel = styled.label`
  font-size: 12px;
  margin-right: 12px;
`

export const StyledInputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
`

export const StyledInput = styled.input`
  width: 100px;
  font-size: 13px;
  color: ${color.textActive};
  background: none;
  border: none;

  transition: ${trans.base} color;
  &::placeholder {
    color: ${color.textActive};
  }

  ${({ dragged }) =>
    dragged &&
    css`
      color: ${color.black};
    `}

  padding: 0;
  ${media.notebook} {
    font-size: 16px;
  }
`

export const StyledInputPassive = styled.input`
  width: 100px;
  font-size: 13px;
  position: absolute;
  color: ${color.textActive};
  background: none;
  border: none;
  top: 0;
  right: 0;
  transition: ${trans.base} color;
  pointer-events: none;
  &::placeholder {
    color: ${color.textActive};
  }
  padding: 0;
  ${({ dragged }) =>
    dragged &&
    css`
      color: ${color.black};
    `}
  ${media.notebook} {
    font-size: 16px;
  }
`

export const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: -8px;
`

export const StyledSlider = styled(Slider)`
  position: relative;
  margin-top: 18px;
`
export const StyledRail = styled.div`
  cursor: pointer;
  width: 100%;
  height: 1px;
  background: none;
  padding: 8px 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
`

export const StyledRailInner = styled.div`
  position: absolute;
  top: 8px;
  left: 0;
  height: 1px;
  width: 100%;
  background: ${color.more};
`

export const StyledHandle = styled.div`
  position: absolute;
  z-index: 2;
  width: 15px;
  height: 15px;
  cursor: pointer;
  transform: translate(-50%, -50%);
  box-sizing: content-box;
  margin: 0;
  padding: 9px;

  & > div {
    background: ${color.white};
    border: 0.5px solid ${color.black};
    border-radius: 50%;
    transition: ${trans.base} background, ${trans.base} border;
    display: flex;
    width: 15px;
    height: 15px;
  }
`

export const StyledTrack = styled.div`
  position: absolute;
  top: 0;
  height: 1px;
  z-index: 1;
  cursor: pointer;
  background: ${color.black};
`
