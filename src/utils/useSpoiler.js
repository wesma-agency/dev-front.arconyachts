import { useEffect, useState, useRef } from 'react'
import throttle from './throttle'
export const useSpoiler = (ref, defaultOpened = false) => {
  const [height, setHeight] = useState()
  const [showMore, setShowMore] = useState(defaultOpened)

  useEffect(() => {
    if (showMore) {
      if (ref?.current) {
        setHeight(ref.current.offsetHeight)
      }
      if (spoilerRef?.current) {
        setHeight(spoilerRef.current.offsetHeight)
      }
    } else {
      setHeight(0)
    }
  }, [showMore])
  useEffect(() => {
    let width = window.innerWidth
    const closeOnResize = throttle(() => {
      if (window.innerWidth !== width) {
        width = window.innerWidth
        setShowMore(false)
      }
    }, 300)
    window.addEventListener('resize', closeOnResize)
    return () => {
      window.removeEventListener('resize', closeOnResize)
    }
  }, [])
  const spoilerRef = useRef()

  return {
    height,
    spoilerRef,
    isOpened: showMore,
    toggleMore: () => setShowMore(!showMore),
    closeMore: () => setShowMore(false),
    openMore: () => setShowMore(true),
  }
}
