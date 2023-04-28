import { yachtCatalogStatic } from 'config/static/yachtCatalog'
import { useRouter } from 'next/router'
import React, { memo, useEffect, useRef, useState } from 'react'
import { getNoun } from 'utils/getNoun'
import {
  getFilterValues,
  getParamsCount,
  toggleQueryParam,
  removeParam,
  charterValues,
} from 'utils/paramsHelpers'
import { useBreakpoint } from 'utils/useBreakpoint'
import {
  StyledClose,
  StyledFiltersIcon,
  StyledFound,
  StyledHeader,
  StyledHeaderWrapper,
  StyledInput,
  StyledInputMob,
  StyledInputWrapper,
  StyledSearchIcon,
  StyledSearchWrapper,
  StyledSubTitle,
  StyledTitle,
  StyledWrapper,
} from './CatalogSearch.styled'
import { useTranslation } from 'utils/useTranslation'

const getName = (filterItems, values, param) =>
  filterItems
    .filter((item) => item.param === param)[0]
    .items.filter((item) => item.slug === values[param])[0].name

const CatalogSearch = ({
  showFilters,
  catalogPage = true,
  total,
  headerTitle: headerTitleInit = '',
  subTitle: subTitleInit,
  pathname,
  filtersArray = charterValues,
  filterItems,
}) => {
  const router = useRouter()
  const { query } = router
  const values = getFilterValues(query, [...filtersArray])
  const search = query.search
  const [isSearching, setIsSearching] = useState(false)
  const [value, setValue] = useState(search || '')
  useEffect(() => {
    setValue(search ? search : '')
  }, [search])

  const onSearch = (value) => {
    setIsSearching(false)
    let newQuery = removeParam(
      toggleQueryParam(value, 'search', { ...values }),
      'page'
    )

    if (query.slug) {
      newQuery.slug = query.slug
    }

    if (query.charter) {
      newQuery.charter = query.charter
    }
    router.push(
      {
        pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true }
    )
  }

  const { notebook } = useBreakpoint()
  useEffect(() => {
    if (isSearching) {
      setTimeout(() => {
        if (notebook) {
          inputRefMob.current.focus()
        } else {
          inputRef.current.focus()
        }
      }, 300)
    }
  }, [isSearching])

  const inputRef = useRef(null)
  const inputRefMob = useRef(null)

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      onSearch(value)
    }
  }

  const onHeaderClick = (e) => {
    setIsSearching(true)
  }

  const filtersCount = getParamsCount(values, filtersArray)

  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')

  const currentCompilation = filterItems.find(
    (item) => item.isCompilation && item.slug === query.slug
  )

  const hasBody = currentCompilation?.type === 'body' || values.body
  let bodies = []

  currentCompilation?.type === 'body' && bodies.push(currentCompilation.slug)

  if (values.body) {
    bodies = bodies.concat(values.body)
  }

  const headerTitle = value
    ? value
    : Object.keys(values).length === 1
    ? values.shipyard &&
      (!Array.isArray(values.shipyard) || values.shipyard.length === 1)
      ? values.shipyard
      : hasBody && bodies.length === 1
      ? `${
          yachtCatalogStatic.filterNames[bodies[0]] ||
          getName(filterItems, values, 'body')
        } ${yachtCatalogStatic.search.caption}`
      : values.condition &&
        (!Array.isArray(values.condition) || values.condition.length === 1)
      ? `${getName(filterItems, values, 'condition')} ${
          yachtCatalogStatic.search.caption
        }`
      : headerTitleInit
    : headerTitleInit

  const headerSubtitle = isSearching
    ? subTitleInit
    : headerTitle?.replace('  ', '') !== headerTitleInit
    ? headerTitleInit
    : subTitleInit

  const isFoundShown = (filtersCount && filtersCount > 0) || value || query.slug

  // If title to long
  let doubleTitle = ['', '']
  let doubleTitleCheck = false
  if (
    currentCompilation?.type === 'shipyard' ||
    currentCompilation?.type === 'location'
  ) {
    const doubleTitleArr = headerTitle.split(' ')
    const dividerIndex = doubleTitleArr.findIndex(
      (item) => !!item.match(/^(в|на|во|at|in)$/)
    )
    if (dividerIndex !== -1) {
      doubleTitleArr.forEach((item, index) => {
        index < dividerIndex
          ? (doubleTitle[0] += `${item} `)
          : (doubleTitle[1] += `${item} `)
      })
    }
    if (doubleTitle[0] !== '' && doubleTitle[1] !== '') {
      doubleTitleCheck = true
      doubleTitle = doubleTitle.map((item) => item.trim())
    }
  }
  return (
    <StyledWrapper>
      <StyledTitle catalogPage={catalogPage && 'catalogPage'}>
        {headerTitle?.replace('  ', ' ') === headerSubtitle
          ? subTitleInit
          : headerSubtitle}
      </StyledTitle>
      <StyledSearchWrapper isActive={isSearching}>
        <StyledFiltersIcon onClick={() => showFilters(true)} />
        <StyledHeaderWrapper>
          {doubleTitleCheck ? (
            <StyledHeader isActive={isSearching} onClick={onHeaderClick}>
              {doubleTitle[0]}
              <StyledSubTitle>{doubleTitle[1]}</StyledSubTitle>
            </StyledHeader>
          ) : (
            <StyledHeader isActive={isSearching} onClick={onHeaderClick}>
              {headerTitle}
            </StyledHeader>
          )}

          {isFoundShown && total ? (
            <StyledFound>
              {total} {getNoun(total, ...yachtCatalogStatic.found)}
            </StyledFound>
          ) : (
            ''
          )}
        </StyledHeaderWrapper>
        <StyledSearchIcon
          onClick={() => {
            if (isSearching) {
              onSearch(value)
            } else {
              setIsSearching(true)
            }
          }}
          isActive={isSearching}
        />
      </StyledSearchWrapper>
      <StyledInputWrapper isActive={isSearching}>
        <StyledInput
          placeholder={yachtCatalogStatic.search.placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleEnter}
          ref={inputRef}
          aria-label={yachtCatalogStatic.search.placeholder}
        />
        <StyledInputMob
          placeholder={yachtCatalogStatic.search.placeholderMob}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleEnter}
          ref={inputRefMob}
          aria-label={yachtCatalogStatic.search.placeholderMob}
        />
        <StyledClose
          onClick={() => {
            setIsSearching(false)
            onSearch('')
            setValue('')
          }}
        />
      </StyledInputWrapper>
    </StyledWrapper>
  )
}

export default memo(CatalogSearch)
