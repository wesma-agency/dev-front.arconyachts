import React, { Fragment, useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { StyledStar } from './LocationSection.styled'
import Simplebar from 'simplebar-react'
import { ScrollWrapper } from './LocationFilter.styled'
import { useTranslation } from 'utils/useTranslation'

const StyledWrapper = styled.div`
  font-size: 13px;
  line-height: 34px;
  padding: 32px 35px 43px;
`

const StyledResult = styled.div`
  line-height: 48px;
  cursor: pointer;
  width: fit-content;
  display: flex;
`

const StyledValue = styled.div`
  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      font-weight: 600;
    `}
`

const Word = styled.div`
  display: flex;
  margin-right: 4px;
`

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
const getResult = (result, value) =>
  result
    .filter(
      (item) =>
        item.title.toLowerCase().substring(0, value.length) ===
        value.toLowerCase()
    )
    .concat(
      result.filter(
        (item) =>
          item.title.toLowerCase().substring(0, value.length) !==
          value.toLowerCase()
      )
    )

const Value = ({ title, value }) => {
  const newstring = title.split(' ').map((item) => {
    const newstringreplaced = item
      .replaceAll(
        capitalizeFirstLetter(value.toLowerCase()),
        `.${capitalizeFirstLetter(value.toLowerCase())}.`
      )
      .replaceAll(value.toUpperCase(), `.${value.toUpperCase()}.`)
      .replaceAll(value.toLowerCase(), `.${value.toLowerCase()}.`)
    return newstringreplaced.split('.').filter((item) => item)
  })

  return newstring.map((word, index) => (
    <Word key={index}>
      {word.map((item, i) => (
        <StyledValue
          key={i}
          isHighlighted={
            item.toLowerCase() === value.toLowerCase() && 'highlighted'
          }
        >
          {i === 0 && index === 0 ? capitalizeFirstLetter(item) : item}
        </StyledValue>
      ))}
    </Word>
  ))
}

const SearchTab = ({
  result = false,
  value,
  toggleLocation,
  activeLocations,
  show = false,
}) => {
  const locationSearch = useTranslation('locationSearch')
  return (
    <ScrollWrapper show={show} shadow>
      <Simplebar style={{ maxHeight: 475 }} autoHide={false}>
        <StyledWrapper>
          {result
            ? result.length > 0
              ? getResult(result, value).map((item) => (
                  <StyledResult
                    key={item.title}
                    onClick={() => toggleLocation(item)}
                  >
                    <Value title={item.title} value={value} />
                    {activeLocations?.includes(item.slug) && <StyledStar />}
                  </StyledResult>
                ))
              : locationSearch.notFound
            : locationSearch.type}
        </StyledWrapper>
      </Simplebar>
    </ScrollWrapper>
  )
}

export default SearchTab
