import { useEffect } from 'react'

export const useClickOutside = (refs, handler) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      let count = 0
      refs.map(({ current }) => {
        if (current && !current.contains(e.target)) {
          count++
        }
      })
      if (count === refs.length) {
        handler(e)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [refs, handler])
}
