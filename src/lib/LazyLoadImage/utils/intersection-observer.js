function IntersectionObserver() {
  return (
    typeof window !== 'undefined' &&
    'IntersectionObserver' in window &&
    'isIntersecting' in window.IntersectionObserverEntry.prototype
  )
}

export default IntersectionObserver
