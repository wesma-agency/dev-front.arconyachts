import { getTranslations } from 'utils/translationHelpers'
import { yachtCatalogStatic } from 'config/static/yachtCatalog'
import { yachtsFiltersStatic } from 'config/static/yachtsFilters'
import { sortsStatic } from 'config/static/sortFilters'
import { yachtCardStatic } from 'config/static/yachtCard'
import { sliderStatic } from 'config/static/slider'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { homeStatic } from 'config/static/home'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { spoilerStatic } from 'config/static/spoiler'
import { notificationStatic } from 'config/static/notification'
import { rangeInput } from 'config/static/rangeInput'
import { locationSearch } from 'config/static/locationSearch'
import styled from 'styled-components'
import FeedbackForm from 'components/FeedbackForm'
import { initializeApollo } from 'graphql/apollo'
import nextCookies from 'next-cookies'
import { currencyKey, lengthUnitKey } from 'utils/context/DataContext'
import { splitRange } from 'utils/paramsHelpers'
import { getFooterData } from 'utils/getFooterData'
import {
  GET_SALE_YACHTS_LIST,
  GET_SALE_YACHTS_PAGE,
  GET_SALE_YACHTS_PAGINATION,
} from 'graphql/query/Yachts_Sale'
import { YACHT_META_ITEMS } from 'graphql/query/Yacht_Meta'
import { useTranslation } from 'utils/useTranslation'
import MainLayout from 'layouts/MainLayout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { FormType } from 'utils/formType'
import CatalogPage from 'components/CatalogPage'
import { getSaleFilterItems as getFilterItems } from '../../utils/filterHelpers'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useLazyQuery } from '@apollo/client'
import cabinRewrite from 'utils/cabinRewrite'
import { GET_FOOTER_SALE } from 'graphql/query/Footer'
import { REVALIDATE_INTERVAL } from 'utils/vars'

const StyledForm = styled(FeedbackForm)``
const limit = 12

const Catalog = ({ initialProps }) => {
  const router = useRouter()
  const { query, locale } = router
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
  const [getPageData, { data: newPageData }] = useLazyQuery(
    GET_SALE_YACHTS_PAGE,
    {
      fetchPolicy: 'network-only',
    }
  )

  const page = Number(query.page ?? 1)
  const { currency, length } = useSelector((state) => state)

  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')

  const [catalogData, setCatalogData] = useState(initialProps.catalogData)
  const [paginationData, setPaginationData] = useState(
    initialProps.paginationData
  )
  const [filterItems, setFilterItems] = useState(initialProps.filterItems)
  const [metaData, setMetaData] = useState(initialProps.metaData)
  const [pageData, setPageData] = useState(initialProps.pageData)
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
    cabins: query.cabin,
    query: query.search,
    sort: query.sort,
    limit,
    page,
  })

  const [getCatalog] = useLazyQuery(GET_SALE_YACHTS_LIST, {
    fetchPolicy: 'network-only',
  })
  const [getPagination, { data: newPaginationData }] = useLazyQuery(
    GET_SALE_YACHTS_LIST,
    {
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setCatalogData(data)
      },
    }
  )

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
      cabins: query.cabin,
      query: query.search,
      sort: query.sort,
      limit,
      page,
    })
  }, [query])

  useEffect(() => {
    getCatalog({ variables: queryVariables })
    getPagination({ variables: queryVariables })
  }, [queryVariables, locale])

  useEffect(() => {
    getPageData()
  }, [locale])

  useEffect(() => {
    newPaginationData && setPaginationData(newPaginationData)
    newPageData && setPageData(newPageData)
  }, [newPaginationData, newPageData])

  useEffect(() => {
    setFilterItems(
      getFilterItems(
        pageData.page_yachts.filter,
        locale,
        currency,
        length,
        metaData
      )
    )
  }, [locale, currency, length, pageData])

  useEffect(() => {
    const currentPage = Number(page)
    const lastPage = paginationData.yachts.last_page
    if (currentPage > lastPage) {
      router.push(
        {
          pathname: router.route,
          query: { ...router.query, page: Number(lastPage) },
        },
        undefined,
        { shallow: true }
      )
    }
  }, [query.page])

  return (
    <MainLayout
      epilogueText={yachtCatalogStatic.saleInfoDescription}
      infoTitle={yachtCatalogStatic.saleInfoTitle}
      footerItems={footerItems}
    >
      <Head>
        <title>{yachtCatalogStatic.meta.title}</title>
        <meta
          name="description"
          content={yachtCatalogStatic.meta.description}
        />
      </Head>
      <CatalogPage
        list={catalogData}
        total={catalogData.yachts?.total}
        defaultList={catalogData}
        pagination={paginationData}
        content={pageData}
        filterItems={filterItems}
      />
      <StyledForm
        {...yachtCatalogStatic.feedbackForm}
        formType={FormType.yachtSelection}
      />
    </MainLayout>
  )
}

Catalog.translation = {
  ...getTranslations({
    yachtCatalogStatic: yachtCatalogStatic,
    yachtsFiltersStatic: yachtsFiltersStatic,
    sortsStatic: sortsStatic,
    yachtCardStatic: yachtCardStatic,
    sliderStatic: sliderStatic,
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

export async function getStaticProps(ctx) {
  const { query = {}, locale } = ctx
  const apolloClient = initializeApollo(ctx)
  const currencyUnit = nextCookies(ctx)[currencyKey] || 'USD'
  const lengthUnit = nextCookies(ctx)[lengthUnitKey] || 'm'
  const page = Number(query.page ?? 1)

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
    cabins: query.cabin,
    query: query.search,
    sort: query.sort,
    limit,
    page,
  }
  const [
    footerItems,
    { data: paginationData },
    { data: catalogData },
    {
      data: { yacht_meta_items: metaDataTemp },
    },
    { data: pageData },
  ] = await Promise.all([
    getFooterData(apolloClient),
    await apolloClient.query({
      query: GET_SALE_YACHTS_PAGINATION,
      variables: { ...filtersVariables, limit },
    }),
    await apolloClient.query({
      query: GET_SALE_YACHTS_LIST,
      variables: { ...filtersVariables },
    }),
    await apolloClient.query({
      query: YACHT_META_ITEMS,
    }),
    await apolloClient.query({
      query: GET_SALE_YACHTS_PAGE,
    }),
  ])
  const metaData = cabinRewrite(metaDataTemp)
  const filters = pageData.page_yachts.filter
  const filterItems = getFilterItems(
    filters,
    locale,
    currencyUnit,
    lengthUnit,
    metaData
  )

  const initialProps = {
    pageData,
    footerItems,
    catalogData,
    paginationData,
    metaData,
    filterItems,
  }

  return {
    props: { initialProps },
    // revalidate: REVALIDATE_INTERVAL,
  }
}

export default Catalog
