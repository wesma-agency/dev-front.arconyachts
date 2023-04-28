import React from 'react'
import {
  Description,
  StyledContainer,
  StyledFiltersIcon,
  Title,
} from './ShipyardCatalogInfo.styled'

const ShipyardCatalogInfo = ({ title, description, onMenuClick }) => {
  return (
    <StyledContainer>
      <StyledFiltersIcon onClick={onMenuClick} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledContainer>
  )
}

export default ShipyardCatalogInfo
