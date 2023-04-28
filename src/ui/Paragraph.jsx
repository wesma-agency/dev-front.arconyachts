import styled from 'styled-components'
import { typography } from 'utils/mixins'
import { media } from 'utils/vars'

const StyledParagraph = styled.p`
  ${typography.p};
  line-height: 168%;
  margin-bottom: 28px;
  letter-spacing: -0.02em;

  ${media.tablet} {
    line-height: 22px;
    margin-bottom: 21px;
  }
`

const Paragraph = ({children, ...props }) => (
  <StyledParagraph {...props}>{children}</StyledParagraph>
)

export default Paragraph
