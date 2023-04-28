import styled from 'styled-components'
import FeedbackForm from '../../components/FeedbackForm'
import { getTranslations } from '../../utils/translationHelpers'
import { detailYachtStatic } from '../../config/static/detailYacht'
import { detailHeaderStatic } from '../../config/static/detailHeader'
import { sortsStatic } from '../../config/static/sortFilters'
import { feedbackFormStatic } from '../../config/static/feedbackForm'
import { sliderStatic } from '../../config/static/slider'
import { yachtCardStatic } from '../../config/static/yachtCard'
import { shipyardStatic } from '../../config/static/shipyard'
import { yachtCatalogStatic } from '../../config/static/yachtCatalog'
import { yachtsFiltersStatic } from '../../config/static/yachtsFilters'
import { homeStatic } from '../../config/static/home'
import { servicesStatic } from '../../config/static/service'
import { headerStatic } from '../../config/static/header'
import { breadcrumbsStatic } from '../../config/static/breadcrumbs'
import { footerStatic } from '../../config/static/footer'
import { contactsStatic } from '../../config/static/contacts'
import { spoilerStatic } from '../../config/static/spoiler'
import { notificationStatic } from '../../config/static/notification'
import { rangeInput } from '../../config/static/rangeInput'
import { locationSearch } from '../../config/static/locationSearch'
import { notFoundStatic } from '../../config/static/notFound'
import { initializeApollo } from '../../graphql/apollo'
import nextCookies from 'next-cookies'
import { currencyKey, lengthUnitKey } from '../../utils/context/DataContext'
import { getFooterData } from '../../utils/getFooterData'
import { GET_YACHT_SALE } from '../../graphql/query/Yacht_Sale'
import Head from 'next/head'
// import YachtPage from '../../components/YachtPage'
import { transformYacht } from '../../utils/transformYacht'
import MainLayout from '../../layouts/MainLayout'
import React, { useEffect, useState } from 'react'
import { useTranslation } from '../../utils/useTranslation'
import {
  GET_SALE_YACHTS_LIST,
  GET_SALE_YACHTS_PAGE,
  GET_SALE_YACHTS_PAGINATION,
} from '../../graphql/query/Yachts_Sale'
import {
  GET_SALE_YACHT_META,
  YACHT_META_ITEMS,
} from '../../graphql/query/Yacht_Meta'
import {
  getSaleFilterItems as getFilterItems,
  setFiltersVariables,
} from '../../utils/filterHelpers'
import { splitRange } from '../../utils/paramsHelpers'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useLazyQuery } from '@apollo/client'
// import CatalogPage from '../../components/CatalogPage'
import { FormType } from '../../utils/formType'
import { GET_FOOTER_SALE } from 'graphql/query/Footer'
import dynamic from 'next/dynamic'
import { lengthMap } from 'utils/lengthMap'

// Dynamic
const YachtPage = dynamic(() => import('components/YachtPage'))
const CatalogPage = dynamic(() => import('components/CatalogPage'))

const StyledForm = styled(FeedbackForm)``

const limit = 12

