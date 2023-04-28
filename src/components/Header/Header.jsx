import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useBodyScrollLock } from 'utils/useBodyScrollLock'
import {
  StyledBurger,
  StyledFavorites,
  StyledFavoritesMob,
  StyledHeader,
  StyledMenu,
  StyledMenuWrapper,
  StyledPhone,
  StyledPlaceholder,
  StyledSocials,
} from './Header.styled'
import HeaderContacts from './HeaderContacts'
import HeaderLinks from './HeaderLinks'
import HeaderLogo from './HeaderLogo'
import Link from 'next/link'
import { PATH } from 'config/path'
import { useTranslation } from 'utils/useTranslation'

const Header = ({ isMain = false }) => {
  const { push } = useRouter()
  const [hasActive, setHasActive] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  const [isTransparent, setIsTransparent] = useState(isMain)
  const menu = useRef(null)

  useBodyScrollLock(menuActive)
  useEffect(() => {
    const onScroll = () => {
      const sliderHeight = 487
      const headerHeight = 60
      if (window.pageYOffset > sliderHeight - headerHeight) {
        setIsTransparent(false)
      } else {
        setIsTransparent(true)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [isMain])

  const headerStatic = useTranslation('headerStatic')

  return (
    <StyledHeader isActive={!hasActive}>
      <HeaderLogo isActive={menuActive}/>

      <Link prefetch={false}  href={PATH.FAVORITES} passHref>
        <StyledFavoritesMob
          isLink
          isActive={menuActive}
          aria-label={headerStatic.favorites}
        />
      </Link>
      <StyledMenuWrapper ref={menu}>
        <StyledPlaceholder isActive={menuActive} />
        <StyledMenu isActive={menuActive}>
          <HeaderLinks setHasActive={() => setHasActive(true)} />
          <HeaderContacts />
          <StyledSocials />
        </StyledMenu>
        <StyledPhone
          href={`tel:${headerStatic.linkPhone}`}
          isActive={menuActive}
        >
          {headerStatic.phone}
        </StyledPhone>

        <Link prefetch={false}  href={PATH.FAVORITES} passHref>
          <StyledFavorites isLink aria-label={headerStatic.favorites} />
        </Link>
      </StyledMenuWrapper>
      <StyledBurger
        isActive={menuActive}
        onClick={() => setMenuActive(!menuActive)}
      />
    </StyledHeader>
  )
}

export default Header
