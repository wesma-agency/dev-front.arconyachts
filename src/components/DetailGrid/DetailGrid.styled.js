import styled from 'styled-components'
import Button from 'ui/Buttons/Button'
import { ButtonDark } from 'ui/Buttons/ButtonDark'
import YachtCard from 'ui/Cards/YachtCard'
import { container, containerLeft, fullWidth, typography } from 'utils/mixins'
import { color, media } from 'utils/vars'

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${media.phablet} {
    flex-direction: column;
  }
`

export const StyledHeader = styled.h2`
  ${typography.h2}
  text-transform: uppercase;
  line-height: 0.7em;
  white-space: nowrap;
  ${media.mobile} {
    font-size: 24px;
  }
`

export const StyledCaption = styled.div`
  font-size: 16px;
  color: ${color.more};
  height: 100%;
  margin-left: 32px;
  line-height: 0.88em;
  white-space: nowrap;

  ${media.phablet} {
    margin-left: 0;
    margin-top: 20px;
  }
`

export const StyledDescriptionWrapper = styled.div`
  margin: 84px 14.5vw 0 22vw;

  ${media.fullhd} {
    margin-top: 60px;
    margin-left: 0;
    ${containerLeft}
  }

  ${media.notebook} {
    margin-top: 40px;
  }

  ${media.tablet} {
    margin-left: 0;
    margin-right: 0;
    margin-top: 20px;
    ${container};
  }
`

export const StyledDescription = styled.div`
  ${fullWidth};
  margin-left: 22vw;
  width: calc(100vw - 22vw - 14.5vw);
  margin-top: 84px;
  margin-bottom: 40px;

  ${typography.p};

  ${media.fullhd} {
    margin-top: 60px;
    margin-left: 0;
    transform: translate(0, 0);
  }

  ${media.notebook} {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 100%;
  }

  ${media.tablet} {
    margin-left: 0;
    margin-right: 0;
    margin-top: 20px;
  }
`

export const StyledDescriptionCaption = styled.div`
  color: ${color.textActive};
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.02em;
  ${fullWidth};

  margin-left: 22vw;
  width: calc(100vw - 22vw - 14.5vw);

  ${media.fullhd} {
    margin: 0;
    transform: none;
  }
  ${media.tablet} {
    display: none;
  }
`

export const ContentWrapper = styled.div`
  ${fullWidth};
  width: calc(100vw - 22vw - 7vw);
  margin-left: 22vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.fullhd} {
    margin-left: 0;
    width: 100%;
    transform: translate(0, 0);
  }
`

export const StyledCard = styled(YachtCard)`
  &&& {
    width: 48%;
    max-width: none;
    margin-top: 60px;
    ${media.notebook} {
      position: relative;
      width: 48%;
      margin-top: 40px;
    }

    ${media.tablet} {
      width: 100%;
    }
  }
`

export const StyledButton = styled(Button)`
  ${media.tablet} {
    ${({ isBuilding }) => (isBuilding ? `padding: 18px 48px;` : '')};
  }
  ${media.mobileLarge} {
    width: 100%;
  }
  ${media.mobile} {
    padding: 24px 48px;
  }
`

export const StyledDarkButton = styled(ButtonDark)`
  ${media.mobileLarge} {
    width: 100%;
  }

  ${media.mobile} {
    padding: 24px 48px;
  }
`

export const StyledWrapper = styled.section`
  margin: 180px 0;

  ${media.fullhd} {
    margin: 140px 0;
  }
  ${media.notebook} {
    margin: 120px 0;
  }
  ${media.tablet} {
    margin: 100px 0;
  }
  ${media.phablet} {
    margin: 80px 0;
  }
`
export const StyledButtonWrapper = styled.div`
  margin-top: 60px;
  width: 100%;

  ${media.tablet} {
    margin-top: 54px;
  }
`
