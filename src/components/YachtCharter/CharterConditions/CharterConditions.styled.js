import { StyledText as AccordionText } from 'components/CharterPage/CharterFaq/CharterFaq.styled'
import { rgba } from 'polished'
import styled from 'styled-components'
import { color, media } from 'utils/vars'

export const StyledText = styled.div`
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.02em;
  width: 100%;
  margin-top: 51px;
  max-width: 917px;

  ${media.fullhd} {
    margin-top: 40px;
  }
  ${media.notebook} {
    margin-top: 30px;
  }
  ${media.tablet} {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: normal;
    margin-top: 20px;
  }
`
export const StyledBills = styled.div`
  display: flex;
  width: 100%;
  margin-top: 68px;
  flex-wrap: wrap;

  ${media.notebook} {
    margin-top: 55px;
  }
  ${media.tablet} {
    margin-top: 40px;
  }
`
export const StyledBillWrapper = styled.div`
  max-width: 25%;
  margin-bottom: 20px;
  
  &:not(:last-child) {
    margin-right: 6%;
  }

  ${media.notebook} {
    max-width: none;
  }
`
export const StyledBillName = styled.div`
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: ${rgba(color.black, 0.7)};
  ${media.tablet} {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: normal;
  }
`
export const StyledBillValue = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  margin-top: 14px;
  letter-spacing: -0.02em;
  ${media.tablet} {
    font-size: 14px;
    line-height: 22px;
    margin-top: 6px;
    letter-spacing: normal;
  }
`

export const StyledAccordions = styled.div`
  margin-top: 80px;

  & > p {
    margin-bottom: 1.6em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${media.notebook} {
    margin-top: 60px;
  }
  ${media.tablet} {
    margin-top: 40px;
  }
`

export const StyledAccordionText = styled(AccordionText)`
  max-width: 770px;
`

export const StyledParagraph = styled.p`
  margin-bottom: 16px;
`
