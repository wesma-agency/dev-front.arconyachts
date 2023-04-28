import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useTranslation } from 'utils/useTranslation'
import { StyledLink, StyledLinks } from './HeaderLinks.styled'

const HeaderLinks = ({ setHasActive }) => {
  const { asPath } = useRouter()
  const [isActive, setIsActive] = useState(false)
  const { tablet: isTablet } = useBreakpoint()
  const { links, mobileLinks } = useTranslation('headerStatic')
  useEffect(() => {
    if (isActive) {
      setHasActive()
    }
  }, [isActive])

  const getLinks = (links) =>
    links.map((link, i) => {
      let active = false
      if (asPath.split('?')[0] === link.href) {
        active = true
      }
      active && !isActive && setIsActive(true)
      return (
        <StyledLink
          key={i}
          prefetch={false}
          href={link.href}
          passHref
          isActive={active}
        >
          {link.title}
        </StyledLink>
      )
    })
  return (
    <StyledLinks>
      {isTablet ? getLinks(mobileLinks) : getLinks(links)}
    </StyledLinks>
  )
}

export default HeaderLinks
