import styled, { css } from 'styled-components'
import React, { useState } from 'react'
import DetailGrid from 'components/DetailGrid'
import { fonts, typography } from 'utils/mixins'
import { color, media, trans } from 'utils/vars'
import CatalogList from 'components/CatalogPage/CatalogList'
import { ButtonDark } from 'ui/Buttons/ButtonDark'
export const StyledBlock = styled.div``

export const StyledTitle = styled.h2`
  ${typography.h1}
  font-size: 80px;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 27px;

  ${media.tablet} {
    margin-bottom: 31px;

    font-weight: normal;
    font-size: 26px;
    line-height: 34px;
  }
`

export const StyledToggleBlock = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 2px solid ${color.planBorder};
`

export const StyledToggle = styled.div`
  cursor: pointer;
  padding: 41px 40px 41px 26px;
  position: relative;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.02em;
  transition: ${trans.base} opacity;
  opacity: 0.9;
  &:nth-child(2) {
    padding-left: 54px;
    padding-right: 54px;
    letter-spacing: normal;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    height: 2px;
    width: 0;
    transition: ${trans.base} opacity, ${trans.base} width;
    background-color: ${color.borderActive};
    transform: translate(-50%);
    opacity: 0.6;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      &:before {
        opacity: 1;
        width: 100%;
      }
    `}

  ${media.tablet} {
    letter-spacing: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    padding: 2px;
    padding-right: 4px;
    padding-bottom: 17px;
    &:nth-child(2) {
      padding-left: 21px;
      padding-right: 21px;
      letter-spacing: normal;
    }
    &:hover {
      &:before {
        width: 0;
      }
      ${({ isActive }) =>
        isActive &&
        css`
          &:before {
            opacity: 1;
            width: 100%;
          }
        `}
    }
  }
`

export const StyledDescription = styled.div`
  width: 77%;
  margin-top: 60px;
  margin-bottom: 86px;
  ${typography.p};

  ${media.notebook} {
    margin-top: 48px;
    margin-bottom: 60px;
  }
  ${media.tablet} {
    width: 100%;
    margin-top: 33px;
    margin-bottom: 39px;
  }
`

export const StyledToggleButton = styled(ButtonDark)`
  ${media.tablet} {
    display: flex;
    justify-content: center;
    color: ${color.black};
    background: ${color.white};
    margin-top: 18px;
    padding: 18px 48px;
  }

  ${media.phablet} {
    width: 100%;
  }
`
