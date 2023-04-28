import Image from 'next/image'
import styled from 'styled-components'
import Link from 'ui/Link'
import Socials from 'ui/Socials/Socials'
import { color, media, trans } from 'utils/vars'

export const StyledImageWrapper = styled.div`
  flex: 1;
  position: relative;
  height: 100%;
  max-height: 55px;
`
export const StyledImage = styled(Image)`
  position: relative;
`
export const StyledSocials = styled(Socials)`
  display: flex;
  align-items: center;
`
export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  ${media.notebook} {
    align-items: center;
    margin-top: 50px;
  }
  ${media.phablet} {
    font-size: 10px;
    color: ${color.footerLinksMob};
    align-items: flex-start;
  }
`
export const StyledLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: 600px;
  margin-left: auto;
  margin-top: 4px;
  position: relative;
  top: -6px;
  ${media.notebook} {
    min-height: 48px;
    width: 100%;
    max-width: none;
    margin-top: 20px;
    margin-left: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  ${media.phablet} {
    margin-top: 10px;
  }
`
export const StyledAssociationsLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 26px;
  margin-right: auto;
  margin-bottom: 10px;
  ${media.notebook} {
    margin-left: auto;
    margin-right: 0;
    margin-bottom: 0;
  }
  ${media.phablet} {
    margin-right: 50px;
  }
`
export const StyledAssociationLink = styled(Link)`
  color: ${color.footerLinks};
  text-transform: none;
  max-width: 250px;
  line-height: 15px;
  display: flex;
  align-items: flex-start;
  transition: ${trans.base} color;
  :not(:last-of-type) {
    margin-bottom: 10px;
  }
  &:hover {
    color: ${color.white};
  }
  img {
    filter: opacity(0.4);
  }
  ${media.phablet} {
    max-width: 70px;
    :not(:last-of-type) {
      margin-right: 32px;
      margin-bottom: 0;
    }
  }
`
export const StyledText = styled.span`
  margin-left: 14px;
  flex: 2;

  ${media.tablet} {
    display: none;
  }
`
export const StyledLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${media.notebook} {
    width: auto;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  ${media.phablet} {
    justify-content: flex-start;
    margin-top: 40px;
    margin-left: -6px;
  }
`
export const StyledLink = styled(Link)`
  color: ${color.footerLinks};
  text-transform: none;
  margin-left: 8px;
  line-height: 20px;
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 1px;
    background: transparent;
    position: absolute;
    bottom: 4px;
    left: 0;
    transition: ${trans.base} background;
    opacity: 0.7;
  }
  &:hover {
    color: ${color.white};
    &:before {
      background: ${color.white};
    }
  }
  ${media.phablet} {
    margin-left: 6px;
    color: ${color.footerLinksMob};
    font-size: 10px;
  }
`
export const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const StyledDivider = styled.div`
  margin-left: 12px;

  ${media.phablet} {
    margin-left: 6px;
  }
`
export const StyledCopyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  ${media.notebook} {
    margin-top: 12px;
    &:before {
      content: '©';
      margin-right: 4px;
    }
  }
  ${media.phablet} {
    margin-top: 20px;
    margin-left: 0;
  }
`
