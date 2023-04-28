export const divideFilter = (items, cb) => {
  const yes = []
  const no = []

  items.map((item) => {
    if (cb(item)) {
      yes.push(item)
    } else {
      no.push(item)
    }
  })
  return [yes, no]
}
