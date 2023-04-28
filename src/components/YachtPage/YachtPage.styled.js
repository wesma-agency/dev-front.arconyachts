import FeedbackForm from 'components/FeedbackForm'
import {
  StyledButton,
  StyledSubtitle,
} from 'components/FeedbackForm/FeedbackForm.styled'
import YachtSlider from 'components/Slider/YachtSlider'
import styled from 'styled-components'
import { media } from 'utils/vars'

export const StyledSlider = styled(YachtSlider)`
  margin-top: 140px;

  ${media.fullhd} {
    margin-top: 120px;
  }
  ${media.notebook} {
    margin-top: 100px;
  }
  ${media.tablet} {
    margin-top: 86px;
  }
`
export const StyledSliders = styled.div`
  width: 100%;
  margin: 40px 0 180px;

  ${media.fullhd} {
    margin-top: 30px;
    margin-bottom: 140px;
  }
  ${media.notebook} {
    margin-top: 20px;
    margin-bottom: 100px;
  }
  ${media.tablet} {
    margin-top: 0px;
    margin-bottom: 80px;
  }
`

export const StyledFeedbackForm = styled(FeedbackForm)`
  margin-top: 180px;
  ${media.fullhd} {
    margin-top: 140px;
  }
  ${media.notebook} {
    margin-top: 100px;
  }
  ${media.tablet} {
    margin-top: 80px;
    padding-bottom: 51px;
  }

  & > ${StyledButton} {
    ${media.tablet} {
      margin-top: 40px;
    }
  }
`

export const StyledTestDriveForm = styled(FeedbackForm)`
  margin: 0;
  min-height: 646px;
  padding-top: 160px;
  padding-bottom: 75px;

  ${media.tablet} {
    min-height: auto;
    padding-top: 80px;
    padding-bottom: 39px;
  }
  ${StyledSubtitle} {
    margin-top: 0px;
    max-width: 720px;
    width: 100%;
    font-size: 36px;

    ${media.notebook} {
      font-size: 16px;
      line-height: 22px;
    }
    ${media.tablet} {
      font-size: 14px;
    }
  }
  ${StyledButton} {
    ${media.tablet} {
      margin-top: 40px;
    }
  }
`
