import React from 'react'
import { useQuery } from '@apollo/client'
import { yachtsFiltersStatic } from 'config/static/yachtsFilters'
import { initializeApollo } from 'graphql/apollo'
import { GET_LOCATIONS } from 'graphql/query/Locations'
import {
  GET_CHARTER_YACHTS_LIST,
  GET_YACHTS_PAGE_BY_TYPE,
  GET_CHARTER_YACHTS_PAGINATION,
  GET_FAVORITE_LOCATIONS,
  GET_YACHTS_QUANTITY,
} from 'graphql/query/Yachts_Charter'
import { GET_YACHT_CHARTER } from 'graphql/query/Yacht_Charter'

import nextCookies from 'next-cookies'
import { currencyKey, lengthUnitKey } from 'utils/context/DataContext'
import { splitRange } from 'utils/paramsHelpers'
import {
  getCharterFilterItems as getFilterItems,
  setFiltersVariables,
} from 'utils/filterHelpers'
import { sortsStatic } from 'config/static/sortFilters'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { detailYachtStatic } from 'config/static/detailYacht'
import { yachtCardStatic } from 'config/static/yachtCard'
import { sliderStatic } from 'config/static/slider'
import { charterFaqStatic } from 'config/static/charterFaq'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { homeStatic } from 'config/static/home'
import { yachtCatalogStatic } from 'config/static/yachtCatalog'
import { spoilerStatic } from 'config/static/spoiler'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { rangeInput } from 'config/static/rangeInput'
import { locationSearch } from 'config/static/locationSearch'
import { getFooterData } from 'utils/getFooterData'
import {
  GET_CHARTERS_YACHT_META,
  YACHT_META_ITEMS,
} from 'graphql/query/Yacht_Meta.js'
import { detailHeaderStatic } from '../../config/static/detailHeader'
import { notFoundStatic } from '../../config/static/notFound'
import { lengthMap } from 'utils/lengthMap'
import CharterLayoutYacht from 'layouts/CharterLayoutYacht'
import CharterLayoutListing from 'layouts/CharterLayoutListing'

const limit = 12

const CharterCatalog = ({ initialProps }) => {
  const { pageType } = initialProps
  return pageType === 'yacht' ? (
    <CharterLayoutYacht initialProps={initialProps} />
  ) : (
    <CharterLayoutListing initialProps={initialProps} />
  )
}

CharterCatalog.translation = {
  ...getTranslations({
    detailYachtStatic: detailYachtStatic,
    yachtCardStatic: yachtCardStatic,
    detailHeaderStatic: detailHeaderStatic,
    yachtCatalogStatic: yachtCatalogStatic,
    sortsStatic: sortsStatic,
    sliderStatic: sliderStatic,
    feedbackFormStatic: feedbackFormStatic,
    yachtsFiltersStatic: yachtsFiltersStatic,
    charterFaqStatic: charterFaqStatic,
    homeStatic: homeStatic,
    spoiler: spoilerStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    notificationStatic: notificationStatic,
    rangeInput: rangeInput,
    locationSearch: locationSearch,
    notFoundStatic: notFoundStatic,
  }),
}

