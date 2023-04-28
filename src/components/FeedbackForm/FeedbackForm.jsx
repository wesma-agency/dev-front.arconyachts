import { feedbackFormStatic } from 'config/static/feedbackForm'
import React, { forwardRef, useEffect, useState } from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import {
  StyledAgreement,
  StyledAgreementLink,
  StyledButton,
  StyledClose,
  StyledForm,
  StyledInput,
  StyledSubtitle,
  StyledSubtitleLink,
  StyledTextArea,
  StyledTitle,
  StyledWrapper,
} from './FeedbackForm.styled'
import { useTranslation } from 'utils/useTranslation'
import { PATH } from 'config/path'
import { useMutation } from '@apollo/client'
import { CREATE_FORM } from 'graphql/mutations/CreateForm'
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
  const testPhone = /^\+?[0-9\s\-\(\)]{1,}$/.test(phone)
  if (!testPhone) {
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

const initFormValues = { name: '', phone: '', email: '', message: '' }

const FeedbackForm = forwardRef(
  (
    {
      title = useTranslation('feedbackFormStatic').default.title,
      mobileTitle = false,
      subtitle = useTranslation('feedbackFormStatic').default.subtitle,
      subtitleLink = false,
      submitText = useTranslation('feedbackFormStatic').default.buttonText,
      showInputs = true,
      showAgreement = true,
      className,
      withTextArea = false,
      wideText = false,
      closeButton = false,
      onSubmit: submit = () => {},
      isManagement = false,
      isService = false,
      formType = '',
    },
    ref
  ) => {
    const feedbackFormStatic = useTranslation('feedbackFormStatic')
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
      if (!showInputs) {
        submit()
        return
      }

      const validateResult = validate(values, withTextArea, feedbackFormStatic)

      if (Object.keys(validateResult).length > 0) {
        setErrors(validateResult)
      } else {
        try {
          const variables = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            type: formType,
          }
          const result = await createForm({
            variables,
          })
          result.data.CreateForm ? setIsSubmitted(true) : setIsSubmitted(false)
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
    const subtitleText =
      subtitleLink && subtitle.split(feedbackFormStatic.default.specialLink)
    return (
      <StyledWrapper
        withTextArea={withTextArea && 'withTextArea'}
        className={className}
        ref={ref}
      >
        {closeButton && (
          <StyledClose onClick={closeButton.onClick} width={32} />
        )}
        <StyledTitle>
          {isSubmitted
            ? feedbackFormStatic.default.submitted
            : tablet
            ? mobileTitle
              ? mobileTitle
              : title
            : title}
        </StyledTitle>
        <StyledSubtitle
          withTextArea={withTextArea && 'withTextArea'}
          wideText={wideText && 'wideText'}
          isManagement={isManagement && 'isManagement'}
        >
          {isSubmitted ? (
            feedbackFormStatic.default.submittedText
          ) : subtitleLink ? (
            <>
              {subtitleText[0]}
              <StyledSubtitleLink href={subtitleLink}>
                специальные условия
              </StyledSubtitleLink>
              {subtitleText[1]}
            </>
          ) : (
            subtitle
          )}
        </StyledSubtitle>
        {showInputs && !isSubmitted && (
          <StyledForm>
            <StyledInput
              placeholder={feedbackFormStatic.placeholder.name}
              name="name"
              error={errors.name}
              onChange={onChange}
              onKeyDown={onEnter}
              aria-label={feedbackFormStatic.placeholder.name}
            />
            <StyledInput
              placeholder={feedbackFormStatic.placeholder.phone}
              name="phone"
              error={errors.phone}
              onChange={onChange}
              onKeyDown={onEnter}
              aria-label={feedbackFormStatic.placeholder.phone}
              type="tel"
              // mask={'+9 (999) 999 99 99'}
            />
            <StyledInput
              placeholder={feedbackFormStatic.placeholder.email}
              name="email"
              error={errors.email}
              onChange={onChange}
              onKeyDown={onEnter}
              aria-label={feedbackFormStatic.placeholder.email}
            />
          </StyledForm>
        )}
        {withTextArea && !isSubmitted && (
          <StyledTextArea
            placeholder={feedbackFormStatic.placeholder.message}
            name="message"
            error={errors.message}
            onChange={onChange}
            onKeyDown={onEnter}
            aria-label={feedbackFormStatic.placeholder.message}
          />
        )}
        {isSubmitted ? (
          <StyledButton
            onClick={() => setIsSubmitted(false)}
            withTextArea={withTextArea && 'withTextArea'}
          >
            {feedbackFormStatic.default.again}
          </StyledButton>
        ) : (
          <StyledButton
            onClick={() => onSubmit(values)}
            withTextArea={withTextArea && 'withTextArea'}
            isService={isService}
          >
            {submitText}
          </StyledButton>
        )}
        {showAgreement && (
          <StyledAgreement>
            {feedbackFormStatic.default.agreement[0]}
            {!tablet && `«${submitText}»`}{' '}
            {feedbackFormStatic.default.agreement[1]}{' '}
            <StyledAgreementLink passHref href={`${PATH.POLICY}`}>
              {feedbackFormStatic.default.agreement[2]}
            </StyledAgreementLink>
            .
          </StyledAgreement>
        )}
        {showErrorNotification && (
          <Notification
            closeModal={() => setShowErrorNotification(false)}
            type="formError"
          />
        )}
      </StyledWrapper>
    )
  }
)

export default FeedbackForm
