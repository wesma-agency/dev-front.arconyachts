import React from 'react'
import styled from 'styled-components'
import Image from 'ui/Image'
import { trans, color } from 'utils/vars'

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 490px;
  position: relative;
`

const StyledBadge = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.02em;
  padding-left: 20px;
  pointer-events: none;
  background: ${color.white};
  opacity: 0.8;
  border-radius: 100px;
  min-height: 39px;
`

const StyledBadgeShow = styled(StyledBadge)`
  color: ${color.white};
  background: ${color.black};
  opacity: 1;
  position: static;
  margin-left: 20px;
  padding: 0 20px;

  transition: ${trans.base} opacity;
  pointer-events: initial;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

const MapTab = () => {
  return (
    <StyledWrapper>
      <Image
        cover="cover"
        src="/img/charter/map.png"
        srcset="/img/charter/map.png"
      />
      {/* <StyledBadge>Выберите точку на карте</StyledBadge> */}
      <StyledBadge>
        Вы выбрали: Барселона <StyledBadgeShow>Показать 2 яхты</StyledBadgeShow>
      </StyledBadge>
    </StyledWrapper>
  )
}

export default MapTab
