import styled from 'styled-components'
import { typography } from 'utils/mixins'
import { media } from 'utils/vars'
import Container from 'ui/Container'
import wrapComponent from 'utils/wrapComponent'
import FiltersIcon from 'assets/icons/filters.svg'

export const StyledContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 44px;

  ${media.tablet} {
    position: relative;
    padding-top: 60px;
    padding-bottom: 20px;
  }
`

const FiltersIconBlock = wrapComponent(FiltersIcon)
export const StyledFiltersIcon = styled(FiltersIconBlock)`
  cursor: pointer;
  display: none;

  ${media.tablet} {
    display: block;
    position: absolute;
    top: 66px;
    left: 0px;
  }
`

export const Title = styled.h1`
  ${typography.h1};
  margin-bottom: 60px;
  font-weight: 500;
  //line-height: 130%;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  ${media.tablet} {
    margin-bottom: 40px;
    font-size: 26px;
    line-height: 34px;
    text-align: center;
  }
`

export const Description = styled.p`
  ${typography.p};
  line-height: 26.5px;
  width: 82%;

  ${media.tablet} {
    width: 96%;
    font-size: 14px;
    line-height: 22px;
  }
`
