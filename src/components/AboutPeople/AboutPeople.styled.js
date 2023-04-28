import styled, { css } from 'styled-components'
import { fonts, typography } from 'utils/mixins'
import { media, size } from 'utils/vars'

export const Section = styled.section`
  ${size.ultraWide};
  align-self: center;
  padding-top: 140px;

  ${media.fullhd} {
    padding-top: 100px;
  }

  ${media.tablet} {
    padding-top: 80px;
  }
`

export const Title = styled.h2`
  ${fonts.SangBleuSunrise};
  margin-bottom: 40px;
  font-size: 60px;
  line-height: 88px;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  ${media.notebook} {
    margin-bottom: 20px;
    ${typography.h2}
  }

  ${media.phablet} {
    line-height: 34px;
  }
`

export const Description = styled.p`
  ${typography.p};
  width: 70%;
  margin-bottom: 60px;

  ${media.notebook} {
    width: 80%;
  }

  ${media.tablet} {
    width: 100%;
    margin-bottom: 40px;
  }
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  ${media.phablet} {
    justify-content: center;
  }
`

export const ListItem = styled.li`
  margin-bottom: 40px;
  width: 30%;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:not(:last-of-type) {
    margin-right: 2.4vw;
  }

  &:nth-child(3n + 3) {
    margin-right: 0;
  }

  ${({ largeIndent }) =>
    largeIndent &&
    css`
      margin-bottom: 60px;
    `}

  ${media.ultraWide} {
    &:not(:last-of-type) {
      margin-right: 4.2vw;
    }

    &:nth-child(3n + 3) {
      margin-right: 0;
    }
  }

  ${media.fullhd} {
    width: 45%;

    &:nth-child(2n + 2) {
      margin-right: 0;
    }

    &:nth-child(3n + 3) {
      margin-right: 4.2vw;
    }
  }

  ${media.tablet} {
    margin-bottom: 40px;
  }

  ${media.phablet} {
    width: 80%;

    &:not(:last-of-type) {
      margin-right: 0;
    }
  }

  ${media.mobileLarge} {
    width: 100%;
  }
`
