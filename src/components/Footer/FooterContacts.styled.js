import SubmitArrowIcon from 'assets/icons/submit-arrow.svg'
import styled, { css } from 'styled-components'
import Input from 'ui/Input'
import { color, media, trans } from 'utils/vars'

export const StyledWrapper = styled.div`
  margin-top: 40px;
`

export const StyledEmailInput = styled(Input)`
  border-bottom: 0.5px solid ${color.white};
  width: 240px;
  & input {
    color: ${color.white};
    width: 85%;
  }
  & label {
    color: ${color.contactsTitle};
  }

  ${media.notebook} {
    width: 100%;
    max-width: 370px;
  }
`
const StyledButton = styled.button`
  border: none;
  background: none;
  transition: ${trans.base} opacity;

  &:hover {
    opacity: 0.6;
  }
`

const SubmitArrow = ({ ...props }) => (
  <StyledButton {...props}>
    <SubmitArrowIcon />
  </StyledButton>
)
export const StyledSubmitArrow = styled(SubmitArrow)`
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 12px;
  padding: 5px 0 5px 5px;
  box-sizing: content-box;
`

const titleStyles = css`
  font-weight: 500;
  font-size: 16px;
  color: ${color.footerTitle};
  ${media.phablet} {
    font-weight: 400;
  }
`

export const StyledEmailTitle = styled.div`
  ${titleStyles}
  margin-bottom: 15px;
  line-height: 129.5%;
  max-width: 275px;

  ${media.notebook} {
    letter-spacing: 0.05em;
    max-width: none;
  }
`
export const StyledContact = styled.div`
  margin-top: 54px;

  ${media.notebook} {
    margin-top: 46px;
  }
`
export const StyledSubtitle = styled.div`
  color: ${color.footerLinksMob};

  ${media.notebook} {
    font-size: 15px;
    font-weight: 500;
    color: ${color.footerLinks};
  }
`
export const StyledAddress = styled.div`
  color: ${color.white};
  margin-top: 8px;
  ${media.notebook} {
    font-size: 14px;
  }
`
export const StyledContactLink = styled.a`
  ${titleStyles}
  margin-top: 8px;

  ${media.notebook} {
    letter-spacing: 0.05em;
    margin-top: 14px;
  }
`
