import { PATH } from 'config/path'
// import { yachtCatalogStatic } from 'config/static/yachtCatalog'
import { useRouter } from 'next/router'
import React, { memo, useEffect, useRef, useState } from 'react'
// import Toggle from 'ui/Filters/Toggle'
import { CatalogFilterContext } from 'utils/context/CatalogFilterContext'
import { getNoun } from 'utils/getNoun'
import {
  toggleParam,
  removeParam,
  getParamsCount,
  removeParams,
  charterValues,
} from 'utils/paramsHelpers'
// import { useBodyScrollLock } from 'utils/useBodyScrollLock'
import { useBreakpoint } from 'utils/useBreakpoint'
// import CatalogTags from '../CatalogTags'
import CatalogFilters from './CatalogFilters'
import {
  StyledActiveFiltersMob,
  StyledApplyMob,
  StyledArrow,
  StyledCatalogFiltersWrapper,
  StyledClose,
  StyledMore,
  StyledMoreWrapper,
  StyledReset,
  StyledResetMob,
  StyledResetMobWrapper,
  StyledTitleMob,
  StyledWrapper,
} from './CatalogFiltersWrapper.styled'
import { useTranslation } from 'utils/useTranslation'
import dynamic from 'next/dynamic'
import { lengthMap } from 'utils/lengthMap'
// Dynamic
const CatalogTags = dynamic(() => import('../CatalogTags'))
const Toggle = dynamic(() => import('ui/Filters/Toggle'))

const charterFilter = [
  {
    activeTitle: '',
    defaultTitleValue: true,
    items: [
      { name: 'Недельная аренда', slug: 'week' },
      { name: 'Дневная аренда', slug: 'day' },
    ],
    param: 'charter',
    title: 'Аренда',
    type: 'radio',
  },
]

const checkCurrentFilters = (compilation, query, filter, number) => {
  const filterValues = []
  const filtersPosition = []
  if (compilation?.type) {
    filterValues.push(compilation.type)
  }
  if (query) {
    for (const param in query) {
      if (param !== 'slug') {
        filterValues.push(param)
      }
    }
  }
  filterValues.forEach((value) => {
    filtersPosition.push(filter.findIndex((item) => item.param === value))
  })
  filtersPosition.sort((a, b) => a - b)
  if (filtersPosition.length > 0) {
    return filtersPosition.pop() >= number
  } else {
    return false
  }
}

