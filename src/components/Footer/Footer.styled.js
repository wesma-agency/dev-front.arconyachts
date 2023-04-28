import styled from 'styled-components'
import Logo from 'ui/Logo'
import { color, media } from 'utils/vars'

export const StyledFooter = styled.footer`
  width: 100%;
  min-height: 208px;
  background-color: ${color.backgroundDark};
  color: ${color.footerLinks};
  padding: 135px 100px 65px;
  font-size: 12px;

  ${media.fullhd} {
    padding: 85px 50px 65px;
  }

  ${media.notebook} {
    padding: 85px 40px 35px;
  }

  ${media.phablet} {
    padding: 50px 20px 30px;
  }
`

export const StyledContacts = styled.div`
  display: flex;
  justify-content: flex-end;

  ${media.mobileLarge} {
    flex-direction: column;
  }
`

export const StyledContactsWrapper = styled.div`
  display: none;

  ${media.notebook} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 121px;
  }
`

export const StyledLogo = styled(Logo)`
  align-items: flex-start;
`

export const StyledContactLink = styled.a`
  font-size: 14px;
  color: ${color.white};
  margin-left: 20px;
  display: flex;
  justify-content: flex-end;
  letter-spacing: 0.05em;

  ${media.mobileLarge} {
    &:not(:first-child) {
      margin-top: 18px;
    }
  }
`
