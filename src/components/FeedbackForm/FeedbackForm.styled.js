import styled, { css } from 'styled-components'
import Button from 'ui/Buttons/Button'
import Input from 'ui/Input'
import Link from 'ui/Link'
import TextArea from 'ui/TextArea'
import XMark from 'ui/XMark'
import { container, fullWidth, fonts } from 'utils/mixins'
import { color, media, trans } from 'utils/vars'
export const StyledWrapper = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 726px;
  width: 100%;
  background: ${color.accent};
  padding: 140px 0 120px;
  ${fullWidth}

  ${media.notebook} {
    padding: 80px 20px;
    min-height: 665px;
  }

  ${media.tablet} {
    ${container};

    ${({ withTextArea }) =>
      withTextArea &&
      css`
        padding-top: 60px;
        padding-bottom: 60px;
      `}
  }
`

export const StyledTitle = styled.h2`
  color: ${color.black};
  font-size: 36px;
  line-height: 150%;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-align: center;
  padding: 0 20px;
  ${fonts.SangBleuSunrise}

  ${media.notebook} {
    font-size: 24px;
    margin-bottom: 18px;
  }
  ${media.tablet} {
    padding: 0 10px;
    font-size: 20px;
    margin-bottom: 10px;
    line-height: 28px;
  }
`
export const StyledSubtitle = styled.h3`
  ${fonts.SangBleuSunrise}
  text-align: center;
  color: ${color.black};
  line-height: 48px;
  font-weight: 300;
  margin-bottom: 58px;
  font-style: italic;
  padding: 0 20px;
  font-size: 28px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;

  ${({ isManagement }) =>
    isManagement &&
    css`
      width: 70%;
    `}

  ${({ withTextArea }) =>
    withTextArea &&
    css`
      margin-bottom: 66px;
    `}

  ${media.notebook} {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: auto;
  }
  ${media.tablet} {
    margin: 0 auto;
    margin-bottom: auto;
    font-size: 14px;
    width: 270px;
    padding: 0 10px;

    ${({ withTextArea }) =>
      withTextArea &&
      css`
        width: 100%;
        margin-bottom: 6px;
      `}

    ${({ wideText }) =>
      wideText &&
      css`
        width: 100%;
      `}
  }
`
export const StyledSubtitleLink = styled.a`
  line-height: 48px;
  font-weight: 300;
  font-style: italic;
  font-size: 28px;
  text-decoration: underline;
  transition: ${trans.base} color;
  ${media.notebook} {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 40px;
  }
  ${media.tablet} {
    margin: 0 auto;
    font-size: 14px;
  }
  &:hover {
    color: ${color.accentHover};
  }
`

export const StyledForm = styled.div`
  display: flex;
  justify-content: center;

  ${media.notebook} {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  ${({ isInvitation }) =>
    isInvitation &&
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 38px;

      ${media.notebook} {
        width: 100%;
        margin-top: 0;
      }

      ${media.tablet} {
        margin-bottom: 11px;
        align-items: center;
      }
    `}
`
export const StyledButton = styled(Button)`
  display: block;
  min-width: 266px;
  margin-top: 60px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet} {
    letter-spacing: 0.05em;
    margin: 51px auto 23px;
  }

  ${media.phablet} {
    ${({ isService }) =>
      isService
        ? 'width: 100%; padding: 18px 16px;'
        : 'width: 286px;  padding: 18px 27px;'}

    ${({ withTextArea }) =>
      withTextArea &&
      css`
        width: 100%;
        margin-top: 6px;
      `}
  }
`
export const StyledAgreement = styled.div`
  font-weight: 300;
  font-size: 12px;
  color: ${color.placeholder};
  text-align: center;
  line-height: 20px;
`
export const StyledAgreementLink = styled(Link)`
  font-weight: 300;
  font-size: 12px;
  color: ${color.placeholder};
  text-transform: none;
  transition: ${trans.base} color;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    background: ${color.placeholder};
    position: absolute;
    bottom: 4px;
    left: 0;
    transition: ${trans.base} background;
    opacity: 0.7;
  }

  &:hover {
    color: ${color.accentHover};

    &:before {
      background: ${color.accentHover};
    }
  }
`

export const StyledInput = styled(Input)`
  ${media.fullhd} {
    width: 250px;
  }

  &:not(:first-child) {
    margin-left: 40px;
  }

  ${media.notebook} {
    &:not(:first-child) {
      margin-left: 0;
    }
    margin-top: 25px;
    max-width: 440px;
    width: 100%;
  }

  ${media.tablet} {
    margin-top: 20px;
    transition: ${trans.base} margin-bottom;
    ${({ error }) =>
      error &&
      css`
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      `}
  }
`

export const StyledTextArea = styled(TextArea)`
  width: 100%;
  max-width: 921px;
  margin-top: 50px;
  margin-bottom: 20px;

  ${media.fullhd} {
    max-width: 830px;
  }

  ${media.notebook} {
    max-width: 440px;
  }

  ${media.tablet} {
    margin-top: 25px;
  }
`

export const StyledClose = styled(XMark)`
  padding: 10px;
  position: absolute;
  top: 60px;
  right: 60px;
  opacity: 0.4;
  width: 50px;

  ${media.fullhd} {
    top: 50px;
    right: 50px;
  }
  ${media.notebook} {
    top: 40px;
    right: 40px;
  }
  ${media.tablet} {
    right: 30px;
    top: 20px;
  }
  ${media.mobileLarge} {
    right: 12px;
  }
`

export const Wrapper = styled.div`
  ${({ isInvitation }) =>
    isInvitation &&
    css`
      display: flex;
      justify-content: center;
      background: ${color.accent};
      margin-bottom: 60px;

      ${fullWidth};
      padding-right: 5%;

      ${media.fullhd} {
        margin-top: 120px;
      }
      ${media.notebook} {
        margin-top: 80px;
      }
      ${media.tablet} {
        padding: 0 20px;
        margin-top: 0;
        margin-bottom: 0;
      }
    `}
`
