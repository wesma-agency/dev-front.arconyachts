import React, { useEffect, useRef, useState } from 'react'
import { useClickOutside } from 'utils/useClickOutside'
import { useTranslation } from 'utils/useTranslation'
import {
  StyledActiveItem,
  StyledArrow,
  StyledCurrenciesDrop,
  StyledItem,
  StyledSortDrop,
  StyledWrapper,
} from './CatalogSortMob.styled'

const CatalogSortMob = ({
  activeSort,
  activeCurrency,
  setActiveCurrency,
  setActiveSort,
  withCurrencies = true,
}) => {
  const { currencies, sorts, sortStatic } = useTranslation('sortsStatic')
  const [isOpenedSort, setIsOpenedSort] = useState(false)
  const [isOpenedCurrencies, setIsOpenedCurrencies] = useState(false)
  const sortRef = useRef(null)
  const currencyRef = useRef(null)
  const closeSort = () => setIsOpenedSort(false)
  const closeCurrencies = () => setIsOpenedCurrencies(false)
  useClickOutside([sortRef], closeSort)
  useClickOutside([currencyRef], closeCurrencies)
  useEffect(() => {
    closeCurrencies()
  }, [activeCurrency])
  useEffect(() => {
    closeSort()
  }, [activeSort])

  const mobileSorts = sorts.reduce(
    (value, item) => [...value, ...item.value],
    []
  )

  return (
    <StyledWrapper>
      <StyledActiveItem
        ref={sortRef}
        onClick={() => setIsOpenedSort(!isOpenedSort)}
      >
        {mobileSorts.filter((item) => item.slug === activeSort)?.[0]
          ?.mobileTitle || sortStatic.mobileDefault}
        <StyledArrow isActive={isOpenedSort} />
        {isOpenedSort && (
          <StyledSortDrop onClick={(e) => e.stopPropagation()}>
            {mobileSorts.map((item, i) => (
              <StyledItem key={i} onClick={(e) => setActiveSort(item.slug)}>
                {item.mobileTitle}
              </StyledItem>
            ))}
          </StyledSortDrop>
        )}
      </StyledActiveItem>
      {withCurrencies && (
        <StyledActiveItem
          ref={currencyRef}
          onClick={() => setIsOpenedCurrencies(!isOpenedCurrencies)}
        >
          {
            currencies.filter((currency) => currency.type === activeCurrency)[0]
              .title
          }
          <StyledArrow isActive={isOpenedCurrencies} />
          {isOpenedCurrencies && (
            <StyledCurrenciesDrop onClick={(e) => e.stopPropagation()}>
              {currencies.map((item, i) => (
                <StyledItem
                  key={item.type}
                  onClick={(e) => setActiveCurrency(item.type)}
                >
                  {item.mobileTitle}
                </StyledItem>
              ))}
            </StyledCurrenciesDrop>
          )}
        </StyledActiveItem>
      )}
    </StyledWrapper>
  )
}

export default CatalogSortMob
