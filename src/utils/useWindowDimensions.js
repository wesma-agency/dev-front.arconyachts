import { useEffect, useState, useCallback } from 'react'

export default function useWindowDimensions() {
  const getWindowDimensions = useCallback(() => {
    const hasWindow = typeof window !== 'undefined'
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null
    return {
      width,
      height,
    }
  }, [])

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
