import React from 'react'
import { StyledContentWrapper, StyledHeader } from './ShipyardAbout.styled'

const ShipyardAbout = ({ aboutRef, content, title }) => {
  return (
    content && (
      <>
        <StyledHeader ref={aboutRef}>{title}</StyledHeader>
        <StyledContentWrapper
          dangerouslySetInnerHTML={{ __html: content }}
        ></StyledContentWrapper>
      </>
    )
  )
}

export default ShipyardAbout
