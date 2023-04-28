const getCanonical = (router) => {
  const { query, locale, asPath, route } = router
  const hostname = 'new.arconyachts.com'
  const protocol = 'https'
  // Check on 404
  if (route === '/404') return `${protocol}://${hostname}${route}`
  // End
  const currentPath = asPath.replace(/\?.+/, '')
  const currentLocale = locale === 'en' ? '' : '/ru'
  const canonical = [protocol, '://', hostname, currentLocale, currentPath]
  const page = query.page && `?page=${query.page}`
  if (page && canonical[canonical.length - 1] !== '/') {
    canonical.push(page)
  }
  if (canonical[canonical.length - 1] === '/') {
    canonical.pop()
  }
  return canonical.join('')
}

export default getCanonical
