export const getLengthByString = (str) => {
  const [from, to] = str.split(',')
  return [Number(from), Number(to)]
}
