import { useEffect, useState, useRef } from 'react'
import throttle from './throttle'

export const useHorizontalScroll = (unit = 400) => {
  const [showScrollFade, setShowScrollFade] = useState(false)

  useEffect(() => {
    const onResize = throttle(() => {
      if (tabsWrapper.current && wrapperRef.current) {
        const scroll =
          tabsWrapper.current.scrollWidth - 30 > wrapperRef.current.offsetWidth
        if (scroll) {
          setShowScrollFade({ right: scroll })
        } else {
          setShowScrollFade(false)
        }
      }
    }, 200)
    onResize()
    window.addEventListener('resize', onResize)
  }, [])

  const wrapperRef = useRef(null)
  const tabsWrapper = useRef(null)
  const leftClick = () =>
    tabsWrapper.current.scrollTo({
      left: tabsWrapper.current.scrollLeft - unit,
      behavior: 'smooth',
    })
  const rightClick = () =>
    tabsWrapper.current.scrollTo({
      left: tabsWrapper.current.scrollLeft + unit,
      behavior: 'smooth',
    })
  const onScroll = (e) => {
    setShowScrollFade({
      right:
        e.target.scrollWidth - e.target.scrollLeft - e.target.offsetWidth > 30,
      left: e.target.scrollLeft > 30,
    })
  }

  return {
    showScrollFade,
    wrapperRef,
    tabsWrapper,
    leftClick,
    rightClick,
    onScroll,
  }
}
