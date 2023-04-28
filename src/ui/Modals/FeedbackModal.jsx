import FeedbackForm from 'components/FeedbackForm'
import { StyledButton } from 'components/FeedbackForm/FeedbackForm.styled'
import Portal from 'components/Portal'
import React, { forwardRef, useEffect } from 'react'
import styled from 'styled-components'
import { animations, boxShadow, container } from 'utils/mixins'
import { color, media, size, trans } from 'utils/vars'

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  background: ${color.footerLinks};
  z-index: 10;
  width: 100%;
  height: 100%;
  animation: ${animations.fadeIn} ${trans.base} forwards;
  display: flex;
  justify-content: center;
  align-items: center;

  ${container}

  ${media.tablet} {
    padding: 0;
  }
`
const StyledFeedbackForm = styled(FeedbackForm)`
  background: ${color.white};
  border-radius: 16px;
  position: relative;
  ${boxShadow.filterDrop}
  transform: none;
  height: 100%;
  min-height: auto;
  max-width: 1242px;
  max-height: min(776px, 95vh);
  display: block;
  padding: 120px 0 20px;
  overflow: auto;

  ${media.notebook} {
    max-width: none;
    padding: 60px;
  }

  ${media.tablet} {
    max-height: none;
    ${container}
  }

  ${media.phablet} {
    overflow: auto;
    border-radius: 0;
  }

  & > ${StyledButton} {
    ${media.tablet} {
      margin-top: 40px;
    }
  }

  @media screen and (max-height: 640px) and (${size.phablet}) {
    display: block;
    padding-top: 50px;
  }
`

const FeedbackModal = forwardRef(({ closeModal, ...props }, ref) => {
  useEffect(() => {
    const onEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('keydown', onEscape)
    }
  }, [])
  return (
    <Portal>
      <StyledWrapper>
        <StyledFeedbackForm
          ref={ref}
          {...props}
          closeButton={{ onClick: closeModal }}
        />
      </StyledWrapper>
    </Portal>
  )
})

export default FeedbackModal
