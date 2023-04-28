import { createContext } from 'react'

export const BreakpointContext = createContext({
  ultraWide: false,
  fullhd: false,
  notebook: false,
  tablet: false,
  phablet: false,
  mobileLarge: false,
})
