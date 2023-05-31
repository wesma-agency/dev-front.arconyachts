import React from 'react'
import styled, { css } from 'styled-components'
import { getNoun } from 'utils/getNoun'
import { fonts, typography } from 'utils/mixins'
import { color, font, media } from 'utils/vars'
import Image from 'next/image'

const StyledWrapper = styled.div`
  max-width: 488px;
  cursor: pointer;
  width: 100%;
  height: 550px;
  position: relative;

  & > div:first-child {
    z-index: -1;
    position: absolute !important;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  padding: 383px 70px 0 30px;
  box-sizing: border-box;
  ${media.tablet} {
    max-width: 293px;
    height: 353px;
    padding: 182px 40px 0 20px;
  }

  ${media.mobile} {
    max-width: 275px;
    padding-top: 165px;
  }
  z-index: -2;
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

const AltServiceCard = ({
  backgroundImg = '/img/charger/journey/slide1.png',
  title = 'Разработка',
  text = 'Разработку проекта стальной, алюминиевой или стеклопластиковой яхты совместно со специалистами верфи',
  ...props
}) => {
  return (
    <StyledWrapper {...props}>
      <Image
        layout="responsive"
        objectFit="cover"
        width={488}
        height={550}
        src={backgroundImg}
        alt={title}
        loader={({src}) => src} // для загрузки без кэша (30.05.2023)
      />
      <StyledOverlay />
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
    </StyledWrapper>
  )
}

export default AltServiceCard
