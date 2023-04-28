import styled from 'styled-components'
import { ButtonDark } from 'ui/Buttons/ButtonDark'
import { container, fonts, aspectRatio } from 'utils/mixins'
import { color, media } from 'utils/vars'
import Image from 'next/image'

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: 640px;
  max-height: calc(100vh - 100px);

  ${media.tablet} {
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: auto;
    max-height: none;
  }
`

export const StyledTitle = styled.div`
  ${fonts.SangBleuSunrise};
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 59px;

  text-transform: uppercase;

  color: ${color.shipyardHeader};

  ${media.tablet} {
    font-size: 16px;
    font-weight: normal;
    font-size: 32px;
    line-height: 35px;
    margin-bottom: 8px;
  }
`

export const StyledText = styled.div`
  font-size: 16px;
  line-height: 160%;
  margin-top: 10px;
  font-weight: normal;
  margin-bottom: 63px;

  ${media.tablet} {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 27px;
  }
`

export const StyledInfo = styled.div`
  width: 380px;
  position: absolute;
  display: flex;
  flex-direction: column;

  top: 13%;
  background-color: ${color.white};
  padding: 60px 44px 48px;
  box-sizing: border-box;
  left: 7vw;

  ${media.fullhd} {
    left: 6vw;
  }

  ${media.tablet} {
    position: static;
    padding: 0;
    width: 100%;
    flex-grow: 2;
    justify-content: space-between;
    ${container};
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  ${aspectRatio(1920, 876)}
  min-height: 640px;
  max-height: calc(100vh - 100px);
  overflow: hidden;

  ${media.tablet} {
    height: 487px;
    min-height: auto;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const StyledLabel = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 140%;
  margin-bottom: 10px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  opacity: 0.4;

  ${media.tablet} {
    margin-top: 22px;
    margin-bottom: 7px;
  }
`

export const StyledBrand = styled.b`
  ${fonts.SangBleuSunrise};
  font-style: italic;
  font-weight: normal;
  font-size: 28px;
  line-height: 41px;

  ${media.tablet} {
    font-weight: normal;
    font-size: 24px;
    line-height: 35px;
  }
`

export const StyledButton = styled(ButtonDark)`
  width: 90%;
  display: flex;
  justify-content: center;
  white-space: nowrap;

  ${media.tablet} {
    width: fit-content;
  }

  ${media.phablet} {
    width: 100%;
    padding: 18px 52px;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
