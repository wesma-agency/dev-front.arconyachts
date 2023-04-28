import { createSlice } from '@reduxjs/toolkit'
import isEqual from 'lodash.isequal'

export const filterSlice = createSlice({
  name: 'filters',
  initialState: { values: {}, filterItems: [] },
  reducers: {
    setValues: (state, action) => {
      if (!isEqual(state.values, action.payload)) state.page = 1
      state.values = action.payload

      return state
    },
    resetFilters: (state) => {
      state.values = {}
      state.page = 1
      return state
    },
    setSort: (state, action) => {
      if (!isEqual(state.sort, action.payload)) state.page = 1
      state.sort = action.payload
      return state
    },
    setSearch: (state, action) => {
      if (!isEqual(state.search, action.payload)) state.page = 1
      state.search = action.payload
      return state
    },
    setPage: (state, action) => {
      state.page = action.payload
      return state
    },
  },
})

export const {
  setValues,
  resetFilters,
  setSort,
  setSearch,
  setPage,
} = filterSlice.actions

export default filterSlice.reducer
