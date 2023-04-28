import { useLazyQuery, useQuery } from '@apollo/client'
import Head from 'next/head'
import CatalogFilters from 'components/CatalogPage/CatalogFilters'
import CatalogList from 'components/CatalogPage/CatalogList'
import { StyledNotFound } from 'components/CatalogPage/CatalogList/CatalogList.styled'
import CatalogSearch from 'components/CatalogPage/CatalogSearch'
import CatalogSort from 'components/CatalogPage/CatalogSort'
import CharterFaq from 'components/CharterPage/CharterFaq'
import YachtSlider from 'components/Slider/YachtSlider'
import { PATH } from 'config/path'
import { yachtsFiltersStatic } from '../../config/static/yachtsFilters'
import { initializeApollo } from 'graphql/apollo'
import { GET_LOCATIONS } from 'graphql/query/Locations'
import {
  GET_CHARTER_YACHTS_LIST,
  GET_YACHTS_PAGE_BY_TYPE,
  GET_CHARTER_YACHTS_PAGINATION,
  GET_FAVORITE_LOCATIONS,
  GET_YACHTS_QUANTITY,
} from 'graphql/query/Yachts_Charter'
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
import { getCharterFilterItems as getFilterItems } from 'utils/filterHelpers'
import { sortsStatic } from '../../config/static/sortFilters'
import { headerStatic } from '../../config/static/header'
import { breadcrumbsStatic } from '../../config/static/breadcrumbs'
import { footerStatic } from '../../config/static/footer'
import { contactsStatic } from '../../config/static/contacts'
import { detailYachtStatic } from '../../config/static/detailYacht'
import { yachtCardStatic } from '../../config/static/yachtCard'
import { sliderStatic } from '../../config/static/slider'
import { charterFaqStatic } from '../../config/static/charterFaq'
import { feedbackFormStatic } from '../../config/static/feedbackForm'
import { homeStatic } from '../../config/static/home'
import { yachtCatalogStatic } from '../../config/static/yachtCatalog'
import { spoilerStatic } from '../../config/static/spoiler'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from '../../config/static/notification'
import { rangeInput } from '../../config/static/rangeInput'
import { locationSearch } from '../../config/static/locationSearch'
import { getFooterData } from 'utils/getFooterData'
import { YACHT_META_ITEMS } from 'graphql/query/Yacht_Meta.js'
import { GET_FOOTER_SALE } from 'graphql/query/Footer'

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

