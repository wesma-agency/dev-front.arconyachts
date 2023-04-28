import DownloadIcon from 'assets/icons/download.svg'
import Accordion from 'components/Accordion'
import { StyledTitle } from 'components/Accordion/Accordion.styled'
import { rgba } from 'polished'
import styled from 'styled-components'
import { color, media, trans } from 'utils/vars'
import wrapComponent from 'utils/wrapComponent'
import { typography } from 'utils/mixins'
export const StyledWrapper = styled.div`
  margin-top: 115px;
  margin-bottom: 60px;

  ${media.fullhd} {
    margin-top: 90px;
  }
  ${media.notebook} {
    margin-top: 48px;
  }
  ${media.tablet} {
    margin-top: 17px;
  }
`

export const StyledAccordion = styled(Accordion)`
  ${media.tablet} {
    &:first-child {
      border-top: none;
    }
    ${StyledTitle} {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;
    }
  }

  &:not(:first-child) {
    border-top: none;
  }
`

export const StyledSpecificationsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: content-box;
  margin-top: 30px;

  &:last-child {
    padding-bottom: 65px;
    ${media.fullhd} {
      padding-bottom: 45px;
    }

    ${media.notebook} {
      padding-bottom: 25px;
    }

    ${media.tablet} {
      padding-bottom: 15px;
    }
  }

  ${media.notebook} {
    flex-direction: column;
  }
  ${media.tablet} {
    margin-top: 12px;
  }
`

export const StyledSpecificationWrapper = styled.div`
  width: 47.2%;
  ${media.notebook} {
    width: 100%;
  }
`

export const StyledSpecification = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  ${media.tablet} {
    margin-bottom: 30px;
  }
`
export const StyledSpecificationTitle = styled.div`
  font-size: 16px;
  color: ${rgba(color.black, 0.7)};

  letter-spacing: -0.02em;

  ${media.fullhd} {
    font-size: 14px;
  }
  ${media.tablet} {
    letter-spacing: normal;
  }
`
export const StyledSpecificationData = styled.div`
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  letter-spacing: -0.02em;
  ${media.fullhd} {
    font-size: 14px;
  }
  ${media.tablet} {
    letter-spacing: normal;
  }
  ${media.mobile} {
    white-space: normal;
    text-align: right;
  }
`
export const StyledSpecificationDivider = styled.div`
  margin: 0 20px;
  flex-shrink: 2;
  flex-grow: 2;
  opacity: 0.1;
  min-width: 30px;
  height: 1px;
  background: ${color.black};

  ${media.mobile} {
    margin: 0 15px;
    min-width: initial;
  }
`

export const Download = wrapComponent(DownloadIcon)

export const StyledDownload = styled.a`
  cursor: pointer;
  display: flex;
  font-weight: 500;
  font-size: 16px;
  color: ${color.black};
  align-items: center;
  transition: ${trans.base} color;
  & path {
    transition: ${trans.base} stroke;
  }

  &:hover {
    color: ${color.accentHover};
    & path {
      stroke: ${color.accentHover};
    }
  }
  & > div {
    margin-right: 12px;
    ${media.tablet} {
      margin-right: 9px;
    }
  }

  ${media.tablet} {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.05em;
  }
`
export const StyledDownloadWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  justify-content: flex-end;

  ${media.tablet} {
    justify-content: flex-start;
    margin-top: 45px;
    margin-bottom: 45px;
  }
`

export const AccordionText = styled.div`
  margin-top: 16px;
  ${typography.p}

  &:last-child {
    padding-bottom: 65px;
    ${media.fullhd} {
      padding-bottom: 45px;
    }

    ${media.notebook} {
      padding-bottom: 25px;
    }

    ${media.tablet} {
      padding-bottom: 15px;
    }
  }

  h3 {
    ${typography.h3}
    margin-bottom: 20px;

    &:not(:first-child) {
      margin-top: 20px;
    }
  }
  li {
    padding-left: 30px;
    margin-top: 8px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0.25em;
      left: 0;
      width: 10px;
      height: 17px;
      background-image: url('/img/icons/arrow-right-gray.svg');
    }
  }
  img {
    width: 100%;
  }

  h2 {
    ${typography.h2};
    line-height: 0.85em;
    margin-bottom: 30px;

    &:not(:first-child) {
      margin-top: 26px;
    }
  }
  strong,
  b {
    ${typography.p};
    font-weight: 700;
  }
  i,
  em {
    ${typography.p};
    font-style: italic;
  }
`
