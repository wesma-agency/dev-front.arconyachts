import styled from 'styled-components'
import { color, media } from 'utils/vars'

export const StyledContacts = styled.div`
  display: none;
  ${media.phablet} {
    display: block;
    width: 100%;
    padding: 0 0 50px;
  }
`

export const StyledContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const StyledContactsTitle = styled.div`
  color: ${color.footerLinks};
  font-size: 14px;
  line-height: 22px;
`
export const StyledContact = styled.a`
  display: block;
  color: ${color.white};
  padding: 10px 0;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05em;

  ${media.mobile} {
    font-size: 14px;
  }
`
