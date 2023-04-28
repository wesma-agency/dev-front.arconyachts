import {
  StyledTitle,
  StyledParagraphIntro,
  StyledInfoBlock,
  StyledList,
  StyledParagraph,
  StyledListItem,
} from './ServiceInfo.styled'

const ServiceInfo = ({
  content,
  isManagement = false,
  isSection = false,
  ...props
}) => (
  <StyledInfoBlock as={isSection ? 'section' : 'div'} {...props}>
    {content.intro && (
      <StyledParagraphIntro>{content.intro}</StyledParagraphIntro>
    )}
    {content.title && <StyledTitle>{content.title}</StyledTitle>}
    {content.text.map((text, i) =>
      !Array.isArray(text) ? (
        <StyledParagraph key={i}>{text}</StyledParagraph>
      ) : (
        <StyledList key={i}>
          {text.map((item, index) => (
            <StyledListItem key={index} isManagement={isManagement}>
              {item}
            </StyledListItem>
          ))}
        </StyledList>
      )
    )}
  </StyledInfoBlock>
)

export default ServiceInfo
