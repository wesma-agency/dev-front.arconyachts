import { createContext } from 'react'

const noop = () => {}
export const FiltersContext = createContext({
  filter: {},
  setFilter: noop,
  filterItems: [],
  filtersCount: 0,
  setFiltersCount: noop,
})
