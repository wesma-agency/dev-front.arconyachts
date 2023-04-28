import Accordion from 'components/Accordion'
import { rgba } from 'polished'
import styled from 'styled-components'
import { color, media } from 'utils/vars'

export const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  margin-top: 92px;
  margin-bottom: 154px;

  ${media.fullhd} {
    margin-top: 200px;
    margin-bottom: 140px;
  }
  ${media.notebook} {
    margin-top: 160px;
    margin-bottom: 130px;
  }
  ${media.tablet} {
    margin-top: 20px;
    margin-bottom: 50px;
  }
`
export const StyledTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  letter-spacing: -0.02em;

  ${media.fullhd} {
    font-size: 34px;
  }
  ${media.notebook} {
    font-size: 30px;
  }
  ${media.tablet} {
    font-size: 26px;
    letter-spacing: normal;
  }
`

export const AccordionsWrapper = styled.div`
  width: 100%;
  margin-top: 66px;

  ${media.tablet} {
    margin-top: 61px;
  }
`

export const StyledText = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: ${rgba(color.black, 0.8)};
  max-width: 880px;
  padding-bottom: 36px;
  box-sizing: content-box;
  padding-top: 7px;

  ${media.tablet} {
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    padding-top: 13px;
    padding-bottom: 57px;
  }
`

export const StyledAccordion = styled(Accordion)`
  border-bottom: none;
  ${media.tablet} {
    &:last-child {
      border-bottom: 1px solid ${color.more};
    }
  }
`
