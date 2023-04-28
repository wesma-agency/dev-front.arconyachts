import styled from 'styled-components'
import { media } from 'utils/vars'

export const SliderWrapper = styled.div`
  width: 100%;
  margin-top: 120px;
  margin-bottom: 180px;

  ${media.fullhd} {
    margin-top: 100px;
  }
  ${media.notebook} {
    margin-top: 80px;
    margin-bottom: 120px;
  }
`