export async function getServerSideProps(ctx) {

  const { query, locale } = ctx
  const { slug } = query
  const apolloClient = initializeApollo(ctx)
  const currencyUnit = nextCookies(ctx)[currencyKey] || 'USD'
  const lengthUnit = nextCookies(ctx)[lengthUnitKey] || 'm'
  const initialProps = {}
  const type =
    query.charter === 'week'
      ? 'rent_week'
      : query.charter === 'day'
        ? 'rent_day'
        : 'rent_week'
  initialProps.type = type
  const page = query.page ? Number(query.page) : 1

  const filtersVariables = {
    price: splitRange(query.price, true),
    price_type: currencyUnit,
    length: splitRange(query.length),
    length_type: lengthUnit,
    tags: query.tag,
    year_built: splitRange(`${query.year},${query.year}`),
    shipyards: query.shipyard,
    body: query.body,
    conditions: query.condition,
    speeds: splitRange(query.speed),
    guests: query.guest,
    query: query.search,
    sort: query.sort,
    type,
    locations: query.location || [],
    limit,
    page,
  }

  // Запросы
  const footerItems = await getFooterData(apolloClient)
  initialProps.footerItems = footerItems

  const { data: yachtData } = await apolloClient.query({
    query: GET_YACHT_CHARTER,
    variables: {
      slug,
      type,
    },
  })

  if (yachtData.yachts.total === 1) {
    initialProps.pageType = 'yacht'
    initialProps.detailYacht = yachtData.yachts.data[0]
    const { data: SEOData } = await apolloClient.query({
      query: GET_YACHT_CHARTER,
      variables: {
        slug,
        type: 'rent',
      },
    })
    initialProps.SEOData = SEOData

    return {
      props: {
        initialProps,
      },
    }
  }

  const {
    data: { yacht_meta_items: metaPagesData },
  } = await apolloClient.query({
    query: YACHT_META_ITEMS,
  })
  initialProps.metaPagesData = metaPagesData

  const { data: yachtsByType } = await apolloClient.query({
    query: GET_YACHTS_PAGE_BY_TYPE,
    variables: { type },
  })
  initialProps.yachtsByType = yachtsByType

  const { data: favoriteLocations } = await apolloClient.query({
    query: GET_FAVORITE_LOCATIONS,
  })
  initialProps.favoriteLocations = favoriteLocations

  const {
    data: { locations: charterLocations },
  } = await apolloClient.query({
    query: GET_LOCATIONS,
  })
  initialProps.charterLocations = charterLocations

  const { data: quantityData } = await apolloClient.query({
    query: GET_YACHTS_QUANTITY,
    variables: { type: 'rent_day' },
  })
  initialProps.quantityData = quantityData
  // Запросы: END

  const filters = yachtsByType.page_yachts.filter
  initialProps.filters = filters

  const filterItems = getFilterItems(
    filters,
    charterLocations,
    locale,
    currencyUnit,
    lengthUnit,
    favoriteLocations,
    metaPagesData
  )
  initialProps.filterItems = filterItems

  if (lengthMap[query.slug]) {
    query.slug = lengthMap[query.slug]
  }

  const isCompilationPage = filterItems
    .map((item) => item.slug)
    .includes(query.slug)

  if (isCompilationPage) {
    const compilationData = isCompilationPage
      ? filterItems.find((item) => item.slug === query.slug)
      : null
    const metaVariables = {
      filter: compilationData?.type,
      value: compilationData?.slug,
    }
    if (filterItems) {
      const compilationFilters = setFiltersVariables(
        filtersVariables,
        filterItems,
        query
      )
      if (metaVariables.filter === 'body') {
        metaVariables.filter = 'material'
      }
      const {
        data: metaData = { yacht_meta: null },
      } = await apolloClient.query({
        query: GET_CHARTERS_YACHT_META,
        variables: metaVariables,
        skip: !isCompilationPage || compilationData.type === 'body',
      })
      if (!metaData?.yacht_meta) {
        return {
          notFound: true,
        }
      }
      initialProps.metaData = metaData

      const { data: charterYachtsList } = await apolloClient.query({
        query: GET_CHARTER_YACHTS_LIST,
        variables: compilationFilters,
      })

      initialProps.charterYachtsList = charterYachtsList
      const { data: charterYachtsPagination } = await apolloClient.query({
        query: GET_CHARTER_YACHTS_PAGINATION,
        variables: { ...filtersVariables, limit },
      })
      initialProps.charterYachtsPagination = charterYachtsPagination

      return {
        props: { initialProps },
      }
    }
  }

  return {
    notFound: true,
  }
}

export default CharterCatalog