import React from 'react'
import styled from 'styled-components'
import { color, trans, media } from 'utils/vars'

const StyledWrapper = styled.div`
  max-width: 380px;
  width: 100%;
  cursor: pointer;
  position: relative;
  height: 460px;
  background: ${color.accent};
  transition: ${trans.base} background;
  padding: 280px 30px 70px;
  box-sizing: border-box;
  path {
    transition: ${trans.base} fill;
    fill: ${color.accent};
  }

  ${({ isBuilding }) =>
    isBuilding
      ? `max-width: 401px; height: auto; padding: 253px 2% 70px 4%;`
      : ``};

  &:hover {
    background: ${color.featureBackground};
    path {
      fill: ${color.featureBackground};
    }
  }

  ${media.tablet} {
    padding: 20px 40px;
    height: auto;
    &:hover {
      background: ${color.accent};
      path {
        fill: ${color.accent};
      }
    }

    ${({ isBuilding }) =>
      isBuilding
        ? ` padding: 30px 11%;
          max-width: 296px;`
        : ``};
  }
`
const StyledIconWrapper = styled.div`
  position: absolute;
  top: 36px;
  left: 24px;

  & img {
    width: auto !important;
    height: auto !important;
    min-height: auto !important;
  }
  max-width: 80px;
  max-height: 80px;

  ${({ isBuilding }) =>
    isBuilding
      ? `  top: 43px;
          left: 43px;`
      : ``};

  ${media.tablet} {
    position: static;
    max-height: 60px;
    max-width: 60px;
  }
  ${media.phablet} {
    max-height: 50px;
    max-width: 50px;
  }
  ${media.mobileLarge} {
    max-height: 40px;
    max-width: 40px;
    & > img {
      max-height: 100%;
    }
  }
`
const StyledTitleWrapper = styled.div``
const StyledTitle = styled.h3`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 0.05em;

  ${media.tablet} {
    letter-spacing: normal;
    margin-top: 26px;
    font-size: 16px;
    line-height: 24px;

    ${({ isBuilding }) => (isBuilding ? `margin-top: 92px;` : ``)};
  }
`
const StyledText = styled.div`
  font-size: 16px;
  color: ${color.featureText};
  max-width: 260px;
  margin-top: 23px;
  letter-spacing: -0.02em;
  line-height: 150%;

  ${({ isBuilding }) =>
    isBuilding
      ? `font-weight: normal;
          font-size: 16px;
          line-height: 160%;
          letter-spacing: normal;
          max-width: 100%;
          margin-top: 28px;`
      : ``}
  ${media.tablet} {
    letter-spacing: normal;
    margin-top: 10px;
    font-size: 14px;
    line-height: 22px;
  }
`

const FeatureCard = ({
  title,
  text,
  children,
  isBuilding = false,
  ...props
}) => {
  return (
    <StyledWrapper {...props} isBuilding={isBuilding}>
      <StyledIconWrapper isBuilding={isBuilding}>{children}</StyledIconWrapper>
      <StyledTitleWrapper>
        <StyledTitle isBuilding={isBuilding}>{title}</StyledTitle>
        <StyledText isBuilding={isBuilding}>{text}</StyledText>
      </StyledTitleWrapper>
    </StyledWrapper>
  )
}

export default FeatureCard
