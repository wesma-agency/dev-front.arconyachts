import { PATH } from 'config/path'
import React, { useEffect, useState } from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useTranslation } from 'utils/useTranslation'
import {
  Agreement,
  Form,
  FormWrapper,
  ImageWrapper,
  StyledAgreementLink,
  StyledButton,
  StyledHeader,
  StyledImage,
  StyledInput,
  StyledParagraph,
  Wrapper,
} from './Invitation.styled'
import { useMutation } from '@apollo/client'
import { CREATE_FORM } from 'graphql/mutations/CreateForm'
import { FormType } from 'utils/formType'
import Notification from 'ui/Modals/Notification'

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const validate = (values, withTextArea, feedbackFormStatic) => {
  const errors = {}
  if (values.name.trim().length < 1) {
    errors.name = feedbackFormStatic.errors.nameRequired
  }
  if (!validateEmail(values.email.trim())) {
    errors.email = feedbackFormStatic.errors.emailCorrect
  }
  if (values.email.trim().length < 1) {
    errors.email = feedbackFormStatic.errors.emailRequired
  }
  let phone = values.phone.replace(/[\+\s\_\(\)]+/g, '')
  if (phone.length < 11) {
    errors.phone = feedbackFormStatic.errors.phoneCorrect
  }
  if (phone.length < 1) {
    errors.phone = feedbackFormStatic.errors.phoneRequired
  }
  if (withTextArea && values.message.trim().length < 1) {
    errors.message = feedbackFormStatic.errors.messageRequired
  }
  return errors
}

const initFormValues = { name: '', phone: '', email: '' }

const Invitation = () => {
  const newsStatic = useTranslation('newsStatic')
  const feedbackFormStatic = useTranslation('feedbackFormStatic')
  const {
    title,
    text,
    image,
    buttonText,
    size: { width, height },
  } = newsStatic.invitation
  const [values, setValues] = useState(initFormValues)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showErrorNotification, setShowErrorNotification] = useState(false)
  const { tablet } = useBreakpoint()
  const [createForm] = useMutation(CREATE_FORM)

  const openErrorNotification = () => {
    setShowErrorNotification(true)
  }

  const onChange = (e) => {
    setErrors({ ...errors, [e.target.name]: '' })
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = async (values) => {
    const validateResult = validate(values, false, feedbackFormStatic)

    if (Object.keys(validateResult).length > 0) {
      setErrors(validateResult)
    } else {
      try {
        const result = await createForm({
          variables: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            type: FormType.eventInvitation,
          },
        }).then( ()=> {
          setIsSubmitted(true)
        }).catch( () => {
          setIsSubmitted(false)
        })
        // result.data.CreateForm ? setIsSubmitted(true) : setIsSubmitted(false)
      } catch (err) {
        setIsSubmitted(false)
        openErrorNotification()
      } finally {
        setErrors({})
      }
    }
  }
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onSubmit(values)
    }
  }
  useEffect(() => {
    if (isSubmitted) {
    } else {
      setValues(initFormValues)
    }
  }, [isSubmitted])

  return (
    <Wrapper>
      {!tablet && (
        <ImageWrapper>
          <StyledImage
            cover={'cover'}
            src={image}
            srcset={image}
            alt={title}
            width={width}
            height={height}
          />
        </ImageWrapper>
      )}
      <FormWrapper>
        <StyledHeader>
          {isSubmitted ? feedbackFormStatic.default.submitted : title}
        </StyledHeader>
        <StyledParagraph>
          {isSubmitted ? feedbackFormStatic.default.submittedText : text}
        </StyledParagraph>
        {!isSubmitted && (
          <Form>
            <StyledInput
              placeholder="Имя"
              name="name"
              error={errors.name}
              onChange={onChange}
              onKeyDown={onEnter}
              aria-label="Имя"
              largePadding
            />
            <StyledInput
              placeholder="Телефон"
              name="phone"
              error={errors.phone}
              onChange={onChange}
              onKeyDown={onEnter}
              aria-label="Телефон"
              mask={'+9 (999) 999 99 99'}
              largePadding
            />
            <StyledInput
              placeholder="Почта"
              name="email"
              error={errors.email}
              onChange={onChange}
              onKeyDown={onEnter}
              aria-label="Почта"
              largePadding
            />
          </Form>
        )}
        {isSubmitted ? (
          <StyledButton onClick={() => setIsSubmitted(false)}>
            Отправить еще раз
          </StyledButton>
        ) : (
          <StyledButton onClick={() => onSubmit(values)}>
            {tablet ? `Подписаться` : buttonText}
          </StyledButton>
        )}
        {tablet && (
          <Agreement>
            Нажимая кнопку Вы соглашаетесь на{' '}
            <StyledAgreementLink href={PATH.POLICY} passHref prefetch={false}>
              обработку персональных данных
            </StyledAgreementLink>
            .
          </Agreement>
        )}
      </FormWrapper>
      {showErrorNotification && (
        <Notification
          closeModal={() => setShowErrorNotification(false)}
          type="formError"
        />
      )}
    </Wrapper>
  )
}

export default Invitation
