export default function throttle(func, ms) {
  let isThrottled = false
  let savedArgs = false
  let savedThis = false

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments
      savedThis = this
      return
    }

    func.apply(this, arguments) // (1)

    isThrottled = true

    setTimeout(() => {
      isThrottled = false // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }

  return wrapper
}
