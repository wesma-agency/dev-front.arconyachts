import LetterIcon from 'assets/icons/mail.svg'
import React, { useState } from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import {
  Appeal,
  AppealText,
  ImageWrapper,
  Name,
  Position,
  StyledImage,
  Wrapper,
} from './PersonCard.styled'

const PersonCard = ({ data, hasEmail }) => {
  const { name, position, photo, email, src } = data
  const [isHovered, setHovered] = useState(false)
  const { tablet, phablet } = useBreakpoint()

  return (
    <Wrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ImageWrapper>
        <StyledImage src={photo.fullpath} alt={name} cover="cover" />
        {!tablet && hasEmail && (
          <Appeal isHovered={isHovered}>
            <LetterIcon />
            <AppealText>Написать письмо</AppealText>
          </Appeal>
        )}
      </ImageWrapper>
      <Name>{name}</Name>
      <Position>{position}</Position>
      {tablet && hasEmail && (
        <Appeal>
          <LetterIcon />
          <AppealText>Написать письмо</AppealText>
        </Appeal>
      )}
    </Wrapper>
  )
}

export default PersonCard
