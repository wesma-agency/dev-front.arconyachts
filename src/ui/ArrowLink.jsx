import styled from 'styled-components'
import ArrowIcon from 'assets/icons/arrow-right-gray.svg'
import { color, media, trans } from 'utils/vars'

const StyledLink = styled.div`
  cursor: pointer;
  color: ${color.more};
  text-transform: uppercase;
  font-weight: normal;
  display: flex;
  align-items: center;
  transition: ${trans.base} opacity;

  svg {
    margin-right: 17px;

    ${media.tablet} {
      margin-right: 10px;
    }
  }

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`

const ArrowLink = ({ children, ...props }) => (
  <StyledLink {...props}>
    <ArrowIcon />
    {children}
  </StyledLink>
)

export default ArrowLink
