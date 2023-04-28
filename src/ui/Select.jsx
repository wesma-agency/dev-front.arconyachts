import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import { useClickOutside } from 'utils/useClickOutside'

import { color, media, trans } from 'utils/vars'
import { animations, container } from 'utils/mixins'
import ArrowIcon from '/assets/icons/blue-arrow.svg'

const StyledWrapper = styled.span`
  position: relative;
  ${media.mobileLarge} {
    position: static;
  }
`

const StyledTitle = styled.span`
  min-height: 50px;
  color: ${color.accentHover};
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`

const StyledOptions = styled.ul`
  z-index: 2;
  position: absolute;
  left: 90%;
  width: fit-content;
  min-width: 250px;
  background-color: white;
  -ms-overflow-style: none;
  scrollbar-width: none;
  box-shadow: 0px 4px 34px rgba(110, 123, 120, 0.15);
  overflow: auto;
  pointer-events: auto;
  border-radius: 16px;
  padding: 20px 33px;
  font-weight: 500;
  font-size: 24px;
  line-height: 60px;
  letter-spacing: 0.02px;
  opacity: 0;
  animation: ${animations.fadeIn} ${trans.base} forwards;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.mobileLarge} {
    width: 90%;
    transform: none !important;
    left: 0;
    margin: 0 5vw;
  }
  
  ${media.mobile} {
    font-size: 18px;
    left: 0
  }
`

const StyledOption = styled.li`
  color: ${({ isSelected }) => (isSelected ? color.gray : color.black)};
  position: relative;
  display: block;
  padding: 6px 0;
  box-sizing: border-box;
  white-space: nowrap;
  background-color: white;
  cursor: pointer;
  user-select: none;
  transition: ${trans.base} color;

  &:hover,
  &:focus {
    color: ${color.accentHover};
  }
`

const StyledIconWrapper = styled.span`
  transition: ${trans.base} transform;
  transform: ${({ isOpened }) => (isOpened ? 'rotate(180deg)' : 'none')};
  margin-left: 10px;
  display: inline-flex;
  align-items: center;

  ${media.tablet} {
    & svg {
      width: 24px;
    }
  }

  ${media.mobileLarge} {
    & svg {
      width: 20px;
    }
  }
`

const Select = ({
  options,
  optionsRef,
  setIsOpened: setIsOpenedInit,
  isOpened: isOpenedInit,
  renderTitle,
}) => {
  const [isOpened, setIsOpened] = useState(false)
  const [value, setValue] = useState(options[0])
  const ref = useRef()

  useClickOutside([ref], () => setIsOpened(false))
  useEffect(() => {
    setIsOpened(isOpenedInit)
  }, [isOpenedInit])
  useEffect(() => {
    setIsOpenedInit(isOpened)
  }, [isOpened])
  return (
    <StyledWrapper ref={ref}>
      <StyledTitle
        onClick={(e) => {
          e.stopPropagation()
          setIsOpened((prev) => !prev)
        }}
      >
        {renderTitle(value)}
        <StyledIconWrapper isOpened={isOpened}>
          <ArrowIcon />
        </StyledIconWrapper>
      </StyledTitle>

      {isOpened && (
        <StyledOptions ref={optionsRef}>
          {options.map((option) => (
            <StyledOption
              key={option.value}
              isSelected={value.text === option.text ? true : false}
              onClick={() => {
                setValue(option)
                setIsOpened(false)
              }}
            >
              {option.text}
            </StyledOption>
          ))}
        </StyledOptions>
      )}
    </StyledWrapper>
  )
}

export default Select
