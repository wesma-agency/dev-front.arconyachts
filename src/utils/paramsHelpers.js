export const hasParam = (value, query) => {
  if (Array.isArray(query)) {
    return (
      query.filter((i) => i.toLowerCase() === value.toLowerCase()).length > 0
    )
  } else {
    return query?.toLowerCase() === value.toLowerCase()
  }
}

export const toggleParam = (value, param, query) => {
  let result = { ...query }

  const prevQueryParam = result[param]
  if (prevQueryParam) {
    if (Array.isArray(prevQueryParam)) {
      if (prevQueryParam.filter((i) => i === value).length > 0) {
        result[param] = prevQueryParam.filter((i) => i !== value)
      } else {
        result[param] = [...prevQueryParam, value]
      }
    } else {
      if (prevQueryParam === value) {
        delete result[param]
      } else {
        result[param] = [prevQueryParam, value]
      }
    }
  } else {
    result[param] = value
  }

  return result
}

export const splitRange = (param, isString) => {
  const params = param?.split(',')
  if (isString) {
    return params && params.length > 0 ? [params[0], params[1]] : undefined
  }
  return params && params.length > 0 ? [+params[0], +params[1]] : [0, 0]
}

export const toggleQueryParam = (value, param, query) => {
  const result = { ...query }
  if (value) {
    result[param] = value
  } else {
    delete result[param]
  }
  return result
}

export const removeParam = (obj, param) => {
  const res = { ...obj }
  delete res[param]
  return res
}

export const charterValues = [
  // 'charter',
  'price',
  'length',
  'guest',
  'year',
  'shipyard',
  'body',
  'condition',
  'speed',
  'tag',
  'slug',
  'location',
]

export const saleValues = [
  'price',
  'length',
  'year',
  'shipyard',
  'body',
  'condition',
  'speed',
  'cabin',
  'tag',
  'slug',
]

export const removeParams = (query, params = [...charterValues, 'page']) => {
  const res = { ...query }
  for (const param of params) {
    delete res[param]
  }
  return res
}

export const getFilterValues = (input, arrayParams = charterValues) => {
  let query = {}
  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      const element = input[key]
      if (arrayParams.includes(key)) {
        query[key] = element
      }
    }
  }
  return query
}

export const getParamsCount = (
  query,
  arrayValues = charterValues,
  arrayParams = ['tag']
) => {
  let count = 0
  for (const key in query) {
    if (query.hasOwnProperty(key)) {
      const param = query[key]
      if (arrayValues.includes(key)) {
        if (Array.isArray(param)) {
          if (param.length === 1) {
            count += param.length
          } else {
            arrayParams.includes(key) ? (count += param.length) : (count += 1)
          }
        } else {
          count += 1
        }
      }
    }
  }
  return count
}
