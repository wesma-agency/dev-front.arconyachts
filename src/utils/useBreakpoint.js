import { useContext } from 'react'
import { BreakpointContext } from './context/BreakpointContext'

export const useBreakpoint = () => {
  const value = useContext(BreakpointContext)
  return value
}
