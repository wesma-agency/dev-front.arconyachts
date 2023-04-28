import styleData from 'assets/map/style.json'
import GoogleMapReact from 'google-map-react'
import React from 'react'
import styled from 'styled-components'
import Button from 'ui/Buttons/Button'
import FeedbackModal from 'ui/Modals/FeedbackModal'
import { aspectRatio, fullWidth } from 'utils/mixins'
import { useModal } from 'utils/useModal'
import { useTranslation } from 'utils/useTranslation'
import { color, media } from 'utils/vars'
import CharterSection from '../CharterSection'
import { FormType } from 'utils/formType'

const StyledWrapper = styled(CharterSection)`
  margin-top: 156px;

  ${media.fullhd} {
    margin-top: 120px;
  }
  ${media.notebook} {
    margin-top: 100px;
  }
  ${media.tablet} {
    margin-top: 83px;
  }
`

const StyledText = styled.div`
  margin-top: 62px;
  max-width: 703px;
  font-size: 16px;
  line-height: 160%;

  ${media.fullhd} {
    margin-top: 44px;
  }
  ${media.notebook} {
    margin-top: 32px;
  }

  ${media.tablet} {
    font-size: 14px;
    line-height: 22px;
    margin-top: 23px;
  }
`

const StyledImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const StyledButton = styled(Button)`
  margin-top: 59px;

  ${media.fullhd} {
    margin-top: 44px;
  }

  ${media.notebook} {
    margin-top: 32px;
  }

  ${media.tablet} {
    margin-top: 20px;
    padding: 19px 52px;
  }

  ${media.mobileLarge} {
    width: 100%;
  }
`

const Marker = styled.div`
  width: 24px;
  background: linear-gradient(147.62deg, #282827 25.7%, #000000 97.4%);
  opacity: 0.7;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
  &:before {
    content: '';
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background: ${color.white};
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 130px;
    height: 130px;
    background: #455652;
    opacity: 0.2;
    z-index: -1;
  }
`
const MapWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  ${aspectRatio(1025, 520)}

  ${media.tablet} {
    ${fullWidth}
    ${aspectRatio(375, 260)}
  }
`

const key = process.env.GOOGLE_MAPS_API_KEY

const CharterLocation = ({ location_text, locations }) => {
  const { openModal, closeModal, modalRef, isOpened } = useModal()
  const detailYachtStatic = useTranslation('detailYachtStatic')

  const data = locations[0]
  return (
    <StyledWrapper
      title={detailYachtStatic.charterLocation.title}
      paddingNone={true}
    >
      {isOpened && (
        <FeedbackModal
          {...detailYachtStatic.charterLocation.modal}
          ref={modalRef}
          closeModal={closeModal}
          formType={FormType.yachtDelivery}
        />
      )}
      <StyledText dangerouslySetInnerHTML={{ __html: location_text }} />

      <MapWrapper>
        <StyledImageWrapper>
          <GoogleMapReact
            bootstrapURLKeys={{ key }}
            defaultCenter={{ lat: +data.lat, lng: +data.lng }}
            defaultZoom={8}
            style={{ height: '100%' }}
            options={{
              styles: styleData,
            }}
            // onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
            yesIWantToUseGoogleMapApiInternals
          >
            <Marker lat={data.lat} lng={data.lng} />
          </GoogleMapReact>
        </StyledImageWrapper>
      </MapWrapper>

      <StyledButton onClick={openModal}>
        {detailYachtStatic.charterLocation.button}
      </StyledButton>
    </StyledWrapper>
  )
}

export default CharterLocation
