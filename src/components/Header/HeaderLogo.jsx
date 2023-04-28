import { useRouter } from 'next/router'
import React from 'react'
// import Image from 'ui/Image'
import {
  StyledLang,
  StyledLangs,
  StyledLogo,
  StyledLogoMob,
  StyledLogoWrapper,
  StyledLangsMob,
} from './HeaderLogo.styled'
import Link from 'next/link'
import Image from 'next/image'

const HeaderLogo = ({ isActive }) => {
  const { asPath, push, locale } = useRouter()
  const onLogoClick = () => push('/')
  return (
    <>
      <StyledLogoMob
        isActive={isActive}
        index={asPath === '/'}
        onClick={onLogoClick}
        isLink
        passHref
      />
      <StyledLangsMob>
        <Link prefetch={false} href={asPath} locale={'ru'} passHref>
          <StyledLang isActive={locale === 'ru'}>RU</StyledLang>
        </Link>
        /
        <Link prefetch={false} href={asPath} locale={'en'} passHref>
          <StyledLang isActive={locale === 'en'}>ENG</StyledLang>
        </Link>
      </StyledLangsMob>
      <StyledLogoWrapper>
        <StyledLogo prefetch={false} href="/" index={asPath === '/'} passHref>
          <Image
            src={'/img/header/logo.png'}
            srcSet={'/img/header/logo.png 1x, /img/header/logo@2x.png 2x'}
            width={134}
            height={30}
          />
        </StyledLogo>
        <StyledLangs>
          <Link prefetch={false} href={asPath} locale={'ru'} passHref>
            <StyledLang isActive={locale === 'ru'}>RU</StyledLang>
          </Link>
          /
          <Link prefetch={false} href={asPath} locale={'en'} passHref>
            <StyledLang isActive={locale === 'en'}>ENG</StyledLang>
          </Link>
        </StyledLangs>
      </StyledLogoWrapper>
    </>
  )
}

export default HeaderLogo