const Yacht = ({ initialProps }) => {
  const { query, locale } = useRouter()
  const router = useRouter()
  const { pageType } = initialProps
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

  const { yacht } = initialProps
  const detailYachtStatic = useTranslation('detailYachtStatic')

  const page = query.page ? Number(query.page) : 1
  const { currency, length } = useSelector((state) => state)

  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')

  const [catalogData, setCatalogData] = useState(initialProps.catalogData)
  const [paginationData, setPaginationData] = useState(
    initialProps.paginationData
  )

  const [filterItems, setFilterItems] = useState(initialProps.filterItems)
  const [metaData, setMetaData] = useState(initialProps.metaData)
  const [pageData, setPageData] = useState(initialProps.pageData)
  const [pageMeta, setPageMeta] = useState(initialProps.pageMeta)


  const [meta, setMeta] = useState( () => {
    if(initialProps.metaData) {
      initialProps.metaData.find(
        (el) =>
          el.type === 'sale' &&
          (el.value === query.slug || el.value === lengthMap[query.slug])
      )
    }
    })

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
        cabins: query.cabin,
        query: query.search,
        sort: query.sort,
        limit,
        page,
      },
      filterItems,
      query
    )
  )

  let metaVariables = null

  if( filterItems ) {
    const compilationData = filterItems.find(
      (item) => item.slug === query.slug || item.slug === lengthMap[query.slug]
    )

    metaVariables = {
      filter:
        compilationData?.type === 'body' ? 'material' : compilationData?.type,
      value: compilationData?.slug,
    }


  }

  const [
    getCatalog,
    { data: newCatalogData },
  ] = useLazyQuery(GET_SALE_YACHTS_LIST, { fetchPolicy: 'network-only' })
  const [getPagination, { data: newPaginationData }] = useLazyQuery(
    GET_SALE_YACHTS_LIST
  )
  const [
    getMetaData,
    { data: newMetaData },
  ] = useLazyQuery(GET_SALE_YACHT_META, { fetchPolicy: 'network-only' })

  useEffect(() => {
    if( paginationData ) {
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
    }
  }, [query.page])

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
          cabins: query.cabin,
          query: query.search,
          sort: query.sort,
          limit,
          page,
        },
        filterItems,
        query
      )
    )
  }, [query])

  const [getPageData, { data: newPageData }] = useLazyQuery(
    GET_SALE_YACHTS_PAGE,
    {
      fetchPolicy: 'network-only',
    }
  )

  useEffect(() => {
    getCatalog({ variables: queryVariables })
    getPagination({ variables: { ...queryVariables, limit } })

      getMetaData({ variables: metaVariables })

    getPageData()
  }, [queryVariables, locale])

  useEffect(() => {
    newCatalogData && setCatalogData(newCatalogData)
    newPaginationData && setPaginationData(newPaginationData)
    if (newMetaData) {
      const _temp = {
        pageTitle: newMetaData.yacht_meta?.page_title || null,
        pageDescription: newMetaData.yacht_meta?.description,
        seoDescription: newMetaData.yacht_meta?.seo_description,
        seoTitle: newMetaData.yacht_meta?.seo_title,
      }
      setPageMeta(_temp)
      setMeta((prev) => ({
        ...prev,
        pageTitle: newMetaData.yacht_meta?.page_title,
      }))
    }
    newPageData && setPageData(newPageData)
  }, [newCatalogData, newPaginationData, newMetaData, newPageData])
  useEffect(() => {
    if(pageData) {
      setFilterItems(
        getFilterItems(
          pageData.page_yachts.filter,
          locale,
          currency,
          length,
          metaData
        )
      )
    }

  }, [locale, currency, length, pageData])

  // Footer RefetcEnd

  if (pageType === 'yacht') {
    let {main_name, shipyard} = yacht;
    let mainNameWithoutShipyard = null;
    if(main_name && shipyard && shipyard.name) {
      let reg = new RegExp(shipyard.name, 'gi');
      mainNameWithoutShipyard = main_name.replace(reg, '');
    }
    return (
      <MainLayout
        breadcrumbsTitle={`${yacht.shipyard?.name} 
        ${mainNameWithoutShipyard ? mainNameWithoutShipyard : yacht.main_name}`}
        showInfo={false}
        footerItems={footerItems}
      >
        <Head>
          <title>
            {yacht.seo.title
              ? yacht.seo.title
              : `${detailYachtStatic.metaSale.title} ${yacht.shipyard?.name} ${yacht.main_name} - Arcon Yachts`}
          </title>
          <meta
            name="description"
            content={
              yacht.seo.description
                ? yacht.seo.description
                : `${detailYachtStatic.metaSale.description} ${yacht.main_name}`
            }
          />
        </Head>
        <YachtPage yacht={transformYacht(yacht, 'sale')} />
      </MainLayout>
    )
  } else if (pageType === 'compilation') {
    return (
      <MainLayout
        epilogueText={pageMeta.pageDescription}
        infoTitle={pageMeta.pageTitle}
        footerItems={footerItems}
      >
        <Head>
          <title>{pageMeta.seoTitle}</title>
          <meta name="description" content={pageMeta.seoDescription} />
        </Head>
        <CatalogPage
          list={catalogData}
          total={catalogData.yachts?.total}
          defaultList={catalogData}
          pagination={paginationData}
          content={pageData}
          filterItems={filterItems}
          meta={meta}
        />
        <StyledForm
          {...yachtCatalogStatic.feedbackForm}
          formType={FormType.yachtSelection}
        />
      </MainLayout>
    )
  }
}

