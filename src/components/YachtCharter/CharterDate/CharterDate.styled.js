import Arrow from 'components/Slider/Arrow'
import {
  StyledArrows as Arrows,
  StyledHeader as Header,
  StyledTitle as Title,
} from 'components/Slider/YachtSlider/YachtSlider.styled'
import styled from 'styled-components'
import { ButtonDark } from 'ui/Buttons/ButtonDark'
import { color, media } from 'utils/vars'
import { aspectRatio } from 'utils/mixins'

export const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 100%;
  margin-top: 180px;
  flex-direction: column;

  ${media.fullhd} {
    margin-top: 150px;
  }
  ${media.notebook} {
    margin-top: 120px;
  }
  ${media.tablet} {
    margin-top: 84px;
  }
  .rdrWeekDay,
  .rdrDefinedRangesWrapper,
  .rdrMonthAndYearWrapper {
    display: none;
  }

  .rdrMonthName {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.02em;
    color: ${color.black};
    padding-bottom: 16px;

    ${media.phablet} {
      text-align: left;
      padding: 0;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.05em;
    }
  }
  .rdrDay {
    height: auto;
    ${aspectRatio(1, 1)}
    margin-bottom: 8px;
    position: relative;
  }
  .rdrDays {
    ${media.tablet} {
      margin: 28px -1%;
    }
  }
  .rdrStartEdge,
  .rdrEndEdge {
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: transparent !important;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: red;
    }
    &:after {
      content: '';
      position: absolute;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${color.accentHover};
      width: 100%;
      height: 100%;
    }
  }
  .rdrStartEdge {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    &:before {
      background: linear-gradient(
        270deg,
        ${color.accent} 0%,
        ${color.accent} 50%,
        ${color.white} 50%,
        ${color.white} 100%
      );
    }
  }
  .rdrEndEdge {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    &:before {
      background: linear-gradient(
        90deg,
        ${color.accent} 0%,
        ${color.accent} 50%,
        ${color.white} 50%,
        ${color.white} 100%
      );
    }
  }
  .rdrEndEdge.rdrStartEdge:before {
    background: none;
  }

  .rdrDayStartOfWeek .rdrEndEdge:before {
    border-top-left-radius: 1.042em;
    border-bottom-left-radius: 1.042em;
  }
  .rdrDayEndOfWeek .rdrStartEdge:before {
    border-top-right-radius: 1.042em;
    border-bottom-right-radius: 1.042em;
  }

  .rdrInRange {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    color: ${color.accent} !important;
  }
  .rdrDateRangeWrapper,
  .rdrDateRangePickerWrapper,
  .rdrMonths {
    width: 100%;
    margin-top: 10px;
    justify-content: space-between;

    ${media.tablet} {
      justify-content: center;
    }
  }
  .rdrMonth {
    width: 100%;
    max-width: 360px;
    box-sizing: content-box;
    ${media.phablet} {
      max-width: none;
      padding: 0;
      margin-top: 15px;
    }
  }

  .rdrDayNumber {
    font-weight: 500;
    font-size: 16px;

    & > span {
      color: ${color.black} !important;
    }

    ${media.tablet} {
      font-size: 14px;
      line-height: 22px;
    }
  }
  .rdrDayPassive {
    opacity: 0;
    pointer-events: none;
  }
  .rdrDayToday .rdrDayNumber span:after {
    background: ${color.accentHover} !important;
  }

  .rdrDayStartPreview {
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
  }
  .rdrDayEndPreview {
    border-bottom-right-radius: 50%;
    border-top-right-radius: 50%;
  }
  .rdrDayStartPreview,
  .rdrDayInPreview,
  .rdrDayEndPreview {
    background: rgba(255, 255, 255, 0.09);
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    pointer-events: none;
    z-index: 1;
  }
`

export const StyledHeader = styled(Header)`
  ${media.tablet} {
    margin-bottom: 0;
  }
`

export const StyledArrow = styled(Arrow)``

export const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const StyledArrows = styled(Arrows)`
  display: flex;

  ${media.phablet} {
    position: absolute;
    left: 100%;
    top: 100px;
    padding-right: 5%;
    transform: translate(-100%);
    ${StyledArrow} {
      width: 40px;
      height: 40px;
      svg {
        transform: none;
      }
    }
  }
`

export const StyledTitle = styled(Title)`
  ${media.phablet} {
    max-width: 335px;
    line-height: 31px;
  }
`

export const StyledButton = styled(ButtonDark)`
  margin-top: 36px;
  width: 290px;

  ${media.tablet} {
    margin: 16px auto 0;
    padding: 18px;
  }

  ${media.phablet} {
    width: 100%;
  }
`
