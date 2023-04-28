import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'utils/useTranslation'
import {
  AccordionsWrapper,
  StyledAccordion,
  StyledText,
  StyledTitle,
  StyledWrapper,
} from './CharterFaq.styled'

const CharterFaq = ({ terms }) => {
  const charterFaqStatic = useTranslation('charterFaqStatic')
  const daily = useRouter().query.charter === 'day'

  const getFaqs = (faqs) =>
    faqs.map((faq, i) => (
      <StyledAccordion key={i} title={faq.name}>
        <StyledText dangerouslySetInnerHTML={{ __html: faq.description }} />
      </StyledAccordion>
    ))
  return (
    <StyledWrapper>
      <StyledTitle>
        {charterFaqStatic.titlePre} {daily && charterFaqStatic.daily}{' '}
        {charterFaqStatic.titleAfter}
      </StyledTitle>
      <AccordionsWrapper>{getFaqs(terms)}</AccordionsWrapper>
    </StyledWrapper>
  )
}

export default CharterFaq
