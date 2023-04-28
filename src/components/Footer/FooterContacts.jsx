import React, { useState } from 'react'
import {
  StyledAddress,
  StyledContact,
  StyledContactLink,
  StyledEmailInput,
  StyledEmailTitle,
  StyledSubmitArrow,
  StyledSubtitle,
  StyledWrapper,
} from './FooterContacts.styled'
import { useTranslation } from 'utils/useTranslation'
import { CREATE_SUBSCRIPTION } from 'graphql/mutations/CreateSubscription'
import { useMutation } from '@apollo/client'
import Notification from 'ui/Modals/Notification'

const contacts = [
  {
    city: 'Монако',
    phone: '+377.97.98.3210',
    address: '27-29, Avenue des Papalins, MC 98000',
  },
  {
    city: 'Москва',
    phone: '+7 (495) 937-90-00',
    address: 'Ленинградское шоссе 39/7, Москва, 125212',
  },
  {
    city: 'Киев',
    phone: '+38 09 77 42 44 44',
    address: 'ул. Раисы Окипной 18, Киев, 02002',
  },
]

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const FooterContacts = () => {
  const contacts = useTranslation('contactsStatic').addresses
  const footerStatic = useTranslation('footerStatic').subscribe
  const [email, setEmail] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [showErrorNotification, setShowErrorNotification] = useState(false)
  const [showWarningNotification, setShowWarningNotification] = useState(false)
  const openNotification = () => {
    setShowNotification(true)
  }
  const openErrorNotification = () => {
    setShowErrorNotification(true)
  }
  const openWarningNotification = () => {
    setShowWarningNotification(true)
  }

  const [createSubscription] = useMutation(CREATE_SUBSCRIPTION)

  const subscribe = async () => {
    //subscribe to newsletter
    if (validateEmail(email)) {
      try {
        await createSubscription({ variables: { email: email } })
      } catch (err) {
        if (err.message === 'email already exists') {
          openWarningNotification()
          setEmail('')
          return
        } else {
          openErrorNotification()
          return
        }
      }
      openNotification()
      setEmail('')
    }
  }
  return (
    <StyledWrapper>
      <StyledEmailTitle>{footerStatic.title}</StyledEmailTitle>
      <StyledEmailInput
        placeholder="E-mail"
        type="email"
        aria-label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!validateEmail(email) && email && footerStatic.error}
      >
        <StyledSubmitArrow aria-label="Submit" onClick={subscribe} />
      </StyledEmailInput>
      {contacts.map((contact, i) => (
        <StyledContact key={i}>
          <StyledSubtitle>{contact.city}</StyledSubtitle>
          <StyledContactLink
            href={`tel:${contact.phoneNumber.replace(/[\.\(\)\s\-]+/g, '')}`}
          >
            {contact.phoneNumber}
          </StyledContactLink>
          <StyledAddress>{contact.address}</StyledAddress>
        </StyledContact>
      ))}
      <StyledContact>
        <StyledSubtitle>{footerStatic.mail}</StyledSubtitle>
        <StyledContactLink href="mailto:info@arconyachts.com">
          info@arconyachts.com
        </StyledContactLink>
      </StyledContact>
      {showNotification && (
        <Notification
          closeModal={() => setShowNotification(false)}
          type="email"
        />
      )}
      {showErrorNotification && (
        <Notification
          closeModal={() => setShowErrorNotification(false)}
          type="error"
        />
      )}
      {showWarningNotification && (
        <Notification
          closeModal={() => setShowWarningNotification(false)}
          type="warning"
        />
      )}
    </StyledWrapper>
  )
}

export default FooterContacts
