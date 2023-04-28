import { useEffect, useState } from 'react'

const cookieConfirm = 'cookieConfirm'

export const useShowCookies = () => {
  const [showCookie, setShowCookie] = useState(false)
  useEffect(() => {
    const confirmed = localStorage.getItem(cookieConfirm)
    if (!confirmed) {
      setTimeout(() => setShowCookie(true), 2500)
    }
  }, [])

  const close = () => setShowCookie(false)
  const onButtonClick = () => {
    localStorage.setItem(cookieConfirm, true)
    close()
  }
  return { close, onButtonClick, showCookie, setShowCookie }
}
