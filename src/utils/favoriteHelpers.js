import Cookies from 'js-cookie'

export const toggleIsFavorite = (key, value) => {
  if (getIsFavorite(key, value)) {
    const cookieValue = JSON.parse(Cookies.get(key))
    Cookies.set(
      key,
      cookieValue.filter((item) => item !== value)
    )
  } else {
    let cookieValue = []
    try {
      cookieValue = JSON.parse(Cookies.get(key))
    } catch (error) {}
    Cookies.set(key, [value, ...cookieValue])
  }
}

export const getIsFavorite = (key, value) => {
  const cookieValue = Cookies.get(key)
  if (cookieValue && JSON.parse(cookieValue)?.includes(value)) {
    return true
  }
  return false
}
