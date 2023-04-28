import { useLazyQuery } from '@apollo/client'
import Head from 'next/head'
import CatalogFilters from 'components/CatalogPage/CatalogFilters'
import CatalogList from 'components/CatalogPage/CatalogList'
import { StyledNotFound } from 'components/CatalogPage/CatalogList/CatalogList.styled'
import CatalogSearch from 'components/CatalogPage/CatalogSearch'
import CatalogSort from 'components/CatalogPage/CatalogSort'
import CharterFaq from 'components/CharterPage/CharterFaq'
import YachtSlider from 'components/Slider/YachtSlider'
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
import MainLayout from 'layouts/MainLayout'
import nextCookies from 'next-cookies'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FeedbackModal from 'ui/Modals/FeedbackModal'
import { currencyKey, lengthUnitKey } from 'utils/context/DataContext'
import { removeParams, splitRange } from 'utils/paramsHelpers'
import { transformYacht } from 'utils/transformYacht'
import { useBodyScrollLock } from 'utils/useBodyScrollLock'
import { useClickOutside } from 'utils/useClickOutside'
import { media } from 'utils/vars'
import FeedbackForm from 'components/FeedbackForm'
import { useTranslation } from 'utils/useTranslation'
import { FormType } from 'utils/formType'
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

import { detailHeaderStatic } from 'config/static/detailHeader'
import { notFoundStatic } from 'config/static/notFound'
import { GET_FOOTER_SALE } from 'graphql/query/Footer'
import { lengthMap } from 'utils/lengthMap'
import YachtCharter from 'components/YachtCharter/YachtCharter'

const limit = 12

const StyledSlider = styled(YachtSlider)`
  width: 100%;
  margin-top: 120px;

  ${media.fullhd} {
    margin-top: 100px;
  }
  ${media.notebook} {
    margin-top: 75px;
  }
  ${media.tablet} {
    margin-top: 64px;
  }
`

