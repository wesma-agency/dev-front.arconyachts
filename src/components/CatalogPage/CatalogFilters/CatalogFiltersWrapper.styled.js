import styled, { css } from 'styled-components'
import { ButtonDark } from 'ui/Buttons/ButtonDark'
import XMark from 'ui/XMark'
import { color, media, trans } from 'utils/vars'
import ArrowIcon from 'assets/icons/filter-arrow.svg'
import { fullWidth, fonts } from 'utils/mixins'
import { largeText } from '../CatalogSearch/CatalogSearch.styled'

export const StyledBlock = styled.div`
  margin-left: 12px;

  ${({ inverted }) =>
    inverted &&
    css`
      transform: rotate(180deg);
    `}
`

export const Arrow = ({ ...props }) => (
  <StyledBlock {...props}>
    <ArrowIcon />
  </StyledBlock>
)

export const StyledArrow = styled(Arrow)`
  ${media.tablet} {
    display: none;
  }
`

export const StyledMoreWrapper = styled.div`
  margin-bottom: 12px;
  display: flex;

  ${media.tablet} {
    display: none;
  }
`

export const StyledReset = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: ${color.textActive};
  padding: 12px 15px;
  cursor: pointer;
  transition: ${trans.base}color;
  &:hover {
    color: ${color.accentHover};
  }
`

export const StyledMore = styled.div`
  padding: 12px 20px;
  position: relative;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
  border: 0.5px solid ${color.textActive};
  cursor: pointer;
  background: white;
  transition: ${trans.base} background, ${trans.base} border;

  &:hover {
    background: ${color.hover};
    border-color: ${color.hover};
  }

  ${media.tablet} {
    display: none;
  }
`

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 0 auto 28px;

  ${media.tablet} {
    position: fixed;
    z-index: 2;
    top: 60px;
    left: 0;
    transform: translate(-100%);
    background: ${color.white};
    padding: 60px 20px 0;
    transition: ${trans.base} transform;
    height: calc(100% - 60px);
    overflow: auto;
    ${({ isActive }) =>
      isActive &&
      css`
        transform: translate(0);
      `}

    ${({ separatedToggle }) =>
      separatedToggle &&
      css`
        position: relative;
        display: flex;
        flex-wrap: wrap;
      `}
  }
`
export const StyledTitleMob = styled.div`
  display: none;

  ${media.tablet} {
    ${largeText}
    font-weight: normal;
    line-height: 130%;
    ${fonts.SangBleuSunrise};
    position: relative;
    display: flex;
    width: 100%;
    line-height: 34px;
    text-transform: uppercase;
    justify-content: center;
    margin-bottom: 40px;
    z-index: 4;
    position: fixed;
    top: 60px;
    padding-top: 60px;
    background: ${color.white};
    left: 0;
    transform: translate(-100%);
    transition: ${trans.base} transform;

    ${({ isActive }) =>
      isActive &&
      css`
        transform: translate(0);
      `}
  }
`

export const StyledClose = styled(XMark)`
  position: absolute;
  left: 0;
  opacity: 0.4;
  padding: 10px;
  box-sizing: content-box;
  width: 24px;

  ${media.tablet} {
    left: 7vw;
    transform: translateY(-50%);
    bottom: 0;
  }
`

export const StyledResetMobWrapper = styled.div`
  display: none;
  ${media.tablet} {
    width: 100%;
    display: block;
  }
`
export const StyledResetMob = styled.div`
  text-align: center;
  color: ${color.textActive};
`
export const StyledApplyMob = styled(ButtonDark)`
  background: ${color.black};
  width: 100%;
  display: block;
  margin: 32px auto 24px;
  padding: 18px 0;
`

export const StyledActiveFiltersMob = styled.div`
  display: none;
  ${media.tablet} {
    width: 100%;
    overflow-x: auto;
    display: ${({ isExtraShown }) => (isExtraShown ? 'block' : 'none')};
    padding-bottom: 10px;
    padding-left: 5vw;
    padding-right: 5vw;
    flex-direction: row;
    margin-top: 14px;
    letter-spacing: 0.02em;
    white-space: nowrap;
    ${fullWidth}
  }
`
export const StyledActiveFilterMob = styled.div`
  display: none;

  ${media.tablet} {
    border-radius: 100px;
    margin-right: 8px;
    font-size: 12px;
    line-height: 15px;
    padding: 12px 16px;
    background: ${color.accent};
    white-space: nowrap;
    display: inline-block;
  }
`
export const SlideWrapper = styled.div`
  ${media.tablet} {
    width: 100%;
    overflow-x: auto;
    display: block;
    white-space: nowrap;
    margin-top: 14px;
    padding-left: 5vw;
    padding-right: 5vw;
    letter-spacing: 0.02em;
    ${fullWidth}
  }
`

export const StyledCatalogFiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.tablet} {
    min-height: calc(100% - 202px);
    width: 100%;
    margin-top: 73px;
  }
`
