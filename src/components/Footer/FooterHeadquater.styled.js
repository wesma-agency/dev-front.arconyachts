import styled from 'styled-components'
import { fonts } from 'utils/mixins'
import { color, media } from 'utils/vars'
import Image from 'next/image'

export const StyledBackground = styled(Image)`
  z-index: 1;
`
export const StyledBlock = styled.section`
  background-color: ${color.headquatersBackground};
  min-height: 450px;
  padding: 138px 169px 160px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  ${media.fullhd} {
    padding-right: 20px;
  }
  ${media.notebook} {
    background-color: ${color.headquatersBackground};
    min-height: 520px;
    padding: 292px 41px 60px;
    justify-content: center;
  }
  ${media.phablet} {
    background-position-x: -200px;
  }
  ${media.mobileLarge} {
    background-position-x: -280px;
  }
`

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 430px;
  z-index: 2;
  ${media.notebook} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const StyledTitle = styled.div`
  color: ${color.footerLinks};
  font-size: 10px;
  line-height: 14px;
  text-transform: uppercase;
  margin-bottom: 8px;
`
export const StyledCity = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
  line-height: 150%;
  margin-bottom: 24px;
  color: ${color.white};
  ${fonts.SangBleuSunrise}
`

export const StyledAddress = styled.div`
  ${fonts.SangBleuSunrise}
  color: ${color.contactsTitle};
  font-weight: 300;
  font-size: 20px;
  line-height: 36px;
  font-style: italic;

  ${media.notebook} {
    text-align: center;
  }
`
