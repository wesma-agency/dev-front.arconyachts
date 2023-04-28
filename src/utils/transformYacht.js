export function priceFormat(price, withCurrency = true) {
  if (!price) return null
  const priceWithSpaces = price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0')
  return withCurrency ? `${priceWithSpaces}` : priceWithSpaces
}

export const getPrices = (object) => {
  if (object.type === 'sale') {
    return {
      EUR: `${priceFormat(object.cost_euro)}`,
      // EUR: `${priceFormat(object.cost_euro)} €`,
      USD: `${priceFormat(object.cost_dollar)}`,
      // USD: `${priceFormat(object.cost_dollar)} $`,
      GBP: `${priceFormat(object.cost_pound)}`,
      // GBP: `${priceFormat(object.cost_pound)} £`,
      RUB: `${priceFormat(object.cost_ruble)}`,
      // RUB: `${priceFormat(object.cost_ruble)} ₽`,
    }
  }

  if (object.type === 'charter-week') {
    return {
      EUR: priceFormat(object.rent_week_euro),
      USD: priceFormat(object.rent_week_dollar),
      GBP: priceFormat(object.rent_week_pound),
      RUB: priceFormat(object.rent_week_ruble),
    }
  }
  if (object.type === 'charter-day') {
    return {
      EUR: priceFormat(object.rent_day_euro),
      USD: priceFormat(object.rent_day_dollar),
      GBP: priceFormat(object.rent_day_pound),
      RUB: priceFormat(object.rent_day_ruble),
    }
  }
}

const getShowPrice = (yacht) => {
  if (yacht.type === 'sale') {
    return !yacht.is_hide_cost
  } else if (yacht.type === 'charter-week') {
    return !yacht.is_hide_rent_week_cost
  } else if (yacht.type === 'charter-day') {
    return !yacht.is_hide_rent_day_cost
  }
}

const getYear = (yacht) => {
  const isRestored =
    yacht.year_renovation &&
    yacht.year_renovation.length > 0 &&
    yacht.year_renovation[yacht.year_renovation.length - 1] !== yacht.year_built
  return {
    title: `${yacht.year_built} ${isRestored ? '/ ' : ''} ${
      isRestored ? yacht.year_renovation[yacht.year_renovation.length - 1] : ''
    }`,
    isRestored,
  }
}

const getLengths = (yacht, withoutLengthUnit) => {
  return {
    m: yacht.length_m,
    ft: yacht.length_ft,
  }
}

export const transformYacht = (
  yacht,
  initType,
  options = { withoutLengthUnit: false, isRussian: true }
) => {
  let result = { ...yacht }
  let type =
    initType ??
    (yacht.is_sale
      ? 'sale'
      : yacht.is_rent
      ? 'charter'
      : yacht.is_rent_week
      ? 'charter-week'
      : yacht.is_rent_day
      ? 'charter-day'
      : 'project')

  if (type === 'charter' && yacht.is_rent) {
    if (yacht.is_rent_week) {
      result.type = 'charter-week'
    } else if (yacht.is_rent_day) {
      result.type = 'charter-day'
    }
  } else if (type === 'sale') {
    result.type = 'sale'
  } else if (type === 'project') {
    result.type = 'project'
  } else {
    result.type = type
  }
  if (result.type !== 'project') {
    result.prices = getPrices(result)
    result.showPrice = getShowPrice(result)
  } else {
    result.showPrice = false
  }
  const year = getYear(result)
  result.buildDate = year.title
  result.isRestored = year.isRestored
  result.lengths = getLengths(result, options.withoutLengthUnit)
  return result
}
