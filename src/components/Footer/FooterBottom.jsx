import React from 'react'
import {
  StyledCopyright,
  StyledDivider,
  StyledLink,
  StyledLinks,
  StyledAssociationsLinks,
  StyledAssociationLink,
  StyledText,
  StyledLinksWrapper,
  StyledLinkWrapper,
  StyledSocials,
  StyledWrapper,
  StyledImageWrapper,
  StyledImage,
} from './FooterBottom.styled'
// import Image from 'ui/Image'
import Image from 'next/image'
import { useTranslation } from 'utils/useTranslation'

const FooterBottom = () => {
  const footerStatic = useTranslation('footerStatic')
  return (
    <StyledWrapper>
      <StyledSocials />
      <StyledAssociationsLinks>
        {footerStatic.associations.map((association) => (
          <StyledAssociationLink
            key={association.name}
            href={association.href}
            passHref
          >
            <StyledImageWrapper>
              <StyledImage
                src={association.image.src}
                alt="Arcon's associations"
                loading={'lazy'}
                layout={'fill'}
                objectPosition={'top right'}
                objectFit={'contain'}
              />
            </StyledImageWrapper>
            <StyledText>{association.title}</StyledText>
          </StyledAssociationLink>
        ))}
      </StyledAssociationsLinks>
      <StyledLinksWrapper>
        <StyledLinks>
          {footerStatic.bottomLinks.map((link, i, links) => (
            <StyledLinkWrapper key={i}>
              <StyledLink href={link.href} passHref>
                {link.title}
              </StyledLink>
              {i < links.length - 1 && <StyledDivider>|</StyledDivider>}
            </StyledLinkWrapper>
          ))}
        </StyledLinks>
        <StyledCopyright>{new Date().getFullYear()} Arcon</StyledCopyright>
      </StyledLinksWrapper>
    </StyledWrapper>
  )
}

export default FooterBottom
