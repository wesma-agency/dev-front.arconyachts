import CheckedIcon from 'assets/icons/checked.svg'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { color, trans, media } from 'utils/vars'
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
  border-radius: 0;
  background: none;
  border: 1px solid ${color.black};
  transition: ${trans.base} border;
  margin-right: 10px;
`

const StyledTextA = styled.a`
  white-space: nowrap;
  transition: ${trans.base} color;
  text-overflow: ellipsis;
  overflow: hidden;
`
const StyledTextDiv = styled.div`
  white-space: nowrap;
  transition: ${trans.base} color;
  text-overflow: ellipsis;
  overflow: hidden;
`
const StyledWrapper = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  width: 100%;
  &:hover {
    ${StyledCheckbox} {
      border-color: ${color.accentHover};
    }
    ${StyledTextDiv} {
      color: ${color.accentHover};
    }
  }

  ${media.tablet} {
    width: calc(100% - 20px);
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
`

const Checkbox = ({
  value: inputValue = false,
  onChange: inputOnChange = () => {},
  title,
  ...props
}) => {
  const onClickHandler = (e) => {
    e.preventDefault()
  }
  const router = useRouter()
  const link = [
    router.locale === 'ru' ? '/ru' : '',
    router.route.replace('/[slug]', ''),
    '/',
    props.item?.slug,
  ].join('')
  const shipyardLink = [
    router.locale === 'ru' ? '/ru' : '',
    '/shipyards/',
    props.item?.slug,
  ].join('')
  const filterType = props.all?.param
  const cabinLink = () => {
    return [
      router.locale === 'ru' ? '/ru' : '',
      router.route.replace('/[slug]', ''),
      '/',
      'cabin-' + props.item?.slug,
    ].join('')
  }
  return (
    <StyledWrapper
      onClick={() => {
        inputOnChange(!inputValue)
      }}
      checked={inputValue && 'checked'}
      {...props}
    >
      <StyledCheckbox>
        <StyledIcon />
      </StyledCheckbox>
      {props.all?.param === 'shipyard' ? (
        <StyledTextA href={shipyardLink} onClick={onClickHandler}>
          {title}
        </StyledTextA>
      ) : props.isCompilation ? (
        <StyledTextA
          href={filterType === 'cabin' ? cabinLink() : link}
          onClick={onClickHandler}
        >
          {title}
        </StyledTextA>
      ) : (
        <StyledTextDiv>{title}</StyledTextDiv>
      )}
    </StyledWrapper>
  )
}

export default Checkbox
