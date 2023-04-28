import { yachtsFiltersStatic as getFiltersStatic } from 'config/static/yachtsFilters'
import { getUniqueListBy } from 'utils/arrayHelpers'
import { sortsStatic as getSorts } from 'config/static/sortFilters'
import { yachtsFiltersStatic as getYachtsFiltersStatic } from 'config/static/yachtsFilters'
import { transformLocation } from 'utils/transformLocations'
import { yachtCatalogStatic } from 'config/static/yachtCatalog'
import { getLengthByString } from './getLengthByString'
import { lengthMap } from './lengthMap'

const yachtsText = yachtCatalogStatic(true).search.caption
const TagYachtMap = {
  // elitnaya: `Элитные${yachtsText}`,
  // 'mega-yahta': `Мега-Яхты`,
  // alyuminievaya: `Алюминиевые${yachtsText}`,
  // stalnaya: `Стальные${yachtsText}`,
  // malenkaya: `Маленькие${yachtsText}`,
  // eksplorer: `Эксплорер${yachtsText}`,
  // trauler: `Траулер${yachtsText}`,
}
const dockingType = {
  material: 'body',
  condition: 'condition',
  length: 'length',
  location: 'location',
  cabin: 'cabin',
  tag: 'tag',
  shipyard: 'shipyard',
  year: 'year',
}

const hiddenTags = new Set(['steel', 'fiberglass', 'wood', 'aluminium'])

export const setFiltersVariables = (
  filtersVariables,
  filterItems = [],
  query
) => {
  const mutatedFiltersVariables = {...filtersVariables}
  const compilationItems = filterItems.filter((item) => item.isCompilation)

  const currentCompilation = compilationItems.find(
    (item) =>
      item.slug === query.slug.replace('cabin-', '') ||
      (item.slug === lengthMap[query.slug] && item.type === 'length')
  )
  // debugger
  if (currentCompilation){
    switch (currentCompilation.type) {
      case 'cabin':
        if (filtersVariables.cabins) {
          if (typeof filtersVariables.cabins === 'string') {
            mutatedFiltersVariables.cabins = [
              currentCompilation.slug.replace('cabin-', ''),
              filtersVariables.cabins,
            ]
          } else {
            mutatedFiltersVariables.cabins = [
              currentCompilation.slug.replace('cabin-', ''),
              ...filtersVariables.cabins,
            ]
          }
        } else {
          mutatedFiltersVariables.cabins = currentCompilation.slug.replace(
            'cabin-',
            ''
          )
        }
        break
      case 'tag':
        mutatedFiltersVariables.tags = query.slug
        break
      case 'length':
        mutatedFiltersVariables.length = getLengthByString(
          currentCompilation.slug
        )
        break
      case 'condition':
        mutatedFiltersVariables.conditions = currentCompilation.slug
        break
      case 'body':
        mutatedFiltersVariables.body = currentCompilation.slug
        break
      case 'shipyard':
        if (filtersVariables.shipyards) {
          if (typeof filtersVariables.shipyards === 'string') {
            mutatedFiltersVariables.shipyards = [
              currentCompilation.slug,
              filtersVariables.shipyards,
            ]
          } else {
            mutatedFiltersVariables.shipyards = [
              currentCompilation.slug,
              ...filtersVariables.shipyards,
            ]
          }
        } else {
          mutatedFiltersVariables.shipyards = currentCompilation.slug
        }
        break
      case 'location':
        if (filtersVariables.locations) {
          if (typeof filtersVariables.locations === 'string') {
            mutatedFiltersVariables.locations = [
              currentCompilation.slug,
              filtersVariables.locations,
            ]
          } else {
            mutatedFiltersVariables.locations = [
              currentCompilation.slug,
              ...filtersVariables.locations,
            ]
          }
        } else {
          mutatedFiltersVariables.locations = currentCompilation.slug
        }
        break
      case 'year':
        if (filtersVariables.year_built) {
          mutatedFiltersVariables.year_built = [
            +currentCompilation.slug,
            +currentCompilation.slug,
          ]
        }
        break
    }
}
  return mutatedFiltersVariables
}

