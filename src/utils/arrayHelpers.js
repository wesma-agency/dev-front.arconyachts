export function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()]
}

export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}