import React from 'react'
import {
  StyledAddress,
  StyledBackground,
  StyledBlock,
  StyledCity,
  StyledTitle,
  StyledWrapper,
} from './FooterHeadquater.styled'
import { useTranslation } from 'utils/useTranslation'

const FooterHeadquarter = () => {
  const footerStatic = useTranslation('footerStatic')
  return (
    <StyledBlock>
      <StyledBackground
        src={'/img/headquater/background.png'}
        layout="fill"
        objectFit="contain"
        objectPosition={'left top'}
        loading={'lazy'}
      />
      <StyledWrapper>
        <StyledTitle>{footerStatic.headquarter.title}</StyledTitle>
        <StyledCity>{footerStatic.headquarter.city}</StyledCity>
        <StyledAddress>{footerStatic.headquarter.address}</StyledAddress>
      </StyledWrapper>
    </StyledBlock>
  )
}

export default FooterHeadquarter
