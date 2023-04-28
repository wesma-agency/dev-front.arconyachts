import React, { forwardRef } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div``

const wrapComponent = (Component) =>
  forwardRef(({ ...props }, ref) => {
    return (
      <StyledWrapper {...props} ref={ref}>
        <Component />
      </StyledWrapper>
    )
  })

export default wrapComponent