const getYachtLengths = (lengthMax, locale = 'ru') => {
  return [
    {
      name: locale === 'ru' ? 'от 0 до 10 метров' : 'up to 10 m',
      slug: ',10',
      compilationSlug: '0-10m',
    },
    {
      name: locale === 'ru' ? 'от 10 до 20 метров' : 'from 10 m up to 20 m',
      slug: '10,20',
      compilationSlug: '10-20m',
    },
    {
      name: locale === 'ru' ? 'от 20 до 30 метров' : 'from 20 m up to 30 m',
      slug: '20,30',
      compilationSlug: '20-30m',
    },
    {
      name: locale === 'ru' ? 'от 30 до 40 метров' : 'from 30 m up to 40 m',
      slug: '30,40',
      compilationSlug: '30-40m',
    },
    {
      name: locale === 'ru' ? 'от 50 до 100 метров' : 'from 50 m up to 100 m',
      slug: '50,100',
      compilationSlug: '50-100m',
    },
    {
      name: locale === 'ru' ? 'от 100 метров' : 'from 100 m',
      slug: '100,' + lengthMax,
      compilationSlug: '100m',
    },
  ]
}

const getFilterYears = (startYear, endYear) => {
  return new Array(Math.abs(endYear - startYear) + 1).fill(``).map((_, i) => {
    const year = String(startYear + i)
    return {
      name: year,
      slug: year,
    }
  })
}

export const getSaleFilterItems = (
  filters,
  locale,
  currency,
  length,
  metaPagesData
) => {
  let yachtsFiltersStatic = getFiltersStatic(locale === 'ru')
  const sortsSatic = getSorts(locale === 'ru')
    .currencies.filter((item) => item.type === currency)
    .map((item) => item.title)?.[0]
  const activePrice = filters.price.filter(
    (item) => item.currency === currency
  )?.[0]
  const activeLength = filters.length.filter(
    (item) => item.unit === length
  )?.[0]
  const metaCompilations = metaPagesData
    ? metaPagesData
        .filter((item) => item.type === 'sale')
        .map((item) => ({
          type: dockingType[item.filter],
          isCompilation: true,
          param: dockingType[item.filter],
          slug: item.value,
          newSlug: item.newVal || null,
          title: item.name,
          hidden: true,
          compilationText: item.pageTitle || null,
        }))
    : []
  const yachtLengths = getYachtLengths(activeLength.max, locale)
  const years = getFilterYears(filters.year_built[0], filters.year_built[1])
  const filteredTags = filters.tags.filter((item) =>
    metaCompilations.find((meta) => meta.slug === item.slug)
  )
  return [
    {
      type: 'range',
      title: yachtsFiltersStatic.price.title,
      min: activePrice.min,
      max: activePrice.max,
      unit: ` ${sortsSatic}`,
      param: 'price',
    },
    {
      type: 'radio',
      title: yachtsFiltersStatic.length.title,
      items: yachtLengths,
      unit: `${length === 'm' ? ' м' : ' ft'}`,
      param: 'length',
      isCompilation: true,
      hidden: true,
    },
    {
      type: 'radio',
      title: yachtsFiltersStatic.builtYear.title,
      items: years,
      unit: yachtsFiltersStatic.builtYear.unit,
      param: 'year',
      yearActiveTitle: true,
      isCompilation: true,
    },
    {
      type: 'checkbox',
      title: yachtsFiltersStatic.shipyards.title,
      activeTitle: yachtsFiltersStatic.shipyards.activeTitle,
      items: filters.shipyards.map((shipyard) => ({
        name: shipyard.name,
        slug: shipyard.slug,
      })),
      param: 'shipyard',
    },

    {
      type: 'checkbox',
      title: yachtsFiltersStatic.material.title,
      activeTitle: yachtsFiltersStatic.material.activeTitle,
      items: filters.body.map((material) => ({
        name: material.name,
        slug: material.slug,
      })),
      param: 'body',
      isCompilation: true,
    },
    {
      type: 'checkbox',
      title: yachtsFiltersStatic.condition.title,
      activeTitle: yachtsFiltersStatic.condition.activeTitle,
      isSingleActive: true,
      items: filters.conditions.map((condition) => ({
        name: condition.value,
        slug: condition.key,
      })),
      param: 'condition',
      isCompilation: true,
      hidden: true,
    },
    {
      type: 'range',
      title: yachtsFiltersStatic.speed.title,
      min: filters.speeds[0],
      max: filters.speeds[1],
      unit: yachtsFiltersStatic.speed.unit,
      param: 'speed',
    },
    {
      type: 'checkbox',
      title: yachtsFiltersStatic.cabin.title,
      activeTitle: yachtsFiltersStatic.cabin.activeTitle,
      items: filters.cabins.map((cabin) => ({
        name: cabin.value,
        slug: cabin.key,
      })),
      param: 'cabin',
    },
    ...getUniqueListBy(
      filteredTags
        .map((item) => ({
          type: 'tag',
          title: item.name,
          slug: item.slug,
          param: 'tag',
          compilationText: TagYachtMap[item.slug] || null,
          count: item.yachts_count,
          isCompilation: true,
        }))
        .filter((item) => !hiddenTags.has(item.slug)),
      'slug'
    ),
    ...metaCompilations,
  ]
}