Yacht.translation = {
  ...getTranslations({
    detailYachtStatic: detailYachtStatic,
    detailHeaderStatic: detailHeaderStatic,
    sortsStatic: sortsStatic,
    feedbackFormStatic: feedbackFormStatic,
    sliderStatic: sliderStatic,
    yachtCardStatic: yachtCardStatic,
    shipyardStatic: shipyardStatic,
    yachtCatalogStatic: yachtCatalogStatic,
    yachtsFiltersStatic: yachtsFiltersStatic,
    homeStatic: homeStatic,
    servicesStatic: servicesStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    spoiler: spoilerStatic,
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
  const page = query.page ? Number(query.page) : 1

  const initialProps = {}

  initialProps.footerItems = await getFooterData(apolloClient)

  const {
    data: { yachts },
  } = await apolloClient.query({ query: GET_YACHT_SALE, variables: { slug } })

  if (yachts.data.length === 1) {
    initialProps.yacht = yachts.data[0]
    initialProps.pageType = 'yacht'
    return {
      props: {
        initialProps,
      },
    }
  }

  const { data: pageData } = await apolloClient.query({
    query: GET_SALE_YACHTS_PAGE,
  })
  const {
    data: { yacht_meta_items: metaPagesData },
  } = await apolloClient.query({
    query: YACHT_META_ITEMS,
  })
  const filters = pageData.page_yachts.filter
  const filterItems = getFilterItems(
    filters,
    locale,
    currencyUnit,
    lengthUnit,
    metaPagesData
  )
  const compilationItems = filterItems
    .filter((item) => item.isCompilation)
    .map((item) => item.slug)

  if (lengthMap[query.slug]) {
    query.slug = lengthMap[query.slug]
  }

  const isCompilation = compilationItems.includes(query.slug)

  if (isCompilation) {
    const isCompilationPage = filterItems
      .map((item) => item.slug)
      .includes(query.slug)

    let filtersVariables = {
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
      locations: query.location || [],
      limit,
      page,
    }

    if (filterItems && isCompilationPage) {
      filtersVariables = setFiltersVariables(
        filtersVariables,
        filterItems,
        query
      )
    }
    const compilationData = isCompilationPage
      ? filterItems.find((item) => item.slug === query.slug)
      : null

    const metaVariables = {
      filter:
        compilationData?.type === 'body' ? 'material' : compilationData?.type,
      value: compilationData?.slug,
    }

    const { data: catalogData } = await apolloClient.query({
      query: GET_SALE_YACHTS_LIST,
      variables: filtersVariables,
    })
    const { data: paginationData } = await apolloClient.query({
      query: GET_SALE_YACHTS_PAGINATION,
      variables: { ...filtersVariables, limit },
    })

    let title
    if (isCompilationPage) {
      title = await apolloClient.query({
        query: GET_SALE_YACHT_META,
        variables: metaVariables,
        skip: !isCompilationPage,
      })
    }
    let pageMeta = {}
    const metaData = metaPagesData.map((item) => {
      const temp = { ...item }
      if (
        item.filter === metaVariables.filter &&
        item.value === metaVariables.value
      ) {
        temp.pageTitle = title?.data?.yacht_meta?.page_title || null
        pageMeta.pageTitle = title?.data?.yacht_meta?.page_title || null
        pageMeta.pageDescription = title?.data?.yacht_meta?.description
        pageMeta.seoDescription = title?.data?.yacht_meta?.seo_description
        pageMeta.seoTitle = title?.data?.yacht_meta?.seo_title
      }
      return temp
    })

    initialProps.pageType = 'compilation'
    initialProps.metaData = metaData
    initialProps.catalogData = catalogData
    initialProps.paginationData = paginationData
    initialProps.pageData = pageData
    initialProps.filterItems = filterItems
    initialProps.pageMeta = pageMeta
    return {
      props: { initialProps },
    }
  }

  return {
    notFound: true,
  }
}

export default Yacht
