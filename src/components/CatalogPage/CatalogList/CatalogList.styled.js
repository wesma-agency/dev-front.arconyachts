import Arrow from 'components/Slider/Arrow'
import styled, { css } from 'styled-components'
import Button from 'ui/Buttons/Button'
import YachtCard from 'ui/Cards/YachtCard'
import { color, media } from 'utils/vars'

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 40px auto 0;
  width: 100%;

  ${({ withIndent }) =>
    withIndent &&
    css`
      margin-bottom: 120px;
    `}

  ${media.tablet} {
    margin-top: 34px;

    ${({ withIndent }) =>
      withIndent &&
      css`
        margin-bottom: 60px;
      `}
  }
`

export const StyledListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const StyledCard = styled(YachtCard)`
  width: 30%;
  margin-bottom: 60px;
  max-width: none;

  ${media.fullhd} {
    width: 48%;
    margin-bottom: 50px;
  }

  ${media.tablet} {
    width: 100%;
    margin-bottom: 0;
    &:not(:last-of-type) {
      margin-bottom: 40px;
    }
  }
`

export const StyledMore = styled.div`
  width: 100%;
  padding: 52px 30px 40px;
  background: ${color.accent};
  margin-bottom: 40px;
`
export const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  width: 230px;
  text-transform: uppercase;
`
export const StyledText = styled.div`
  font-size: 14px;
  line-height: 22px;
  margin-top: 12px;
`
export const StyledLink = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  margin-top: 40px;
  color: ${color.accentLink};
`

export const StyledArrows = styled.div`
  display: flex;
  margin-top: 40px;
`

export const StyledArrow = styled(Arrow)`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`

export const StyledButton = styled(Button)`
  ${media.tablet} {
    max-width: 380px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 19px 52px;
    margin-top: 20px;
  }
`

export const StyledPlaceholder = styled.span`
  width: 30%;
  display: block;
`

export const StyledNotFound = styled.div`
  font-size: 16px;
  line-height: 160%;
  letter-spacing: -0.02em;
  margin-top: 36px;
`
