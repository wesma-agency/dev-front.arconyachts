import styled from 'styled-components'
import { color, media, trans } from 'utils/vars'

export const StyledTitle = styled.a`
  transition: ${trans.base} color;
  cursor: pointer;
  &:hover {
    color: ${color.accentHover};
  }
`
export const StyledCount = styled.div`
  color: ${color.more};
`
export const StyledDivider = styled.div`
  flex-grow: 2;
  border-bottom: 1px dotted ${color.subacive};
  height: 24px;
`

export const StyledTags = styled.div`
  margin: 20px 0 40px;
  width: calc(100% + 75px);
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;

  ${media.notebook} {
    width: calc(100% + 34px);
  }

  ${media.phablet} {
    display: none;
  }
`

export const StyledPlaceholder = styled.div`
  width: 20%;
  box-sizing: border-box;
  padding-right: 74px;
  min-width: 262px;

  ${media.notebook} {
    min-width: 222px;
    padding-right: 34px;
  }
`

export const StyledTagWrapper = styled(StyledPlaceholder)`
  display: flex;
  font-size: 13px;
  line-height: 40px;
`
