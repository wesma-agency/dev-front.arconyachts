import React from 'react'
import styled from 'styled-components'
import { color, trans, media } from 'utils/vars'
import Link from 'ui/Link'
import { useTranslation } from 'utils/useTranslation'

const StyledWrapper = styled.div`
  // max-width: 400px;
  width: 100%;
  position: relative;
  min-height: 460px;
  background: ${color.accent};
  transition: ${trans.base} background;
  padding: 248px 44px 52px;

  ${({ isService }) => (isService ? 'padding: 248px 44px 22px;' : '')}

  box-sizing: border-box;
  path {
    transition: ${trans.base} fill;
    fill: ${color.accent};
  }

  &:hover {
    background: ${color.featureBackground};
    path {
      fill: ${color.featureBackground};
    }
  }

  ${media.tablet} {
    min-height: 338px;
    max-width: 293px;
    display: flex;
    flex-direction: column;
    ${({ isMain }) => (isMain ? 'min-height: 338px; width: 98%;' : '')};

    ${({ isService }) =>
      isService ? 'padding: 35px 44px 12px;' : 'padding: 35px 30px 12px 30px;'};

    &:hover {
      background: ${color.accent};
      path {
        fill: ${color.accent};
      }
    }
  }

  ${media.phablet} {
    ${({ isService }) => (isService ? 'padding: 35px 5% 12px ;' : '')};
  }

  ${media.mobile} {
    padding: 35px 30px 12px 30px;
    max-width: 263px;
  }
`
const StyledNumberWrapper = styled.div`
  position: absolute;
  top: 36px;
  ${({ isService }) => (isService ? 'left: 45px;' : 'left: 24px;')}

  font-size: 80px;
  color: ${color.accentHover};

  ${media.fullhd} {
    font-size: 70px;
  }
  ${media.notebook} {
    font-size: 60px;
  }
  ${media.tablet} {
    position: static;
    font-size: 50px;

    & span {
      ${({ isMain }) =>
        isMain
          ? `font-weight: normal;
            font-size: 50px;
            line-height: 50px;`
          : ''}
    }
  }
`
const StyledTitleWrapper = styled.div`
  ${media.tablet} {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`
const StyledTitle = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 150%;

  ${({ isService }) => (isService ? 'margin-bottom: 21px;' : '')}

  ${media.tablet} {
    margin-top: 58px;
    line-height: 24px;
    ${({ isMain }) => (isMain ? `margin-top: 54px;` : '')}
    ${({ isService }) => (isService ? 'font-size: 13px;' : 'font-size: 16px;')}
  }

  ${media.phablet} {
    font-size: 16px;
  }
`
const StyledText = styled.div`
  font-size: 16px;
  color: ${color.featureText};
  max-width: 260px;
  margin-top: 15px;
  line-height: 150%;

  ${({ isService }) =>
    isService ? 'margin-bottom: 30px;' : 'margin-bottom: 30px;'}

  ${media.tablet} {
    margin-top: 10px;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 50px;
  }

  ${media.tablet} {
    ${({ isService }) => (isService ? 'max-width: 100%' : '')}
  }
`

const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-top: 32px;
  cursor: pointer;
  color: ${color.accentLink};
  flex-grow: 2;
  text-transform: initial;

  position: absolute;

  ${({ isService }) =>
    isService
      ? 'bottom: 48px; font-weight: 500; font-size: 16px;line-height: 20px;'
      : 'bottom: 29px;'}

  ${media.tablet} {
    ${({ isService }) => (isService ? 'bottom: 29px; font-size: 14px;`' : '')}
  }
`

const StyledLinkWrapper = styled.div`
  ${({ isService }) => (isService ? 'min-height: 50px;' : '')}
`

const ServiceCard = ({
  title,
  text,
  link,
  children,
  isMain = false,
  isService = false,
  linkText,
  ...props
}) => {
  return (
    <StyledWrapper {...props} isMain={isMain} isService={isService}>
      <StyledNumberWrapper isMain={isMain} isService={isService}>
        {children}
      </StyledNumberWrapper>
      <StyledTitleWrapper>
        <StyledTitle isMain={isMain} isService={isService}>
          {title}
        </StyledTitle>
        <StyledText isService={isService}>{text}</StyledText>
        <StyledLinkWrapper isService={isService}>
          <StyledLink
            prefetch={false}
            href={link}
            isService={isService}
            passHref
          >
            {linkText}
          </StyledLink>
        </StyledLinkWrapper>
      </StyledTitleWrapper>
    </StyledWrapper>
  )
}

export default ServiceCard
