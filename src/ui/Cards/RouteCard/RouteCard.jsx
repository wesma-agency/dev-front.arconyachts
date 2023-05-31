import React from 'react'
import styled, { css } from 'styled-components'
import { color, media, trans, getSizes } from 'utils/vars'
import Link from 'next/link'
import { PATH } from 'config/path'
import { useRouter } from 'next/router'
import { useTranslation } from 'utils/useTranslation'
import Image from 'next/image'

const StyledDate = styled.div`
  padding: 8px 16px;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;
  background: ${color.white};
  border-radius: 100px;
  position: absolute;
  top: 32px;
  left: 32px;
  z-index: 3;

  ${media.tablet} {
    top: 20px;
    left: 20px;
  }
`
const StyledOverlayBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  width: 100%;
  height: 60%;
  z-index: 1;
  transition: ${trans.base} height, ${trans.base} background;
`
const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${color.white};
  max-width: 400px;
  width: 100%;

  ${media.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
`
const StyledText = styled.div`
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  margin-top: 20px;
  color: ${color.white};

  ${media.tablet} {
    margin-top: 10px;
    font-size: 14px;
    line-height: 22px;
  }
`
const StyledLink = styled.div`
  position: absolute;
  left: 32px;
  bottom: 40px;
  opacity: 0;
  transition: ${trans.base} opacity, ${trans.base} color;
  pointer-events: none;
  z-index: 3;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${color.accentLink};

  &:hover {
    color: ${color.accentHover};
  }

  ${media.tablet} {
    font-size: 14px;
    left: 20px;
    bottom: 20px;
  }
`

const StyledInfo = styled.div`
  z-index: 3;
  position: absolute;
  top: 289px;
  left: 0;
  transition: ${trans.base} top;
  padding: 0 32px;

  ${media.fullhd} {
    top: 187px;
  }

  ${media.tablet} {
    top: 187px;
    padding: 0 20px;
  }
`

const StyledOverlay = styled.div`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: ${trans.base} background;
  z-index: 2;
`

const StyledWrapper = styled.a`
  display: block;
  width: 100%;
  max-width: 490px;
  height: 457px;
  position: relative;

  &:hover {
    ${StyledInfo} {
      top: 60px;
    }

    ${StyledLink} {
      opacity: 1;
      pointer-events: all;
    }

    ${StyledOverlay} {
      background: ${color.placeholder};
    }
  }

  ${media.fullhd} {
    max-width: 370px;
    height: 390px;
  }
  ${media.tablet} {
    max-width: 293px;
    height: 353px;
  }

  ${media.mobile} {
    max-width: 268px;
  }
`

const RouteCard = ({
  title,
  preview_text,
  // link = '#',
  onClick = () => {},
  preview,
  href = PATH.NEW,
  slug,
  linkTitle = useTranslation('detailYachtStatic').more,
  ...props
}) => {
  return (
    <Link prefetch={false}  href={`${href}${slug}`} passHref>
      <StyledWrapper {...props}>
        <Image
          src={preview.fullpath}
          sizes={getSizes('490px')}
          layout="responsive"
          width={490}
          height={457}
          loader={({src}) => src} // для загрузки без кэша (30.05.2023)
        />
        <StyledInfo>
          <StyledTitle>{title}</StyledTitle>
          <StyledText>{preview_text}</StyledText>
        </StyledInfo>
        <StyledLink>{linkTitle}</StyledLink>
        <StyledOverlayBottom />
        <StyledOverlay />
      </StyledWrapper>
    </Link>
  )
}

export default RouteCard
