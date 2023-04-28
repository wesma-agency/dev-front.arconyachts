import react from 'react'
import styled from 'styled-components'
import ArrowIcon from 'assets/icons/arrow-right-gray.svg'
import { media } from 'utils/vars'

const StyledText = styled.span`
  margin-left: 6.3%;
  display: inline-block;
  line-height: 160%;

  ${media.phablet} {
    margin-left: 15%;
  }
`

const StyledIconWrapper = styled.div``

const StyledItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 13px;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.02em;

  ${media.phablet} {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 23.5px;
  }

  svg {
    display: block;
    margin-top: 5px;
    width: 8px;
    height: 15px;

    ${media.phablet} {
      width: 6.5px;
      height: 12px;
    }
  }
`

const ListItem = ({children, ...props }) => (
  <StyledItem {...props}>
    <StyledIconWrapper>
      <ArrowIcon />
    </StyledIconWrapper>
    <StyledText>{children}</StyledText>
  </StyledItem>
)

export default ListItem
