import React from 'react'
import styled, { css } from 'styled-components'
import { getNoun } from 'utils/getNoun'
import { color, media } from 'utils/vars'

const StyledWrapper = styled.div`
  max-width: 380px;
  cursor: pointer;
  width: 100%;
  height: 458px;
  position: relative;
  ${({ backgroundImg }) =>
    backgroundImg &&
    css`
      background: url(${backgroundImg}) center center/cover;
    `};
  padding: 317px 70px 0 30px;
  box-sizing: border-box;
  ${media.tablet} {
    max-width: 293px;
    height: 353px;
    padding: 233px 40px 0 20px;
  }
  z-index: -2;
`

const StyledCount = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  background: ${color.white};
  border-radius: 100px;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.02em;
  padding: 7px 20px;

  ${media.tablet} {
    top: 20px;
    left: 20px;
  }
`

const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${color.white};

  ${media.tablet} {
    font-size: 16px;
  }
`

const StyledText = styled.div`
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  margin-top: 15px;
  color: ${color.white};
  ${media.tablet} {
    font-size: 14px;
    margin-top: 10px;
  }
`

const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 55%;
  width: 100%;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  z-index: -1;
`

const JourneyCard = ({
  count = 24,
  backgroundImg = '/img/charger/journey/slide1.png',
  title = 'ибица',
  text = 'Потрясающие виды, прозрачная вода и отличные места для дайвинга.',
  ...props
}) => {
  return (
    <StyledWrapper backgroundImg={backgroundImg} {...props}>
      <StyledOverlay />
      <StyledCount>
        {count} {getNoun(count, 'яхта', 'яхты', 'яхт')}
      </StyledCount>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
    </StyledWrapper>
  )
}

export default JourneyCard
