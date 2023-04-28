import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { color, trans, media } from 'utils/vars'
import { customScroll } from 'utils/mixins'

const StyledWrapper = styled.div`
  position: relative;
  background: none;
  border-bottom: 0.5px solid ${color.black};
  transition: ${trans.base} border-color;

  ${({ error }) =>
    error &&
    css`
      border-bottom-color: ${color.error};
    `}
`

const StyledInput = styled.textarea`
  background: none;
  border: none;
  font-size: 16px;
  padding: 5px 0 5px;
  color: ${color.black};
  width: 100%;
  min-height: 64px;
  resize: none;
  ${customScroll}

  ${media.tablet} {
    font-size: 14px;
    padding: 16px 0 6px;
  }

  ${media.mobileLarge} {
    min-height: 140px;
  }
`

const StyledPlaceholder = styled.label`
  display: inline-block;
  padding-bottom: 12px;
  transition: ${trans.base} all;
  color: ${color.placeholder};
  font-size: 16px;
  cursor: pointer;

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

const TextArea = ({
  className,
  onChange = () => {},
  placeholder,
  value: inputValue = '',
  children,
  error,
  ...props
}) => {
  const input = useRef()
  const [value, setValue] = useState(inputValue)

  useEffect(() => {
    setValue(inputValue)
  }, [inputValue])

  return (
    <StyledWrapper className={className} error={error}>
      <StyledPlaceholder onClick={() => input.current.focus()}>
        {placeholder}
      </StyledPlaceholder>
      <StyledInput
        {...props}
        ref={input}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e)
        }}
        value={value}
      />
      <StyledError isActive={error}>{error}</StyledError>
      {children}
    </StyledWrapper>
  )
}

export default TextArea
