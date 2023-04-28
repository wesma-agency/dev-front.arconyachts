import { PATH } from 'config/path'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency } from 'redux/slices/currencySlice'
import { removeParam, toggleQueryParam } from 'utils/paramsHelpers'
import { useTranslation } from 'utils/useTranslation'
import {
  StyledArrow,
  StyledConcurrencies,
  StyledCurrency,
  StyledSort,
  StyledSorts,
  StyledWrapper,
} from './CatalogSort.styled'
import CatalogSortMob from './CatalogSortMob'

// import {
//   currencies,
//   sorts as defaultSorts,
//   projectSorts,
// } from 'config/static/sortFilters'

const CatalogSort = ({
  withCurrencies = true,
  pathname = PATH.CHARTER_CATALOG,
  isProject = false,
}) => {
  const { currencies, sorts: defaultSorts, projectSorts } = useTranslation(
    'sortsStatic'
  )

  const { currency: activeCurrency } = useSelector((state) => state)
  const router = useRouter()
  const sort = router.query.sort
  const dispatch = useDispatch()
  const setActiveCurrency = (currency) => dispatch(setCurrency(currency))
  const setActiveSort = (sortSlug) => {
    router.push(
      {
        pathname,
        query: removeParam(
          toggleQueryParam(sortSlug, 'sort', router.query),
          'page'
        ),
      },
      undefined,
      { shallow: true }
    )
  }

  const sorts = !isProject ? defaultSorts : projectSorts

  return (
    <>
      <StyledWrapper>
        <StyledSorts>
          {sorts.map((item, i) => {
            const activeItem = item.value.filter((item) => item.slug === sort)
            const isActive = activeItem.length > 0
            const isAsc = isActive
              ? item.value[0].slug === activeItem[0].slug
              : true
            return (
              <StyledSort
                isActive={isActive && 'active'}
                key={i}
                onClick={() => {
                  if (isActive) {
                    if (i === 0) {
                      setActiveSort(undefined)
                    } else {
                      setActiveSort(
                        item.value[0].slug === activeItem[0].slug
                          ? item.value[1].slug
                          : item.value[1].slug === activeItem[0].slug
                          ? undefined
                          : ''
                      )
                    }
                  } else {
                    setActiveSort(item.value[0].slug)
                  }
                }}
              >
                {item.title}
                {i !== 0 && <StyledArrow isAsc={isAsc && 'asc'} />}
              </StyledSort>
            )
          })}
        </StyledSorts>
        {withCurrencies && (
          <StyledConcurrencies>
            {currencies.map((currency) => (
              <StyledCurrency
                isActive={currency.type === activeCurrency && 'active'}
                key={currency.type}
                onClick={() => setActiveCurrency(currency.type)}
              >
                {currency.title}
              </StyledCurrency>
            ))}
          </StyledConcurrencies>
        )}
      </StyledWrapper>
      <CatalogSortMob
        activeCurrency={activeCurrency}
        setActiveCurrency={setActiveCurrency}
        activeSort={sort}
        setActiveSort={setActiveSort}
        sorts={sorts}
        withCurrencies={withCurrencies}
      />
    </>
  )
}

export default CatalogSort
