import styled from 'styled-components'
import Paragraph from 'ui/Paragraph'
import { media } from 'utils/vars'
import ListItem from 'ui/ListItem'
import { fonts } from 'utils/mixins'

export const StyledTitle = styled.h2`
  ${fonts.SangBleuSunrise}
  font-size: 24px;
  line-height: 150%;
  text-transform: uppercase;
  margin-bottom: 57px;
  width: 100%;

  ${media.notebook} {
    margin-bottom: 32px;
  }

  ${media.mobileLarge} {
    max-width: 300px;
    white-space: pre-wrap;
  }
`

export const StyledParagraph = styled(Paragraph)`
  margin-bottom: 40px;
  letter-spacing: -0.02em;
  font-weight: 300;

  ${media.phablet} {
    margin-bottom: 32px;
    width: 96%;
  }
`

export const StyledParagraphIntro = styled(StyledParagraph)`
  margin-bottom: 60px;
`

export const StyledListItem = styled(ListItem)`
  & span {
    margin-left: 2.4%;

    ${media.phablet} {
      ${({ isManagement }) =>
        isManagement ? `margin-left: 3%;` : `margin-left: 16%;`}
    }
  }

  ${media.phablet} {
    width: 95%;
  }
`

export const StyledInfoBlock = styled.div`
  margin-bottom: 83px;

  ${media.tablet} {
    margin-bottom: 92px;

    &.registration-page__info ${StyledTitle} {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.05em;
      max-width: 100%;
    }

    &.registration-page__info ${StyledParagraph} {
      margin-bottom: 60px;
    }
  }
`

export const StyledList = styled.ul`
  margin-bottom: 63px;

  ${media.phablet} {
    margin-bottom: 30px;
  }
`
