import SearchIcon from 'assets/icons/search.svg'
import styled, { css } from 'styled-components'
import Image from 'ui/Image'
import { boxShadow } from 'utils/mixins'
import { color, trans, media } from 'utils/vars'
import wrapComponent from 'utils/wrapComponent'
import XMark, { StyledBar } from 'ui/XMark'

export const StyledWrapper = styled.div`
  border-radius: 16px;
  width: 100%;
  background: ${color.white};
  ${boxShadow.filterDrop};

  & .simplebar-track.simplebar-vertical {
    margin: 20px 0 32px;

    right: 32px;
  }

  ${media.tablet} {
    display: none;
  }
`

export const StyledHeader = styled.div`
  padding-right: 26px;
  width: 100%;
  border-bottom: 1px solid ${color.border};
  display: flex;
  position: relative;
  justify-content: space-between;
`
export const StyledTabs = styled.div`
  display: flex;
  opacity: 1;
  transition: ${trans.base} opacity;

  ${({ isSearching }) =>
    isSearching &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`
export const StyledTab = styled.div`
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  line-height: 34px;
  transition: ${trans.base} color;
  color: ${color.textActive};
  margin-left: 40px;
  padding-top: 20px;
  padding-bottom: 12px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translate(-50%);
    width: 0;
    height: 1px;
    background: ${color.borderActive};
    transition: ${trans.base} width, ${trans.base} background;
  }

  &:hover {
    color: ${color.accentHover};

    &:before {
      width: 100%;
    }
  }
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${color.black};
      &:hover {
        color: ${color.black};
      }

      &:before {
        background: ${color.black};
        width: 100%;
      }
    `};
`
export const StyledSearch = styled.div`
  display: flex;
`
export const StyledSearchInput = styled.input`
  background: none;
  border: none;
  font-weight: 500;
  font-size: 13px;
  line-height: 34px;
  position: absolute;
  top: 50%;
  transform: translate(-100%, -50%);
  left: calc(100% - 50px);
  transition: ${trans.medium} left, ${trans.medium} transform;

  ${({ isSearching }) =>
    isSearching &&
    css`
      transform: translate(0, -50%);
      min-width: 300px;
      left: 72px;
    `}

  &::placeholder {
    color: ${color.textActive};
  }
`

//block to calculate input's width
export const HiddenBlock = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 34px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
`

export const SearchIconBlock = wrapComponent(SearchIcon)
export const StyledSearchIcon = styled(SearchIconBlock)`
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 20px;
    height: 20px;
  }
`

export const StyledTabContentWrapper = styled.div`
  padding: 40px 49px 20px 41px;
`

export const StyledPreviews = styled.div`
  display: flex;
  padding-bottom: 40px;
  position: relative;
  width: calc(100% - 40px);

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${color.border};
    height: 1px;
    width: calc(100% + 40px);
  }
`
export const StyledPreviewTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-top: 17px;
  transition: ${trans.base} color;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 21px;
  & > div {
    top: 1px;
  }
`
export const StyledPreview = styled.div`
  /* max-width: 200px; */
  width: 20%;
  transition: ${trans.base} opacity;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    ${StyledPreviewTitle} {
      color: ${color.accentHover};
    }
  }

  &:not(:first-child) {
    margin-left: 38px;
  }
`
export const StyledPreviewImageWrapper = styled.div`
  cursor: pointer;
`
export const StyledPreviewImage = styled(Image)``

export const ScrollWrapper = styled.div`
  position: relative;
  display: none;

  ${({ show }) =>
    show &&
    css`
      display: block;
    `}
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 126px;
    width: 100%;
    transition: ${trans.base} opacity;
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 86.11%
    );
    pointer-events: none;
    border-radius: 16px;
    z-index: 2;
  }
  ${({ shadow }) =>
    shadow &&
    css`
      &:before {
        opacity: 0;
      }
    `}
`

export const StyledClose = styled(XMark)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  pointer-events: none;
  left: 20px;
  padding: 20px;

  transition: ${trans.base} opacity;

  ${StyledBar} {
    &:first-child {
      left: 50%;
      transform: translate(-50%) rotate(-45deg);
    }
    &:last-child {
      left: 50%;
      transform: translate(-50%) rotate(45deg);
    }
  }

  ${({ isSearching }) =>
    isSearching &&
    css`
      opacity: 0.4;
      pointer-events: all;
    `}
`
