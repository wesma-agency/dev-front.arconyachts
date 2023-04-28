import styled, { css } from 'styled-components'
import { fullWidth, typography, fonts } from 'utils/mixins'
import { color, media, trans } from 'utils/vars'
import Image from 'ui/Image'
import MapMarker from 'assets/icons/map-marker.svg'

export const Header = styled.h1`
  ${typography.h1};
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-top: 50px;

  ${media.tablet} {
    margin-top: 60px;
  }
`

export const AddressList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  ${media.phablet} {
    flex-direction: column;
  }
`

export const AddressItem = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 230px;
  padding-top: 40px;
  padding-bottom: 54px;
  border-bottom: 6px solid transparent;
  transition: ${trans.base} border;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 6px solid ${color.accentHover};
    `}

  &:not(:last-of-type) {
    margin-right: 80px;
  }

  ${media.fullhd} {
    width: 30%;

    &:not(:last-of-type) {
      margin-right: 40px;
    }
  }

  ${media.notebook} {
    width: 40%;
  }

  ${media.tablet} {
    width: 100%;
    padding-bottom: 24px;

    &:not(:last-of-type) {
      margin-right: 0;
    }
  }
`

export const City = styled.b`
  font-size: 12px;
  line-height: 15px;
  opacity: 0.6;
  margin-bottom: 8px;
  background: linear-gradient(147.62deg, #282827 25.7%, #000000 97.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const PhoneNumber = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 129.5%;
  margin-bottom: 8px;
  background: linear-gradient(147.62deg, #282827 25.7%, #000000 97.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Address = styled.p`
  font-size: 12px;
  line-height: 15px;
  background: linear-gradient(147.62deg, #282827 25.7%, #000000 97.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ImageWrapper = styled.div`
  ${fullWidth};
  position: relative;
  display: block;
  white-space: nowrap;
  margin-bottom: 140px;

  ${media.tablet} {
    height: 440px;
    margin-bottom: 40px;
  }
`

export const Img = styled(Image)`
  span,
  img {
    width: 100% !important;
    height: 100% !important;
  }
`

export const Marker = styled(MapMarker)`
  width: 60px;
  height: 60px;
  position: absolute;
  top: ${({ $latitude }) => $latitude + '%'};
  left: ${({ $longitude }) => $longitude + '%'};

  path {
    fill: ${color.subacive};
    transition: ${trans.base} fill;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      path {
        fill: ${color.accentHover};
      }
    `}

  ${media.fullhd} {
    width: 50px;
    height: 50px;
  }

  ${media.notebook} {
    width: 40px;
    height: 40px;
  }

  ${media.tablet} {
    width: 30px;
    height: 30px;
  }
`

export const Requisites = styled.dl`
  display: flex;
  padding-bottom: 146px;

  ${media.tablet} {
    flex-direction: column;
    padding-bottom: 80px;
  }
`

export const Title = styled.dt`
  ${fonts.SangBleuSunrise};
  font-size: 24px;
  line-height: 150%;
  text-transform: uppercase;
  margin-right: 160px;

  ${media.notebook} {
    margin-right: 100px;
  }

  ${media.tablet} {
    margin-right: 0;
    margin-bottom: 20px;
  }
`

export const Information = styled.dd`
  font-size: 16px;
  line-height: 160%;
  white-space: pre-wrap;

  ${media.tablet} {
    font-size: 14px;
    line-height: 22px;
  }
`
