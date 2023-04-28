import styled, { css } from 'styled-components'
import Button from 'ui/Buttons/Button'
import ShipyardCard from 'ui/Cards/ShipyardCard'
import { fullWidth, gap } from 'utils/mixins'
import { color, media, trans } from 'utils/vars'

export const LettersList = styled.ul`
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
  align-items: flex-start;

  ${media.tablet} {
    overflow-x: auto;
    display: block;
    white-space: nowrap;
    margin-top: 28px;
    padding-left: 5vw;
    padding-right: 5vw;
    ${fullWidth}
  }
`

export const LetterButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: ${trans.base} color, ${trans.base} opacity;
  color: ${color.textActive};

  &:hover {
    color: ${color.accent};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${color.black};
      &:hover {
        color: ${color.black};
      }
    `}
`

export const LetterItem = styled.li`
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 14px;
  ${gap(23.4)}

  ${media.tablet} {
    display: inline-block;
    &:not(:last-child) {
      ${gap(26)}
    }

    font-size: 14px;
    line-height: 22px;
  }
`

export const LettersReset = styled.button`
  opacity: 0.5;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: ${trans.base} opacity;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    cursor: auto;

    &:hover {
      opacity: 0.3;
    }
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 46px;
  margin-bottom: 180px;

  ${media.tablet} {
    margin-top: 0;
    margin-bottom: 116px;
  }

  ${media.phablet} {
    justify-content: center;
  }
`

export const StyledCard = styled(ShipyardCard)`
  width: 25%;
  min-height: 220px;

  &:not(:nth-child(4n)) {
    border-right: 1px solid ${color.borderDivider};
  }

  ${({ withBorder }) =>
    withBorder &&
    css`
      border-bottom: 1px solid ${color.borderDivider};
    `}

  &:nth-last-child(-n + 4) {
    border-bottom: none;
  }
  &:last-child {
    border-right: none;
  }

  ${media.notebook} {
    width: 50%;
    height: 200px;
    min-height: auto;
    border-bottom: 1px solid ${color.borderDivider};

    &:nth-child(2n - 1) {
      border-right: 1px solid ${color.borderDivider};
    }
    &:nth-child(2n) {
      border-right: none;
    }
    &:nth-last-child(-n + 4) {
      border-bottom: 1px solid ${color.borderDivider};
    }
    &:nth-last-child(-n + 2) {
      border-bottom: none;
    }
  }

  ${media.phablet} {
    width: 100%;

    &:not(:nth-child(4n)) {
      border-right: none;
    }
    &:nth-last-child(-n + 2) {
      border-bottom: 1px solid ${color.borderDivider};
    }
    &:last-child {
      border-bottom: none;
    }
  }
`
export const StyledButton = styled(Button)`
  ${media.tablet} {
    max-width: 380px;
    width: 100%;
    padding: 19px 52px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`

export const NotFound = styled.div`
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.02em;
  margin-top: 36px;
`
