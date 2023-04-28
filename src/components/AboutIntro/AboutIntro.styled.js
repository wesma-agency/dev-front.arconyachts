import styled from 'styled-components'
import { typography } from 'utils/mixins'
import { color, media } from 'utils/vars'
import { ButtonDark } from 'ui/Buttons/ButtonDark'
import Slider from '../Slider'
// import Image from 'ui/Image'
import Image from 'next/image'

export const Section = styled.section`
  margin-top: 8px;

  ${media.tablet} {
    margin-top: 46px;
  }
`

export const Note = styled.span`
  display: inline-block;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.4;

  ${media.tablet} {
    line-height: 12px;
    letter-spacing: normal;
  }
`

export const Title = styled.h1`
  ${typography.h1};
  margin-bottom: 41px;
  line-height: 120%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  white-space: pre-wrap;

  ${media.tablet} {
    letter-spacing: normal;
  }
`

export const FactsList = styled.ul`
  display: ${({ isAbove }) => (isAbove ? 'flex' : 'none')};
  flex-wrap: wrap;
  margin-bottom: 40px;

  ${media.phablet} {
    display: ${({ isAbove }) => (!isAbove ? 'flex' : 'none')};
    justify-content: flex-start;
    margin-top: 40px;
    margin-bottom: 22px;
  }
`

export const FactItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;

  &:not(:last-child) {
    margin-right: 76px;
  }

  ${media.phablet} {
    width: 50%;

    &:not(:last-child) {
      margin-right: 0;
    }
  }
`

export const Fact = styled.b`
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;

  ${media.tablet} {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: normal;
  }
`

export const Clarification = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.4;

  ${media.tablet} {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: normal;
  }
`

export const SliderWrapper = styled.div`
  width: 100vw;
  margin-left: -7vw;
  margin-bottom: 60px;

  & .swiper-container {
    height: calc(100vw / 2.48);
    max-height: 620px;
    min-height: 440px;
  }

  & .swiper-scrollbar {
    color: ${color.scrollBar};
    border-radius: 0;
    width: 90%;
    left: 50%;
    transform: translate(-50%);
    height: 2px;
    opacity: 0;
    padding: 16px 0;
    box-sizing: content-box;
    background: none;

    &:before {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      top: calc(50% - 1px);
      background: ${color.borderSocials};
    }
    ${media.tablet} {
      opacity: 1;
    }
  }
  & .swiper-scrollbar > .swiper-scrollbar-drag {
    background: ${color.accent};
    border-radius: 0;
  }

  ${media.fullhd} {
    margin-left: -6vw;
  }

  ${media.tablet} {
    margin-left: -5vw;
    margin-bottom: 20px;
  }
`

export const StyledSlider = styled(Slider)``

export const Slide = styled.div`
  display: inline-block;
  width: auto;
  span,
  img {
    width: auto;
    height: 100%;
  }
`

export const StyledImage = styled(Image)`
  // display: inline-block;
  // height: 100%;

  // & span,
  // & img {
  //   height: 100%;
  //   object-fit: cover;
  // }

  ${media.mobileLarge} {
    // position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 35px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    }
  }
`

export const Arrows = styled.div`
  display: flex;

  & > button {
    &:last-of-type {
      margin-left: 10px;
    }
  }

  ${media.notebook} {
    display: none;
  }
`

export const Description = styled.div`
  ${typography.p};
  width: 65%;
  margin: -58px auto 40px;

  ${media.notebook} {
    margin-top: 0;
    width: 80%;
  }

  ${media.tablet} {
    width: 100%;
    text-align: center;
    margin-bottom: 0;
  }
`

export const Text = styled.div`
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.02em;
  text-align: left;
  color: ${color.black};

  &:not(:first-child) {
    margin-top: 30px;
  }

  ${media.tablet} {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: normal;

    &:not(:first-child) {
      margin-top: 22px;
    }
  }
`

export const StyledButton = styled(ButtonDark)`
  margin-top: 40px;
  line-height: 20px;
  letter-spacing: 0.01em;

  ${media.mobileLarge} {
    max-width: none;
    width: 100%;
    padding-top: 18px;
    padding-bottom: 18px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  ${media.mobile} {
    padding: 18px 47px;
  }
`
