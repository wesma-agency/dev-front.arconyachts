import { useEffect, useState } from 'react'
import getCoords from './getCoords'
import useWindowDimensions from './useWindowDimensions'

export const useOffset = (ref) => {
  const { width } = useWindowDimensions()
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  useEffect(() => {
    if (ref.current) {
      const coords = getCoords(ref.current)
      setLeft(coords.left)
      setTop(coords.top)
    }
  }, [width, ref])
  return { left, top }
}
