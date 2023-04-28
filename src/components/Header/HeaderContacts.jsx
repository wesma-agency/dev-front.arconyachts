import React from 'react'
import {
  StyledContact,
  StyledContacts,
  StyledContactsTitle,
  StyledContactWrapper,
} from './HeaderContacts.styled'

const HeaderContacts = () => (
  <StyledContacts>
    <StyledContactWrapper>
      <StyledContactsTitle>Наш телефон</StyledContactsTitle>
      <StyledContact href="tel:+74959379000">+7 (495) 937-90-00</StyledContact>
    </StyledContactWrapper>
    <StyledContactWrapper>
      <StyledContactsTitle>Наша почта</StyledContactsTitle>
      <StyledContact href="mailto:info@arconyachts.com">
        info@arconyachts.com
      </StyledContact>
    </StyledContactWrapper>
  </StyledContacts>
)

export default HeaderContacts
