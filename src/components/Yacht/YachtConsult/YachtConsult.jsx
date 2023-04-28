import React from 'react'
import FeedbackModal from 'ui/Modals/FeedbackModal'
import { useModal } from 'utils/useModal'
import {
  StyledButton,
  StyledButtonWrapper,
  StyledConsultWrapper,
  StyledImageWrapper,
  StyledImageWrapperMob,
  StyledName,
  StyledNameWrapper,
  StyledPersonWrapper,
  StyledPosition,
  StyledTagline,
  StyledWrapper,
} from './YachtConsult.styled'
import Image from 'next/image'
import { getSizes } from 'utils/vars'
import { useBreakpoint } from 'utils/useBreakpoint'
import { FormType } from 'utils/formType'

const YachtConsult = ({
  name,
  position,
  image,
  tagline,
  title,
  subtitle,
  submitText,
  isPrint = false,
  ...props
}) => {
  const { openModal, closeModal, modalRef, isOpened } = useModal()
  const { tablet } = useBreakpoint()
  return (
    <StyledWrapper {...props}>
      <StyledImageWrapper>
        <Image
          src={image}
          sizes={getSizes('500px')}
          layout="fill"
          objectFit={'cover'}
          loading={isPrint ? 'eager' : 'lazy'}
          alt={name}
        />
      </StyledImageWrapper>
      <StyledConsultWrapper>
        <StyledPersonWrapper>
          <StyledImageWrapperMob>
            {tablet && (
              <Image src={image} width={111} height={300} alt={name} />
            )}
          </StyledImageWrapperMob>
          <StyledNameWrapper>
            <StyledName>{name}</StyledName>
            <StyledPosition>{position}</StyledPosition>
          </StyledNameWrapper>
        </StyledPersonWrapper>
        <StyledTagline>{`« ${tagline} »`}</StyledTagline>
        {!isPrint && (
          <StyledButtonWrapper>
            <StyledButton onClick={openModal}>{submitText}</StyledButton>
          </StyledButtonWrapper>
        )}
      </StyledConsultWrapper>

      {isOpened && (
        <FeedbackModal
          title={title}
          subtitle={subtitle}
          submitText={submitText}
          ref={modalRef}
          closeModal={closeModal}
          formType={FormType.needConsultation}
        />
      )}
    </StyledWrapper>
  )
}

export default YachtConsult
