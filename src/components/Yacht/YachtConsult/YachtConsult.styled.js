import styled from 'styled-components'
import Button from 'ui/Buttons/Button'
import Image from 'ui/Image'
import { aspectRatio, fullWidth, fonts } from 'utils/mixins'
import { color, media } from 'utils/vars'

export const StyledWrapper = styled.section`
  display: flex;
  background: ${color.accent};
  margin-top: 180px;
  ${fullWidth}
  padding-right: 5%;

  ${media.fullhd} {
    margin-top: 120px;
  }
  ${media.notebook} {
    margin-top: 80px;
  }
  ${media.tablet} {
    padding: 0 20px 0 10%;
    margin-top: 57px;
  }
  ${media.mobileLarge} {
    padding-left: 20px;
  }
`
export const StyledImageWrapper = styled.div`
  position: relative;
  width: 42%;
  max-width: 600px;
  min-width: 320px;
  ${aspectRatio(600, 918)}

  ${media.tablet} {
    display: none;
  }
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

export const StyledName = styled.div`
  font-weight: 500;

  ${media.notebook} {
    margin-bottom: 12px;
  }
`
export const StyledPosition = styled.div`
  color: ${color.info};
  ${media.tablet} {
    font-weight: 600;
    font-size: 12px;
    color: ${color.more};
    text-transform: uppercase;
  }
  ${media.phablet} {
    font-size: 11px;
  }
  ${media.mobileLarge} {
    font-size: 10px;
    line-height: 150%;
  }
`

export const StyledNameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;

  ${media.fullhd} {
    font-size: 17px;
  }
  ${media.notebook} {
    font-size: 16px;
  }
  ${media.tablet} {
    font-size: 16px;
    margin-left: 20px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 25;
  }

  & > ${StyledName} {
    margin-right: 12px;
  }
`
export const StyledTagline = styled.h2`
  ${fonts.SangBleuSunrise}
  font-size: 36px;
  line-height: 150%;
  text-transform: uppercase;
  text-indent: -0.75em;
  margin-top: 28px;
  padding-right: 34px;

  ${media.fullhd} {
    font-size: 32px;
  }
  ${media.notebook} {
    font-size: 26px;
  }
  ${media.tablet} {
    font-size: 22px;
    width: 100%;
    max-width: 450px;
    margin-top: 32px;
  }
  ${media.phablet} {
    font-size: 18px;
  }
  ${media.mobileLarge} {
    padding-left: 10%;
    font-size: 16px;
    line-height: 32px;
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
export const StyledConsultWrapper = styled.div`
  padding: 50px 0 40px 8%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 2;

  ${media.tablet} {
    padding: 81px 0 75px;
  }
`

export const StyledButtonWrapper = styled.div`
  ${media.mobileLarge} {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
`
export const StyledPersonWrapper = styled.div`
  display: flex;

  ${media.mobileLarge} {
    padding-left: 5%;
  }
`
export const StyledImageWrapperMob = styled.div`
  display: none;

  ${media.tablet} {
    width: 83px;
    height: 83px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

    & > div {
      width: 111px !important;
      height: 300px !important;
      position: absolute !important;
      max-width: none !important;
      top: 0;
      left: 0;
    }

    img {
      object-fit: cover;
      transform: translate(-21px, -40px);
    }
  }
`
