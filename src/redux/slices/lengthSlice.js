import { createSlice } from '@reduxjs/toolkit'
import { LengthUnitType } from 'utils/context/DataContext'

export const lengthSlice = createSlice({
  name: 'length',
  initialState: 'm',
  reducers: {
    setLength: (state, action) => {
      if (LengthUnitType.includes(action.payload)) {
        return action.payload
      }
      return state
    },
  },
})

export const { setLength } = lengthSlice.actions

export default lengthSlice.reducer
