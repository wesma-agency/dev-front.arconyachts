import { shipyardCatalogStatic } from 'config/static/shipyradCatalog'
import React from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import CatalogFilters from '../../CatalogPage/CatalogFilters'
import {
  CardsWrapper,
  LetterButton,
  LetterItem,
  LettersList,
  NotFound,
  StyledCard,
} from './ShipyardCatalogFilter.styled'
import { useRouter } from 'next/router'
import { PATH } from 'config/path'
import { useTranslation } from 'utils/useTranslation'

const ShipyardCatalogFilter = ({
  isMenuOpened,
  onMenuClick,
  shipyardsList,
  defaultShipyards,
  filterItems,
}) => {
  const { phablet } = useBreakpoint()
  const router = useRouter()
  const { query } = router

  const setValues = (value) =>
    router.push(
      { pathname: PATH.SHIPYARDS, query: { letter: value } },
      undefined,
      {
        shallow: true,
      }
    )

  const shipyardCatalogStatic = useTranslation('shipyardCatalogStatic')
  return (
    <>
      <CatalogFilters
        closeFilters={onMenuClick}
        isFiltersShown={isMenuOpened}
        filtersNumber={7}
        pathname={PATH.SHIPYARDS}
        filterItems={filterItems}
        filtersArray={['location', 'letter']}
        arrayParams={['location']}
      />
      <LettersList>
        {shipyardCatalogStatic.filter.chars.map((letter, index) => {
          const isActive =
            query.letter && query.letter.includes(letter.toUpperCase())
          return (
            <LetterItem key={letter + index} onClick={() => setValues(letter)}>
              <LetterButton isActive={isActive && 'active'}>
                {letter}
              </LetterButton>
            </LetterItem>
          )
        })}
      </LettersList>
      {shipyardsList.length < 1 && (
        <NotFound>{shipyardCatalogStatic.notFound}</NotFound>
      )}
      <CardsWrapper>
        {shipyardsList.length < 1 &&
          defaultShipyards.map((item) => (
            <StyledCard
              key={item.id}
              withBorder={shipyardsList.length > 3}
              {...item}
            />
          ))}
        {!phablet &&
          shipyardsList.length > 0 &&
          shipyardsList.map((item) => (
            <StyledCard
              key={item.id}
              withBorder={shipyardsList.length > 3}
              {...item}
            />
          ))}
        {phablet &&
          shipyardsList.length > 0 &&
          shipyardsList.map((item) => (
            <StyledCard withoutPadding key={item.id} {...item} />
          ))}
      </CardsWrapper>
    </>
  )
}

export default ShipyardCatalogFilter
