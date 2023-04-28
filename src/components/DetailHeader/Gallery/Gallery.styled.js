import styled, { css, keyframes } from 'styled-components'
import Container from 'ui/Container'
import { color, trans } from 'utils/vars'
import DropIcn from 'assets/icons/filter-arrow.svg'
import wrapComponent from 'utils/wrapComponent'

export const DropdownIcon = wrapComponent(DropIcn)

export const StyledDropdownIcon = styled(DropdownIcon)`
  top: 19px;
  left: 14px;
  position: absolute;
  svg {
    width: 20px;
    height: 25px;
    transform: rotate(90deg);
  }
`

const getOut = keyframes`
  from {
    transform: translate(-100%);
  }
  to {
    transform: translate(0);
  }
`

export const GalleryWrapper = styled(Container)`
  background: ${color.white};
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  transition: ${trans.base} transform;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  animation: ${getOut} ${trans.base};
  transform: translate(0);
  ${({ isClosing }) =>
    isClosing &&
    css`
      transform: translate(-100%);
    `}
`
export const GalleryHeader = styled(Container)`
  height: 60px;
  width: 100%;
  position: fixed;
  flex-direction: row;
  top: 0;
  animation: ${getOut} ${trans.base};
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${color.white};
  z-index: 5;
  transition: ${trans.base} transform;
  animation: ${getOut} ${trans.base};
  transform: translate(0);
  ${({ isClosing }) =>
    isClosing &&
    css`
      transform: translate(-100%);
    `}
`

export const GalleryContent = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: auto;
`

export const GalleryContentItem = styled.div`
  width: 100%;
  min-height: 200px;
  margin-bottom: 12px;

  ${({ isVertical }) =>
    isVertical &&
    css`
      min-height: 240px;
      width: 49%;
    `}
`

const detailbg = css`
  background: linear-gradient(147.62deg, #282827 25.7%, #000000 97.4%);
`

export const GalleryDetailHeader = styled(GalleryHeader)`
  background: transparent;
  z-index: 6;
  color: ${color.white};
  font-size: 16px;
  line-height: 18px;
  svg path {
    stroke: ${color.white};
    opacity: 1;
  }
`

export const GalleryDetailWrapper = styled(GalleryWrapper)`
  ${detailbg}
  z-index: 5;
  padding-top: 60px;
  padding-bottom: 20px;
`

export const StyledDetailSlide = styled.div`
  height: 100%;
  width: 100%;
`
