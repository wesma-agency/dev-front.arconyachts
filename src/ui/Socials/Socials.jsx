import FacebookIcon from 'assets/icons/facebook.svg'
import InstagramIcon from 'assets/icons/instagram.svg'
import React from 'react'
import styled from 'styled-components'
import Social from './Social'

const StyledWrapper = styled.div``

const Socials = ({ className, ...props }) => (
  <StyledWrapper className={className} {...props}>
    <Social
      href="https://www.instagram.com/arconyachtsmonaco/"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
    >
      <InstagramIcon />
    </Social>
    <Social
      href="https://www.facebook.com/arconyachts/"
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
    >
      <FacebookIcon />
    </Social>
  </StyledWrapper>
)

export default Socials
