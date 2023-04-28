import React from 'react'
import { StyledQuantity, StyledRadio, StyledTitle } from './Toggle.styled'

const Toggle = ({ quantity, name, onChange = () => {}, checked, ...props }) => {
  const toggle = () => {
    onChange(!checked, name)
  }

  return (
    <StyledRadio onClick={toggle} checked={checked} {...props}>
      <StyledTitle>{name}</StyledTitle>
      {quantity && <StyledQuantity>{quantity}</StyledQuantity>}
    </StyledRadio>
  )
}

export default Toggle
