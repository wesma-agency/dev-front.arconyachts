import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import Container from 'ui/Container'
import { media } from 'utils/vars'
import { fullWidth, fonts } from 'utils/mixins'

const StyledWrapper = styled(Container)`
  width: 100%;
`

const StyledTitle = styled.h2`
  ${fonts.SangBleuSunrise}
  line-height: 150%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  font-size: 80px;
  line-height: 130%;

  margin-top: 208px;

  ${media.fullhd} {
    margin-top: 150px;
    font-size: 65px;
  }
  ${media.notebook} {
    margin-top: 120px;
    font-size: 50px;
  }
  ${media.tablet} {
    margin-top: 75px;
    font-size: 36px;
    text-align: center;
  }
  ${media.phablet} {
    font-size: 26px;
  }
`

const StyledContentWrapper = styled.div`
  ${fullWidth};
  width: 71vw;
  margin-left: 22vw;

  ${media.fullhd} {
    width: 70vw;
  }
  ${media.tablet} {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    transform: translate(0, 0);
    ${({ paddingNone }) =>
      paddingNone &&
      css`
        margin-left: 0;
        margin-right: 0;
      `};
  }
`

const CharterSection = forwardRef(
  ({ title, children, paddingNone, ...props }, ref) => {
    return (
      <section>
        <StyledTitle {...props} ref={ref}>
          {title}
        </StyledTitle>
        <StyledContentWrapper paddingNone={paddingNone && 'none'}>
          {children}
        </StyledContentWrapper>
      </section>
    )
  }
)

export default CharterSection
