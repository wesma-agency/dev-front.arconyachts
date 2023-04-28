import styled from 'styled-components'
import { typography } from 'utils/mixins'
import FeedbackForm from '../FeedbackForm'
import { media } from 'utils/vars'
import wrapComponent from 'utils/wrapComponent'
import FiltersIcon from 'assets/icons/filters.svg'

export const Header = styled.h1`
  ${typography.h1};
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-bottom: 20px;
  white-space: nowrap;

  ${media.tablet} {
    position: relative;
    margin-top: 60px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
  }

  ${media.mobileLarge} {
    font-size: 26px;
    line-height: 34px;
    margin-bottom: 26px;
  }
`

const FiltersIconBlock = wrapComponent(FiltersIcon)
export const StyledFiltersIcon = styled(FiltersIconBlock)`
  cursor: pointer;
  display: none;

  ${media.tablet} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  ${media.mobileLarge} {
    top: 3px;
  }
`

export const StyledFeedbackForm = styled(FeedbackForm)`
  margin-bottom: 9px;

  ${media.tablet} {
    margin-bottom: 20px;
  }
`
