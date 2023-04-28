import styled from 'styled-components'
import Paragraph from 'ui/Paragraph'
import { media, color } from 'utils/vars'
import { typography, aspectRatio } from 'utils/mixins'
import Image from 'ui/Image'
import ServiceCard from 'ui/Cards/ServiceCard'

export const StyledServiceCard = styled(ServiceCard)`
  width: 100%;
  display: flex;

  ${media.phablet} {
    max-width: none;
  }
`
export const StyledHeader = styled.div`
  ${media.tablet} {
    margin-top: 50px;
  }
`

export const StyledFirstItem = styled.div`
  display: flex;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
  justify-content: space-between;
  background: ${color.accent};

  & ${StyledServiceCard} {
    width: 54%;
    margin-bottom: 0;
    padding-left: 8%;

    & div {
      left: 64px;
    }

    ${media.phablet} {
      width: 100%;
      padding-left: 5%;

      & div {
        left: 30px;
      }
    }
  }

  ${media.phablet} {
    flex-direction: column;
    width: 100%;
    grid-column-end: auto;
  }

  &:hover {
    background: ${color.featureBackground};

    & ${StyledServiceCard} {
      background: ${color.featureBackground};
    }
  }
`

export const StyledParagraph = styled(Paragraph)`
  width: 67%;
  letter-spacing: 0;
  margin-bottom: 80px;

  ${media.phablet} {
    width: 100%;
  }
`

export const StyledImageWrapper = styled.div`
  width: 47%;
  ${aspectRatio(381, 470)};

  ${media.phablet} {
    width: 100%;
  }
`

export const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export const StyledLabel = styled.b`
  ${typography.label};
  opacity: 0.4;
`

export const StyledContent = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 150px;

  ${media.fullhd} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.phablet} {
    grid-template-columns: 1fr;
  }
`

export const StyledTitle = styled.h1`
  ${typography.h1}
  font-size: 80px;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 35px;

  ${media.phablet} {
    margin-bottom: 35px;
  }

  ${media.mobileLarge} {
    font-size: 26px;
  }
`
