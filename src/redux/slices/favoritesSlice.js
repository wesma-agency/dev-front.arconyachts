import { createSlice } from '@reduxjs/toolkit'

export const favoritesInitial = {
  sale: [],
  'charter-week': [],
  'charter-day': [],
  project: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitial,
  reducers: {
    toggleFavorite: (state, action) => {
      const { type, slug } = action.payload
      const hasValue = state[type].filter((item) => item === slug)
      if (hasValue.length > 0) {
        state[type] = state[type].filter((item) => item !== slug)
      } else {
        state[type].push(slug)
      }
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
