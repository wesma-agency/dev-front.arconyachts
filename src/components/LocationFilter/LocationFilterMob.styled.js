import DropIcn from 'assets/icons/filter-arrow.svg'
import { StyledApplyMob } from 'components/CatalogPage/CatalogFilters/CatalogFiltersWrapper.styled'
import styled, { css, keyframes } from 'styled-components'
import Container from 'ui/Container'
import { color, media, trans } from 'utils/vars'
import wrapComponent from 'utils/wrapComponent'
import { container } from 'utils/mixins'

export const StyledWrapper = styled.div`
  display: none;
  ${media.tablet} {
    display: block;
  }
`

export const DropdownIcon = wrapComponent(DropIcn)

export const StyledDropdownIcon = styled(DropdownIcon)`
  margin-right: 7px;
`

export const StyledDropIcon = styled(StyledDropdownIcon)`
  transform: rotate(-90deg);
`

export const StyledItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

// location
//   country
//     region

export const StyledApply = styled(StyledApplyMob)`
  margin: 0;
`

export const SubLocationTitleWrapper = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  position: relative;
  margin-top: 70px;
  margin-bottom: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`

export const StyledSubLocationItem = styled(StyledItemWrapper)`
  &:not(:first-child) {
    margin-top: 20px;
  }
`

export const StyledBackIcon = styled(StyledDropIcon)`
  transform: rotate(90deg);
  position: absolute;
  left: -7px;
  svg {
    height: 25px;
    width: 20px;
  }
`

export const StyledApplyWrapper = styled.div`
  ${container};
  width: 100%;
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translate(-50%);
  padding-top: 24px;
`

export const StyledItemsWrapper = styled.div`
  ${container};
  width: 100%;
  height: calc(100% - 234px);
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translate(-50%);
  display: block;
  overflow: auto;
  padding-bottom: 24px;
`

const getOut = keyframes`
  from {
    transform: translate(-100%);
  }
  to {
    transform: translate(0);
  }
`

export const StyledSublocationWrapper = styled.div`
  ${container};
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: ${trans.base} transform;
  height: 100%;
  width: 100%;
  background: ${color.white};

  animation: ${getOut} ${trans.base};
  transform: translate(0);
  ${({ isClosing }) =>
    isClosing &&
    css`
      transform: translate(-100%);
    `}
  ${({ top }) =>
    top &&
    css`
      top: ${top}px;
    `};
  ${({ isRegion }) =>
    isRegion &&
    css`
      height: calc(100% - 104px);
      ${StyledItemsWrapper} {
        height: calc(100% - 104px);
      }
    `}
`

export const SubLocationTitle = styled.div`
  width: 100%;
  text-align: center;
`