const CharterLayoutListing = ({ initialProps }) => {
  const router = useRouter()
  const { query, locale, pathname } = router
  const { currency, length } = useSelector((state) => state)
  const {
    quantityData,
    type,
    metaPagesData,
    favoriteLocations,
    charterLocations,
    pageType,
    detailYacht,
    SEOData,
    newsData,
  } = initialProps

  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')
  const detailYachtStatic = useTranslation('detailYachtStatic')

  // Footer Refetch
  const [footerItems, setFooterItems] = useState(initialProps.footerItems)
  const [loadSale, { data: footerSale }] = useLazyQuery(GET_FOOTER_SALE, {
    fetchPolicy: 'network-only',
  })
  useEffect(() => {
    loadSale()
  }, [locale])
  useEffect(() => {
    if (footerSale) {
      // setFooterItems((prev) => ({ ...prev, ...footerSale }))
      setFooterItems((prev) => ({ ...prev, ...initialProps.footerItems }))
    }
  }, [footerSale])
  // Footer RefetcEnd

  const page = query.page ? Number(query.page) : 1

  const [filterItems, setFilterItems] = useState(initialProps.filterItems)
  const [charterList, setCharterList] = useState(initialProps.charterYachtsList)
  const [yachtsByType, setYachtsByType] = useState(initialProps.yachtsByType)
  const [paginationData, setPaginationData] = useState(
    initialProps.charterYachtsPagination
  )
  const [locationsYachts, setLocationsYachts] = useState(
    initialProps.locationsYachts
  )
  const [pageMeta, setPageMeta] = useState(initialProps.pageMeta)
  const [metaData, setMetaData] = useState(initialProps.metaData)
  const [queryVariables, setQueryVariables] = useState(
    setFiltersVariables(
      {
        price: splitRange(query.price, true),
        price_type: currency,
        length: splitRange(query.length),
        length_type: length,
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
      },
      filterItems,
      query
    )
  )

  const [getCatalog, { data: newCatalogData }] = useLazyQuery(
    GET_CHARTER_YACHTS_LIST
  )
  const [getPagination, { data: newPaginationData }] = useLazyQuery(
    GET_CHARTER_YACHTS_PAGINATION
  )
  const [getMetaData, { data: newMetaData }] = useLazyQuery(
    GET_CHARTERS_YACHT_META,
    {
      fetchPolicy: 'network-only',
    }
  )

  const [
    getYachtsByType,
    { data: newYachtsByType },
  ] = useLazyQuery(GET_YACHTS_PAGE_BY_TYPE, { fetchPolicy: 'network-only' })

  useEffect(() => {
    const currentPage = Number(page)
    const lastPage = paginationData.yachts.last_page
    if (currentPage > lastPage) {
      router.push(
        {
          pathname: router.route,
          query: { ...router.query, page: lastPage },
        },
        undefined,
        { shallow: true }
      )
    }
    // const lastPage = paginationData
  }, [paginationData])

  useEffect(() => {
    setQueryVariables(
      setFiltersVariables(
        {
          price: splitRange(query.price, true),
          price_type: currency,
          length: splitRange(query.length),
          length_type: length,
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
        },
        filterItems,
        query
      )
    )
  }, [query])

  const compilationData = filterItems.find(
    (item) =>
      item.slug === query.slug ||
      (item.slug === lengthMap[query.slug] && item.type === 'length')
  )

  const metaVariables = {
    filter: compilationData?.type,
    value: compilationData?.slug,
  }

  useEffect(() => {
    getCatalog({ variables: queryVariables })
    getPagination({ variables: { ...queryVariables, limit } })
    getMetaData({ variables: metaVariables })
  }, [queryVariables, locale])

  useEffect(() => {
    getYachtsByType({ variables: { type } })
  }, [locale])

  useEffect(() => {
    newCatalogData && setCharterList(newCatalogData)
    newPaginationData && setPaginationData(newPaginationData)
    newMetaData && setMetaData(newMetaData)
    newYachtsByType && setYachtsByType(newYachtsByType)
  }, [newCatalogData, newPaginationData, newMetaData, newYachtsByType])

  useEffect(() => {
    setFilterItems(
      getFilterItems(
        yachtsByType.page_yachts.filter,
        charterLocations,
        locale,
        currency,
        length,
        favoriteLocations,
        metaPagesData
      )
    )
  }, [locale, currency, length, yachtsByType])

  // Хз что это
  const [isFiltersShown, setIsFiltersShown] = useState(false)
  const [modalOpened, setModalOpened] = useState(false)
  const modal = useRef(null)
  const closeModal = useCallback(() => setModalOpened(false), [])
  useClickOutside([modal], closeModal)
  useBodyScrollLock(modalOpened)

  const charterDayYachtsQuantity = quantityData.yacht_count

  // ------
  const transformType =
    query.charter === 'week'
      ? 'charter-week'
      : query.charter === 'day'
      ? 'charter-day'
      : 'charter-week'

  const foundList = charterList?.yachts?.data || []

  const { yacht_meta } = metaData
  const currentCompilation = filterItems.find(
    (item) =>
      item.slug !== undefined &&
      (item.slug === query.slug || item.slug === lengthMap[query.slug])
  )
  return (
    <MainLayout
      infoTitle={yacht_meta?.page_title}
      epilogueText={yacht_meta?.description}
      footerItems={footerItems}
    >
      <Head>
        <title>{yacht_meta?.seo_title}</title>
        <meta name="description" content={yacht_meta?.seo_description} />
      </Head>
      <CatalogSearch
        showFilters={() => setIsFiltersShown(true)}
        total={charterList?.yachts?.total}
        headerTitle={yacht_meta?.page_title}
        subTitle={yachtCatalogStatic.search.charterSubtitle}
        pathname={pathname}
        filterItems={filterItems}
      />
      <CatalogFilters
        isFiltersShown={isFiltersShown}
        closeFilters={() => setIsFiltersShown(false)}
        filtersNumber={6}
        isExtraShown
        filterItems={filterItems}
        pathname={pathname}
        isFilterDisabled={charterList.yachts.total < 2}
        withCharter
        isItemDisabled={charterDayYachtsQuantity < 1}
        currentCompilation={currentCompilation}
      />

      {charterList.yachts.total < 1 && (
        <StyledNotFound>{yachtCatalogStatic.notFound}</StyledNotFound>
      )}
      <CatalogSort pathname={pathname} />
      <CatalogList
        yachtsList={foundList.map((item) =>
          transformYacht(item, transformType)
        )}
        total={paginationData.yachts.last_page}
        openModal={() => setModalOpened(true)}
        pathname={pathname}
      />

      {/*{journeyNewsData && journeyNewsData.travel_news.length > 0 && (*/}
      {/*  <Journey news={journeyNewsData.travel_news} />*/}
      {/*)}*/}

      <StyledSlider
        data={
          locationsYachts &&
          locationsYachts.yachts_by_location?.list?.length > 0
            ? locationsYachts.yachts_by_location?.list.map((item) =>
                transformYacht(item, transformType)
              )
            : yachtsByType.page_yachts.specials.map((item) =>
                transformYacht(item, transformType)
              )
        }
        title={
          locationsYachts &&
          locationsYachts.yachts_by_location?.list?.length > 0
            ? yachtCatalogStatic.nearbyTitle
            : yachtCatalogStatic.specialTitle
        }
        showButton={
          locationsYachts &&
          locationsYachts.yachts_by_location?.list?.length > 0
            ? true
            : false
        }
        onClick={() => {
          router.push(
            {
              pathname,
              query: {
                ...removeParams(query, ['page']),
                location: locationsYachts.yachts_by_location.locations.map(
                  (item) => item.slug
                ),
              },
            },
            undefined,
            { shallow: true }
          )
          window.scrollTo(0, 0)
        }}
      />
      <CharterFaq
        daily={type === 'charter-day'}
        terms={yachtsByType.page_yachts.rent_terms}
      />
      {modalOpened && <FeedbackModal ref={modal} closeModal={closeModal} />}
      <FeedbackForm
        {...yachtCatalogStatic.feedbackFormCharter}
        formType={FormType.yachtSelection}
      />
    </MainLayout>
  )
}

export default CharterLayoutListing
