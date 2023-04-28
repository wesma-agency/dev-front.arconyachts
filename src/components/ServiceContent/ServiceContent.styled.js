import styled from 'styled-components'
import ServiceInfo from 'components/ServiceInfo'
import Image from 'ui/Image'
import { fullWidth, typography, aspectRatio } from 'utils/mixins'
import { media, color } from 'utils/vars'

export const StyledServiceInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledHeader = styled.div`
  ${media.tablet} {
    margin-top: 50px;
  }
`

export const StyledServiceInfo = styled(ServiceInfo)`
  width: 65%;

  ${media.tablet} {
    width: 100%;
  }
`

export const StyledImageWrapper = styled.div`
  ${fullWidth};
  ${aspectRatio(1440, 580)};
  margin-bottom: 100px;

  ${media.tablet} {
    ${aspectRatio(375, 440)};
    margin-bottom: 40px;
  }
`

export const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export const StyledLabel = styled.b`
  ${typography.label};
  opacity: 0.4;
  ${media.mobile} {
    margin-bottom: 24px;
    display: block;
  }
`

export const StyledTitle = styled.h1`
  ${typography.h1}
  font-size: 80px;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 85px;

  ${media.tablet} {
    margin-bottom: 35px;
  }

  ${media.mobile} {
    font-size: 20px;
    line-height: 22px;
  }
`

export const StyledText = styled.span``
export const StyledPretext = styled.span`
  color: ${color.black};
  margin-right: 0.3em;
`
