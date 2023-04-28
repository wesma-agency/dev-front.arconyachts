import styled from 'styled-components'
import Button from 'ui/Buttons/Button'
import Image from 'ui/Image'
import Input from 'ui/Input'
import { aspectRatio, fullWidth, fonts } from 'utils/mixins'
import { color, media, trans } from 'utils/vars'
import Link from 'ui/Link'

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background: ${color.accent};
  margin-bottom: 60px;
  margin-top: 114px;

  ${fullWidth};
  padding-right: 5%;

  ${media.fullhd} {
    margin-top: 120px;
  }
  ${media.notebook} {
    margin-top: 80px;
    margin-top: 60px;
  }
  ${media.tablet} {
    padding: 0 20px;
    margin-top: 80px;
    margin-bottom: 0;
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 54%;
  max-width: 640px;
  min-width: 320px;
  ${aspectRatio(637, 918)};
  display: inline-block;
`

export const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  span,
  img {
    width: 100% !important;
    height: 100% !important;
  }
`

export const FormWrapper = styled.div`
  padding: 160px 0 40px 10%;
  max-width: 800px;
  width: 54%;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;

  ${media.fullhd} {
    padding: 80px 0 80px 10%;
  }

  ${media.tablet} {
    width: 100%;
    padding: 80px 0;
    text-align: center;
  }
`

export const StyledHeader = styled.h2`
  font-size: 36px;
  line-height: 150%;
  text-transform: uppercase;
  ${fonts.SangBleuSunrise}

  ${media.fullhd} {
    font-size: 32px;
  }

  ${media.notebook} {
    font-size: 26px;
  }

  ${media.tablet} {
    font-size: 20px;
    line-height: 28px;
  }
`

export const StyledParagraph = styled.p`
  width: 70%;
  margin-top: 16px;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${color.invitationText};
  padding-right: 34px;

  ${media.notebook} {
    width: 100%;
    padding-right: 0;
  }

  ${media.tablet} {
    margin-top: 10px;
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
  }
`

export const Form = styled.div`
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
`

export const StyledInput = styled(Input)`
  width: 72%;

  &:not(:first-child) {
    margin-top: 40px;
  }

  ${media.fullhd} {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }

  ${media.notebook} {
    margin-top: 20px;
    max-width: 440px;
    width: 100%;
  }

  ${media.tablet} {
    margin-top: 20px;
  }
`

export const StyledButton = styled(Button)`
  margin-top: 80px;
  max-width: 310px;
  width: 100%;
  padding: 24px 0;

  ${media.notebook} {
    margin-top: 70px;
  }
  ${media.tablet} {
    max-width: 286px;
    align-self: center;
    margin-top: 50px;
    letter-spacing: 0.05em;
  }
  ${media.phablet} {
    margin-top: 40px;
    height: 56px;
    padding: 0;
  }
  ${media.mobileLarge} {
    width: 100%;
    box-sizing: border-box;
  }
`

export const Agreement = styled.div`
  margin-top: 24px;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  color: ${color.placeholder};
  text-align: center;
`

export const StyledAgreementLink = styled(Link)`
  font-weight: 300;
  font-size: 12px;
  color: ${color.placeholder};
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
  text-transform: none;
  transition: ${trans.base} color;

  &:hover {
    color: ${color.accentHover};
    &:before {
      background: ${color.accentHover};
    }
  }
`
