import React, { useRef } from 'react'
import {
  StyledMore,
  StyledParagraph,
  StyledSpoiler,
  StyledText,
  StyledTextWrapper,
  StyledTitle,
  StyledWrapper,
} from './InfoBlock.styled'
import { useSpoiler } from 'utils/useSpoiler'
import { useTranslation } from 'utils/useTranslation'

const MAX_LENGTH = 900
const InfoBlock = ({
  content = useTranslation('homeStatic').epilogue,
  title,
  epilogueText = useTranslation('homeStatic').epilogue,
}) => {
  const ref = useRef(null)
  const { isOpened, toggleMore, height } = useSpoiler(ref)
  const getText = (content, spoilerParagraph = 2) => (
    <StyledTextWrapper>
      {content.slice(0, spoilerParagraph).map((item, i) => (
        <StyledParagraph key={i}>{item}</StyledParagraph>
      ))}
      <StyledText height={height}>
        <StyledSpoiler ref={ref}>
          {content.slice(spoilerParagraph).map((item, i) => (
            <StyledParagraph key={i}>{item}</StyledParagraph>
          ))}
        </StyledSpoiler>
      </StyledText>
    </StyledTextWrapper>
  )

  const epilogueContent =
    epilogueText &&
    epilogueText.match(/<p>.*?<\/p>/g)?.map((s) => s.replace(/<p>|<\/p>/g, ''))

  let spoilerParagraph = null
  epilogueContent &&
    epilogueContent.reduce((prev, par, index) => {
      if (prev + par.length > MAX_LENGTH && !spoilerParagraph) {
        spoilerParagraph = index
      }
      return prev + par.length
    }, 0)
  const spoiler = useTranslation('spoiler')
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      {spoilerParagraph ? (
        <>
          {getText(epilogueContent || content, spoilerParagraph)}
          <StyledMore onClick={toggleMore}>
            {isOpened ? spoiler.hide : spoiler.showMore}
          </StyledMore>
        </>
      ) : (
        <StyledTextWrapper dangerouslySetInnerHTML={{ __html: epilogueText }} />
      )}
    </StyledWrapper>
  )
}

export default InfoBlock
