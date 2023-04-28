import styled from 'styled-components'
import { media } from 'utils/vars'
import Arrow from 'components/Slider/Arrow'
import Button from 'ui/Buttons/Button'
import NewsCard from 'ui/Cards/NewsCard'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 40px auto 120px;
  width: 100%;

  ${media.tablet} {
    margin-top: 22px;
    margin-bottom: 80px;
  }
`

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Placeholder = styled.div`
  width: 30%;

  ${media.fullhd} {
    width: 48%;
  }

  ${media.tablet} {
    display: none;
  }
`

export const StyledCard = styled(NewsCard)`
  width: 30%;
  margin-bottom: 80px;
  max-width: none;

  ${media.fullhd} {
    width: 48%;
    margin-bottom: 50px;
  }

  ${media.tablet} {
    width: 100%;
    margin-bottom: 40px;
  }
`

export const StyledButton = styled(Button)`
  ${media.tablet} {
    max-width: 380px;
    width: 100%;
    padding: 19px 0;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
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
