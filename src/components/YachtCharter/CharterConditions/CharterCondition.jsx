import { StyledAccordion } from 'components/CharterPage/CharterFaq/CharterFaq.styled'
import React from 'react'
import { useTranslation } from 'utils/useTranslation'
import CharterSection from '../CharterSection'
import {
  StyledAccordions,
  StyledAccordionText,
  StyledBillName,
  StyledBills,
  StyledBillValue,
  StyledBillWrapper,
  StyledParagraph,
  StyledText,
} from './CharterConditions.styled'

const CharterConditions = ({ conditionsRef, rent_terms }) => {
  const detailYachtStatic = useTranslation('detailYachtStatic')

  const getFaqs = (faqs) =>
    faqs.map((faq, i) => {
      return (
        <StyledAccordion key={i} title={faq.name}>
          <StyledAccordionText
            dangerouslySetInnerHTML={{ __html: faq.description }}
          />
        </StyledAccordion>
      )
    })

  return (
    <CharterSection
      title={detailYachtStatic.conditions.title}
      ref={conditionsRef}
    >
      <StyledText>
        {detailYachtStatic.conditions.description.map((par, i) => (
          <StyledParagraph key={i}>{par}</StyledParagraph>
        ))}
      </StyledText>
      <StyledBills>
        <StyledBillWrapper>
          <StyledBillName>
            {detailYachtStatic.conditions.price.title}
          </StyledBillName>
          <StyledBillValue>
            {detailYachtStatic.conditions.price.value}
          </StyledBillValue>
        </StyledBillWrapper>
        <StyledBillWrapper>
          <StyledBillName>
            {detailYachtStatic.conditions.vat.title}
          </StyledBillName>
          <StyledBillValue>
            {detailYachtStatic.conditions.vat.value}
          </StyledBillValue>
        </StyledBillWrapper>
        <StyledBillWrapper>
          <StyledBillName>
            {detailYachtStatic.conditions.apa.title}
          </StyledBillName>
          <StyledBillValue>
            {detailYachtStatic.conditions.apa.value}
          </StyledBillValue>
        </StyledBillWrapper>
      </StyledBills>
      <StyledAccordions>{getFaqs(rent_terms)}</StyledAccordions>
    </CharterSection>
  )
}

export default CharterConditions
