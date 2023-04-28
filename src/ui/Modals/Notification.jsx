import CookieIcon from 'assets/icons/cookie.svg'
import MailIcon from 'assets/icons/mail-complete.svg'
import MailErrorIcon from 'assets/icons/mail-error.svg'
import Portal from 'components/Portal'
import React from 'react'
import styled, { css } from 'styled-components'
import { boxShadow, animations } from 'utils/mixins'
import { media, color, trans } from 'utils/vars'
import wrapComponent from 'utils/wrapComponent'
import XMark from 'ui/XMark'
import Button from 'ui/Buttons/Button'
import Link from 'ui/Link'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useTranslation } from 'utils/useTranslation'

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 380px;
  min-height: 458px;
  background: ${color.white};
  ${boxShadow.filterDrop};
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 32px;
  z-index: 1;
  animation: ${animations.fadeIn} ${trans.base} forwards;
  ${media.tablet} {
    padding: 24px;
    min-height: 390px;
    max-width: 350px;
    right: 12px;
    bottom: 12px;
  }

  ${media.mobileLarge} {
    max-width: calc(100vw - 24px);
  }
  ${({ isCookie }) =>
    !isCookie &&
    css`
      min-height: 360px;
      padding: 32px 32px 60px;

      ${media.tablet} {
        padding: 24px 24px 36px;
      }
    `}
`

const CookieIconBlock = wrapComponent(CookieIcon)
const StyledCookieIcon = styled(CookieIconBlock)`
  position: absolute;
  top: 40px;
  left: 40px;

  ${media.tablet} {
    left: 32px;
  }
`
const MailIconBlock = wrapComponent(MailIcon)
const StyledMailIcon = styled(MailIconBlock)`
  position: absolute;
  top: 40px;
  left: 40px;

  ${media.tablet} {
    left: 32px;
  }
`
const MailErrorIconBlock = wrapComponent(MailErrorIcon)
const StyledMailErrorIcon = styled(MailErrorIconBlock)`
  position: absolute;
  top: 40px;
  left: 40px;

  ${media.tablet} {
    left: 32px;
  }
`
const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  margin-top: 174px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  ${media.tablet} {
    font-size: 16px;
    margin-top: 142px;
  }
`
const StyledXMark = styled(XMark)`
  width: 48px;
  height: 48px;
  position: absolute;
  opacity: 0.4;
  top: 32px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: ${trans.base} opacity;
  &:hover {
    opacity: 1;
  }

  ${media.tablet} {
    height: 32px;
    width: 32px;
    top: 29px;
    right: 24px;
  }
`
const StyledButton = styled(Button)`
  font-size: 16px;
  letter-spacing: 0.02em;
  margin-top: 40px;
  width: 100%;

  ${media.tablet} {
    padding: 17px;
  }
`
const StyledLink = styled(Link)``
const StyledText = styled.div`
  max-width: 300px;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${color.featureText};
  margin-top: 15px;
  ${media.mobile} {
    font-size: 14px;
  }

  ${StyledLink} {
    cursor: pointer;
    text-transform: none;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: ${color.sublink};
    transition: ${trans.base} color;
    display: inline;
    text-decoration: underline;
    ${media.mobile} {
      font-size: 14px;
    }
    &:hover {
      color: ${color.accentHover};
    }
  }
`

const Notification = ({
  closeModal = () => {},
  type,
  onButtonClick = () => {},
}) => {
  const { tablet } = useBreakpoint()
  const translation = useTranslation('notificationStatic')

  const Content = {
    cookie: {
      data: translation.cookie,
      icon: <StyledCookieIcon />,
    },
    email: {
      data: translation.email,
      icon: <StyledMailIcon />,
    },
    error: {
      data: translation.error,
      icon: <StyledMailErrorIcon />,
    },
    warning: {
      data: translation.warning,
      icon: <StyledMailIcon />,
    },
    formError: {
      data: translation.formError,
      icon: <StyledMailErrorIcon />,
    },
  }

  const content = Content[type]
  const isCookie = type === 'cookie'

  return (
    <Portal>
      <StyledWrapper isCookie={isCookie}>
        {content.icon}
        <StyledXMark width={tablet ? 24 : 32} onClick={closeModal} />
        <StyledTitle>{content.data.title}</StyledTitle>
        <StyledText>
          {content.data.text}
          {isCookie && (
            <StyledLink href="/policy" passHref prefetch={false}>
              {content.data.link}
            </StyledLink>
          )}
          .
        </StyledText>
        {isCookie && (
          <StyledButton onClick={onButtonClick}>
            {content.data.button}
          </StyledButton>
        )}
      </StyledWrapper>
    </Portal>
  )
}

export default Notification