const CharterCatalog = ({ initialProps }) => {
  const router = useRouter()
  const { query, locale, pathname } = useRouter()
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
  const { currency, length } = useSelector((state) => state)
  const {
    quantityData,
    type,
    metaPagesData,
    favoriteLocations,
    charterLocations,
  } = initialProps

  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')
  const detailYachtStatic = useTranslation('detailYachtStatic')

  const [filterItems, setFilterItems] = useState(initialProps.filterItems)
  const [charterList, setCharterList] = useState(initialProps.charterYachtsList)
  const [yachtsByType, setYachtsByType] = useState(initialProps.yachtsByType)
  const [paginationData, setPaginationData] = useState(
    initialProps.charterYachtsPagination
  )
  const [locationsYachts, setLocationsYachts] = useState(
    initialProps.locationsYachts
  )

  const page = query.page ? Number(query.page) : 1

  const [queryVariables, setQueryVariables] = useState({
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
  })

  const [
    getCatalog,
    { data: newCatalogData },
  ] = useLazyQuery(GET_CHARTER_YACHTS_LIST, { fetchPolicy: 'network-only' })
  const [getPagination, { data: newPaginationData }] = useLazyQuery(
    GET_CHARTER_YACHTS_PAGINATION
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
  }, [query.page])

  useEffect(() => {
    setQueryVariables({
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
    })
  }, [query])

  useEffect(() => {
    getCatalog({ variables: queryVariables })
    getPagination({ variables: { ...queryVariables, limit } })
  }, [queryVariables, locale])

  useEffect(() => {
    getYachtsByType({ variables: { type } })
  }, [locale])

  useEffect(() => {
    newCatalogData && setCharterList(newCatalogData)
    newPaginationData && setPaginationData(newPaginationData)
    newYachtsByType && setYachtsByType(newYachtsByType)
  }, [newCatalogData, newPaginationData, newYachtsByType])

  useEffect(() => {
    setFilterItems(
      getFilterItems(
        yachtsByType.page_yachts.filter,
        charterLocations,
        locale,
        currency,
        length,
        favoriteLocations,
        metaPagesData,
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

  return (
    <MainLayout
      infoTitle={detailYachtStatic.epilogue.charter}
      epilogueText={yachtCatalogStatic.chartersInfoDescription}
      footerItems={footerItems}
    >
      <Head>
        <title>{yachtCatalogStatic.metaCharter.title}</title>
        <meta
          name="description"
          content={yachtCatalogStatic.metaCharter.description}
        />
      </Head>
      <CatalogSearch
        showFilters={() => setIsFiltersShown(true)}
        total={charterList.yachts?.total}
        headerTitle={
          yachtsByType.page_yachts?.title ||
          yachtCatalogStatic.search.charterTitle
        }
        subTitle={yachtCatalogStatic.search.charterSubtitle}
        pathname={PATH.CHARTER_CATALOG}
        filterItems={filterItems}
      />
      <CatalogFilters
        isFiltersShown={isFiltersShown}
        closeFilters={() => setIsFiltersShown(false)}
        filtersNumber={6}
        isExtraShown
        filterItems={filterItems}
        pathname={PATH.CHARTER_CATALOG}
        isFilterDisabled={charterList.yachts.total < 2}
        withCharter
        isItemDisabled={charterDayYachtsQuantity < 1}
      />
      <CatalogSort pathname={pathname} />
      {charterList.yachts.total < 1 && (
        <StyledNotFound>{yachtCatalogStatic.notFound}</StyledNotFound>
      )}
      <CatalogList
        yachtsList={foundList.map((item) =>
          transformYacht(item, transformType)
        )}
        total={paginationData.yachts.last_page}
        openModal={() => setModalOpened(true)}
        pathname={PATH.CHARTER_CATALOG}
      />
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
              pathname: PATH.CHARTER_CATALOG,
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
      {yachtsByType.page_yachts.rent_terms?.length > 0 && (
        <CharterFaq
          daily={type === 'charter-day'}
          terms={yachtsByType.page_yachts.rent_terms}
        />
      )}
      {modalOpened && <FeedbackModal ref={modal} closeModal={closeModal} />}
      <FeedbackForm
        {...yachtCatalogStatic.feedbackFormCharter}
        formType={FormType.yachtSelection}
      />
    </MainLayout>
  )
}

CharterCatalog.translation = {
  ...getTranslations({
    yachtCatalogStatic: yachtCatalogStatic,
    detailYachtStatic: detailYachtStatic,
    yachtsFiltersStatic: yachtsFiltersStatic,
    sortsStatic: sortsStatic,
    yachtCardStatic: yachtCardStatic,
    sliderStatic: sliderStatic,
    charterFaqStatic: charterFaqStatic,
    feedbackFormStatic: feedbackFormStatic,
    homeStatic: homeStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    spoiler: spoilerStatic,
    notificationStatic: notificationStatic,
    rangeInput: rangeInput,
    locationSearch: locationSearch,
  }),
}

export async function getServerSideProps(ctx) {

  const { query, locale } = ctx
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

  const { data: charterYachtsList } = await apolloClient.query({
    query: GET_CHARTER_YACHTS_LIST,
    variables: filtersVariables,
  })

  initialProps.charterYachtsList = charterYachtsList

  const { data: charterYachtsPagination } = await apolloClient.query({
    query: GET_CHARTER_YACHTS_PAGINATION,
    variables: { ...filtersVariables, limit },
  })
  initialProps.charterYachtsPagination = charterYachtsPagination

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

  return {
    props: { initialProps },
  }

}

export default CharterCatalog