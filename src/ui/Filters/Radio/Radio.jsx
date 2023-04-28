import CheckedIcon from 'assets/icons/checked.svg'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { color, trans } from 'utils/vars'
import { useRouter } from 'next/router'

const Block = styled.div``
const Icon = ({ ...props }) => (
  <Block {...props}>
    <CheckedIcon />
  </Block>
)

const StyledIcon = styled(Icon)`
  opacity: 0;
  transform: scale(0);
  transition: ${trans.base} opacity, ${trans.base} transform;
  margin-left: 2px;
`

const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: none;
  border: 1px solid ${color.black};
  transition: ${trans.base} border;
  margin-right: 10px;
`

const StyledText = styled.div`
  white-space: nowrap;
  transition: ${trans.base} color;
`

const StyledTextA = styled.a`
  white-space: nowrap;
  transition: ${trans.base} color;
`

const StyledWrapper = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  &:hover {
    ${StyledCheckbox} {
      border-color: ${color.accentHover};
    }
    ${StyledText} {
      color: ${color.accentHover};
    }
  }

  ${({ checked }) =>
    checked &&
    css`
      ${StyledCheckbox} {
        border-color: ${color.accentHover};
      }

      ${StyledIcon} {
        transform: scale(1);
        opacity: 1;
      }
    `}

  ${({ isItemDisabled }) =>
    isItemDisabled &&
    css`
      pointer-events: none;
      ${StyledCheckbox} {
        border-color: ${color.accentHover};
      }
      ${StyledText} {
        opacity: 0.4;
      }
    `}
`

const Radio = ({
  value: inputValue = false,
  onChange: inputOnChange = () => {},
  isItemDisabled = false,
  title,
  isActive,
  isCompilation,
  ...props
}) => {
  const clickHandler = (e) => {
    e.preventDefault()
  }
  const router = useRouter()
  const link = [
    router.locale === 'ru' ? '/ru' : '',
    router.route.replace('/[slug]', ''),
    '/',
    props.item.compilationSlug ? props.item.compilationSlug : props.item.slug,
  ].join('')
  return (
    <StyledWrapper
      onClick={isItemDisabled ? undefined : inputOnChange}
      checked={isActive && 'checked'}
      isItemDisabled={isItemDisabled}
      {...props}
    >
      <StyledCheckbox>
        <StyledIcon />
      </StyledCheckbox>
      {isCompilation ? (
        <StyledTextA href={link} onClick={clickHandler}>
          {title}
        </StyledTextA>
      ) : (
        <StyledText>{title}</StyledText>
      )}
    </StyledWrapper>
  )
}

export default Radio
