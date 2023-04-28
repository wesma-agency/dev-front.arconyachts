import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { color, trans, media } from 'utils/vars'
import InputMask from 'react-input-mask'

const StyledWrapper = styled.div`
  background: none;
  border-bottom: 0.5px solid ${color.black};
  width: 280px;
  position: relative;
  transition: ${trans.base} border-color;
  ${({ error }) =>
    error &&
    css`
      border-bottom-color: ${color.error};
    `}
`

const smallPlaceholder = css`
  & ~ label {
    pointer-events: none;
    font-size: 12px;
    bottom: 40px;

    ${media.tablet} {
      font-size: 10px;
      bottom: 34px;
    }
  }
`

const StyledInput = styled.input`
  background: none;
  border: none;
  font-size: 16px;
  padding: 22px 0 12px;
  color: ${color.black};
  width: 100%;

  ${({ largePadding }) =>
    largePadding &&
    css`
      padding-bottom: 18px;
    `}

  &:focus {
    ${smallPlaceholder}
  }

  ${media.tablet} {
    font-size: 14px;
    padding: 16px 0 6px;

    ${({ largePadding }) =>
      largePadding &&
      css`
        padding-bottom: 10px;
      `}
  }

  ${({ value }) => value && smallPlaceholder}
`

const StyledPlaceholder = styled.label`
  pointer-events: none;
  transition: ${trans.base} all;
  position: absolute;
  color: ${color.placeholder};
  bottom: 12px;
  left: 0;
  font-size: 16px;
  ${media.tablet} {
    font-size: 14px;
  }
`

const StyledError = styled.div`
  opacity: 0;
  position: absolute;
  bottom: -23px;
  transition: ${trans.base} opacity;
  color: ${color.error};
  left: 0;
  font-size: 12px;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0.5;
    `}
`

const StyledInputMask = styled(InputMask)`
  background: none;
  border: none;
  font-size: 16px;
  padding: 22px 0 12px;
  color: ${color.black};
  width: 100%;
  &:focus {
    ${smallPlaceholder}
  }
  ${media.tablet} {
    font-size: 14px;
    padding: 16px 0 6px;
  }

  ${({ value }) => value && smallPlaceholder}
`

const Input = ({
  className,
  onChange = () => {},
  placeholder,
  value: inputValue = '',
  children,
  error,
  mask,
  largePadding = false,
  ...props
}) => {
  const input = useRef()
  const [value, setValue] = useState(inputValue)
  useEffect(() => {
    setValue(inputValue)
  }, [inputValue])
  return (
    <StyledWrapper className={className} error={error}>
      {!mask ? (
        <StyledInput
          {...props}
          ref={input}
          onChange={(e) => {
            setValue(e.target.value)
            onChange(e)
          }}
          value={value}
          largePadding={largePadding && 'largePadding'}
        />
      ) : (
        <StyledInputMask
          ref={input}
          {...props}
          mask={mask}
          onChange={(e) => {
            setValue(e.target.value)
            onChange(e)
          }}
          value={value}
        />
      )}
      <StyledPlaceholder onClick={() => input.current.focus()}>
        {placeholder}
      </StyledPlaceholder>
      <StyledError isActive={error}>{error}</StyledError>
      {children}
    </StyledWrapper>
  )
}

export default Input
