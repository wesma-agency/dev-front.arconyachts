import { createSlice } from '@reduxjs/toolkit'
import { CurrencyType } from 'utils/context/DataContext'

export const currencySlice = createSlice({
  name: 'currency',
  initialState: 'USD',
  reducers: {
    setCurrency: (state, action) => {
      if (CurrencyType.includes(action.payload)) {
        state = action.payload
      }
      return state
    },
  },
})

export const { setCurrency } = currencySlice.actions

export default currencySlice.reducer