export const getCharterFilterItems = (
  filters,
  locations,
  isRussian,
  currency,
  length,
  favoriteLocationsData,
  metaPagesData
) => {
  const yachtsFiltersStatic = getYachtsFiltersStatic(isRussian === 'ru')
  const sortsStatic = getSorts(isRussian)
    .currencies.filter((item) => item.type === currency)
    .map((item) => item.title)?.[0]
  const activePrice = filters.price.filter(
    (item) => item.currency === currency
  )?.[0]

  const activeLength = filters.length.filter(
    (item) => item.unit === length
  )?.[0]

  // META
  const metaCompilations = metaPagesData
    ? metaPagesData
        .filter((item) => item.type === 'rent')
        .map((item) => ({
          type: dockingType[item.filter],
          isCompilation: true,
          param: dockingType[item.filter],
          slug: item.value,
          title: item.name,
          hidden: true,
          compilationText: item.pageTitle || null,
          isMeta: true,
        }))
    : []
  const yachtLengths = getYachtLengths(activeLength.max, isRussian)
  const years = getFilterYears(filters.year_built[0], filters.year_built[1])
  const filteredTags = filters.tags.filter((item) =>
    metaCompilations.find((meta) => meta.slug === item.slug)
  )
  return [
    {
      type: 'location',
      title: yachtsFiltersStatic.location.title,
      activeTitle: yachtsFiltersStatic.location.activeTitle,
      isSingleActive: true,
      items: locations.map(transformLocation),
      favorites: favoriteLocationsData.favorite_locations,
      param: 'location',
    },
    {
      type: 'range',
      title: yachtsFiltersStatic.price.title,
      min: activePrice.min,
      max: activePrice.max,
      unit: ` ${sortsStatic}`,
      param: 'price',
    },
    {
      type: 'checkbox',
      title: yachtsFiltersStatic.condition.title,
      activeTitle: yachtsFiltersStatic.condition.activeTitle,
      items: filters.conditions.map((condition) => ({
        name: condition.value,
        slug: condition.key,
      })),
      isSingleActive: true,
      param: 'condition',
      isCompilation: true,
    },
    {
      type: 'radio',
      title: yachtsFiltersStatic.length.title,
      items: yachtLengths,
      unit: `${length === 'm' ? ' м' : ' ft'}`,
      param: 'length',
      isCompilation: true,
    },
    {
      type: 'radio',
      title: yachtsFiltersStatic.guests.title,
      activeTitle: yachtsFiltersStatic.guests.activeTitle,
      items: filters.guests.map((guest) => ({
        name: guest.value,
        slug: guest.key,
      })),
      param: 'guest',
    },
    {
      type: 'radio',
      title: yachtsFiltersStatic.builtYear.title,
      items: years,
      unit: yachtsFiltersStatic.builtYear.unit,
      param: 'year',
      yearActiveTitle: true,
    },
    {
      type: 'checkbox',
      title: yachtsFiltersStatic.shipyards.title,
      activeTitle: yachtsFiltersStatic.shipyards.activeTitle,
      items: filters.shipyards.map((shipyard) => ({
        name: shipyard.name,
        slug: shipyard.slug,
      })),
      param: 'shipyard',
    },
    {
      type: 'checkbox',
      title: yachtsFiltersStatic.material.title,
      activeTitle: yachtsFiltersStatic.material.activeTitle,
      items: filters.body.map((material) => ({
        name: material.name,
        slug: material.slug,
      })),
      param: 'body',
      isCompilation: true,
      hidden: true,
    },
    {
      type: 'range',
      title: yachtsFiltersStatic.speed.title,
      min: filters.speeds[0],
      max: filters.speeds[1],
      unit: yachtsFiltersStatic.speed.unit,
      param: 'speed',
    },
    ...getUniqueListBy(
      filteredTags.map((item) => ({
        type: 'tag',
        title: item.name,
        slug: item.slug,
        param: 'tag',
        compilationText: TagYachtMap[item.slug] || null,
        count: item.yachts_count,
        isCompilation: true,
      })),
      'slug'
    ),
    ...metaCompilations,
  ]
}