const CatalogFiltersWrapper = ({
  closeFilters,
  isFiltersShown,
  filtersNumber,
  withCompilations = true,
  pathname = PATH.CHARTER_CATALOG,
  filterItems,
  filtersArray = charterValues,
  arrayParams,
  isFilterDisabled = false,
  withCharter = false,
  isItemDisabled = false,
  currentCompilation,
}) => {
  const router = useRouter()
  const { query } = router
  const values = query

  // сортировка фильтра Верфь по алфавиту на страницах, где есть фильтр
  if(router.pathname !== '/shipyards') {
    filterItems.find(el => el.type === 'checkbox' && el.param === 'shipyard').items.sort((first, second) => {
      if(first.name.trim() < second.name.trim()) {
        return -1;
      }
      if(first.name.trim() > second.name.trim()) {
        return 1;
      }
      return 0;
    });
  }

  const [more, setMore] = useState(
    checkCurrentFilters(currentCompilation, values, filterItems, filtersNumber)
  )
  const showMore = () => setMore(true)
  const hideMore = () => setMore(false)
  const filters = useRef()
  const wrapperRef = useRef(null)
  const { tablet } = useBreakpoint()

  useEffect(() => {
    if (tablet) {
      setMore(true)
    }
  }, [tablet])

  const filtersCount = getParamsCount(
    values,
    filtersArray,
    arrayParams,
    filtersNumber
  )
  const resetItem = (param) => {
    if (
      values.slug &&
      filterItems.find(
        (item) =>
          item.isCompilation &&
          item.param === param &&
          (item.slug === values.slug || lengthMap[values.slug] === item.slug)
      )
    ) {
      const saveQuery = { ...values }
      delete saveQuery[param]
      delete saveQuery.slug
      return router.push(
        { pathname: pathname.replace('/[slug]', ''), query: saveQuery },
        undefined,
        {
          shallow: true,
        }
      )
    }

    let query = { ...values }
    delete query[param]
    setValues({ ...query })
  }

  const onChange = (item) => {
    const saveQuery = { ...values }
    const checkCompilation = filterItems.find(
      (filter) =>
        (filter.param === item.param && filter.slug === item.name) ||
        (filter.param === item.param &&
          filter.slug === item.compilationSlug &&
          filter.slug)
    )
    item.isCompilation = !!checkCompilation
    let shouldResetCompilation = false
    const shouldUseFiltering =
      !item.isCompilation ||
      (values.slug && currentCompilation?.type !== item.param)
    if (item.ignoreCompilation) {
      if (item.name === values.slug) {
        return router.push({ pathname: pathname.replace('[slug]', '') })
      } else {
        if (router.route === '/shipyards') {
          setValues(
            toggleParam(item.name, item.param, removeParam(values, 'letter'))
          )
        } else {
          setValues(
            toggleParam(item.name, item.param, removeParam(values, 'page'))
          )
        }
      }
      return
    }
    if (
      item.type === 'checkbox' ||
      item.type === 'toggle' ||
      item.type === 'location'
    ) {
      let query = toggleParam(
        item.name,
        item.param,
        removeParam(values, 'page')
      )

      if (!shouldUseFiltering && item.isCompilation) {
        shouldResetCompilation = values.slug === item.name
      } else {
        return setValues(query)
      }
    }
    if (item.type === 'radio' && shouldUseFiltering) {
      if (item.param === currentCompilation?.param) {
        delete saveQuery.slug
        saveQuery[item.param] = item.name
        let newRoute = {
          pathname: pathname.replace('[slug]', ''),
          query: saveQuery,
        }
        return router.push(newRoute, undefined, { shallow: true })
      }
      if (item.param === 'charter') {
        if (item.name === 'day') {
          setValues({ charter: item.name })
        } else {
          let query = { ...values }
          setValues(removeParam(query, 'charter'))
        }
      } else {
        let query = { ...values }
        query[item.param] = item.name
        setValues(removeParam(query, 'page'))
      }
    }
    if (item.type === 'tag' || (!shouldUseFiltering && item.isCompilation)) {
      let checkQuery
      if (typeof router.query[item.param] === 'string') {
        if (item.type === 'radio') {
          checkQuery = false
        } else {
          checkQuery = router.query[item.param] === item.name
        }
      } else if (router.query[item.param]) {
        checkQuery = router.query[item.param].find((el) => el === item.name)
      } else {
        checkQuery = false
      }
      const querySlug = item.compilationSlug || item.name
      let newRoute = {
        pathname,
        query: { ...saveQuery, slug: querySlug },
      }
      if (pathname.indexOf('[slug]') === -1) {
        if (checkQuery) {
          if (typeof newRoute.query[item.param] === 'string') {
            delete newRoute.query[item.param]
          } else {
            newRoute.query[item.param] = newRoute.query[item.param].filter(
              (el) => el !== item.name
            )
          }
          delete newRoute.query.slug
        } else {
          if (item.param === 'cabin') {
            newRoute = {
              pathname: `${pathname}/cabin-${querySlug}`,
              query: saveQuery,
            }
          } else if (item.type === 'radio') {
            delete saveQuery[item.param]
            newRoute = {
              pathname: `${pathname}/${querySlug}`,
              query: saveQuery,
            }
          } else {
            newRoute = {
              pathname: `${pathname}/${querySlug}`,
              query: saveQuery,
            }
          }
        }
      }

      if (shouldResetCompilation) {
        delete saveQuery.slug
        newRoute = {
          pathname: pathname.replace('[slug]', ''),
          query: saveQuery,
        }
      }
      newRoute?.query?.page && delete newRoute.query.page
      router.push(newRoute, undefined, { shallow: true })
    }
  }

  const getValue = (item) => {
    return (
      values?.[item.param] === item.name ||
      (Array.isArray(values?.[item.param]) &&
        values?.[item.param]?.includes(item.name))
    )
  }

  const setValues = (values) => {
    if (values.slug && values.slug.search(/^[1234]$/) !== -1) {
      const cabin = values.slug
      delete values.slug
      const newPathname = pathname.replace('[slug]', `cabin-${cabin}`)
      router.push({ pathname: newPathname, query: values }, undefined, {
        shallow: true,
      })
    } else {
      if(values.charter === 'day' || !values.charter) {
        router.push({ pathname, query: values }, undefined, { shallow: false })
      }
      router.push({ pathname, query: values }, undefined, { shallow: true })
    }
  }

  const reset = () => {
    router.push(
      {
        pathname: pathname.replace('[slug]', ''),
      },
      undefined,
      {
        shallow: true,
      }
    )
  }

  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')
  const filterStatic = useTranslation('yachtsFiltersStatic')
  charterFilter[0].items.map(
    (item, index) => (item.name = filterStatic.charterType[index].title)
  )

  const hideFilterOnStartShipyards = values.letter === 'ABC'

  return (
    <CatalogFilterContext.Provider value={{ wrapper: wrapperRef }}>
      <StyledTitleMob isActive={isFiltersShown}>
        {yachtCatalogStatic.filter.mobileTitle}
        <StyledClose width={24} onClick={closeFilters} />
      </StyledTitleMob>
      {!tablet && withCompilations && (
        <CatalogTags
          onClick={onChange}
          tags={filterItems.filter(
            (item) =>
              item.isCompilation &&
              !item.hidden &&
              values[item.param] !== item.slug &&
              !values[item.param]?.includes(item.slug) &&
              item.type === 'tag'
          )}
        />
      )}
      <StyledWrapper ref={wrapperRef} isActive={isFiltersShown}>
        <StyledCatalogFiltersWrapper>
          {withCharter && (
            <CatalogFilters
              filters={charterFilter}
              more={more}
              filtersNumber={1}
              resetItem={resetItem}
              onChange={onChange}
              getValue={getValue}
              setValues={setValues}
              isItemDisabled={isItemDisabled}
            />
          )}
          <CatalogFilters
            currentCompilation={currentCompilation}
            filters={filterItems}
            more={more}
            filtersNumber={filtersNumber}
            resetItem={resetItem}
            onChange={onChange}
            getValue={getValue}
            setValues={setValues}
            isFilterDisabled={isFilterDisabled}
          />
          <StyledMoreWrapper>
            {filterItems.length > filtersNumber &&
              !isFilterDisabled &&
              (more ? (
                <StyledMore onClick={hideMore}>
                  {yachtCatalogStatic.filter.hide}
                  <StyledArrow inverted />
                </StyledMore>
              ) : (
                <StyledMore onClick={showMore}>
                  {yachtCatalogStatic.filter.more}
                  <StyledArrow inverted={false} />
                </StyledMore>
              ))}
            {filtersCount > 0 && !hideFilterOnStartShipyards && (
              <StyledReset onClick={reset}>
                {yachtCatalogStatic.filter.reset} {filtersCount}{' '}
                {getNoun(filtersCount, ...yachtCatalogStatic.filter.filters)}
              </StyledReset>
            )}
          </StyledMoreWrapper>
        </StyledCatalogFiltersWrapper>
        <StyledResetMobWrapper>
          <StyledResetMob ref={filters} onClick={reset}>
            {yachtCatalogStatic.filter.mobileReset}
          </StyledResetMob>
          <StyledApplyMob onClick={closeFilters}>
            {yachtCatalogStatic.filter.mobileApply}
          </StyledApplyMob>
        </StyledResetMobWrapper>
      </StyledWrapper>
      <StyledActiveFiltersMob isExtraShown>
        {filterItems
          .filter((item) => item.type === 'toggle' || item.type === 'tag')
          .map((item, index) => {
            const value = {
              name: item.slug,
              param: item.param,
              type: item.type,
            }
            return (
              <Toggle
                key={`${item.slug}-${index}`}
                quantity={item.quantity}
                name={item.title}
                checked={getValue(value)}
                onChange={() => onChange(value)}
              />
            )
          })}
      </StyledActiveFiltersMob>
    </CatalogFilterContext.Provider>
  )
}

export default memo(CatalogFiltersWrapper)
