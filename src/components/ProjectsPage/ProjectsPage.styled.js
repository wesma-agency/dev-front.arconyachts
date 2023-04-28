import styled from 'styled-components'
import { media } from 'utils/vars'
import FeedbackForm from '../FeedbackForm'

export const StyledFeedbackForm = styled(FeedbackForm)`
  margin-top: 115px;

  ${media.tablet} {
    margin-top: 80px;
  }
`
export const SliderWrapper = styled.div`
  width: 100%;
  margin-top: 120px;
  margin-bottom: 58px;

  ${media.fullhd} {
    margin-top: 100px;
  }
  ${media.notebook} {
    margin-top: 80px;
    margin-bottom: 0;
  }
`
