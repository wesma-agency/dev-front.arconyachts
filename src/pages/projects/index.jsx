import { useLazyQuery, useQuery } from '@apollo/client'
import ProjectsPage from 'components/ProjectsPage'
import { yachtsFiltersStatic as getFiltersStatic } from 'config/static/yachtsFilters'
import { initializeApollo } from 'graphql/apollo'
import { GET_YACHTS_PAGE_BY_TYPE } from 'graphql/query/Yachts_Charter'
import {
  GET_PROJECTS_YACHTS_LIST,
  GET_PROJECTS_YACHTS_PAGINATION,
} from 'graphql/query/Yachts_Projects'
import MainLayout from 'layouts/MainLayout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getUniqueListBy } from 'utils/arrayHelpers'
import { splitRange } from 'utils/paramsHelpers'
import { useTranslation } from 'utils/useTranslation'
import Head from 'next/head'
import { PATH } from 'config/path'
import { useSelector } from 'react-redux'
import nextCookies from 'next-cookies'
import { lengthUnitKey } from 'utils/context/DataContext'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { yachtCatalogStatic } from 'config/static/yachtCatalog'
import { sortsStatic } from 'config/static/sortFilters'
import { yachtCardStatic } from 'config/static/yachtCard'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { sliderStatic } from 'config/static/slider'
import { homeStatic } from 'config/static/home'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { rangeInput } from 'config/static/rangeInput'
import { locationSearch } from 'config/static/locationSearch'
import { getFooterData } from 'utils/getFooterData'
import { spoilerStatic } from 'config/static/spoiler'
import { GET_SALE_YACHTS_LIST } from '../../graphql/query/Yacht_Sale'

const limit = 12
const FT_IN_METER = 3.281

const getFilterItems = (filters, locale, length) => {
  let yachtsFiltersStatic = getFiltersStatic(locale === 'ru')
  const activeLength = filters.length.filter(
    (item) => item.unit === length
  )?.[0]
  return [
    {
      type: 'range',
      title: yachtsFiltersStatic.length.title,
      min: Math.floor(activeLength.min),
      max: Math.ceil(activeLength.max),
      unit: `${length === 'm' ? yachtsFiltersStatic.length.unit : ' ft'}`,
      param: 'length',
    },
    {
      type: 'range',
      title: yachtsFiltersStatic.builtYear.title,
      min: filters.year_built[0],
      max: filters.year_built[1],
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
    ...getUniqueListBy(
      filters.tags.map((item) => ({
        type: 'tag',
        title: item.name,
        slug: item.slug,
        param: 'tag',
        count: item.yachts_count,
      })),
      'slug'
    ),
  ]
}

const createFilter = (query, length) => ({
  length: splitRange(query.length),
  length_type: length,
  tags: query.tag,
  year_built: splitRange(query.year),
  shipyards: query.shipyard,
  body: query.body,
  conditions: query.condition,
  speeds: splitRange(query.speed),
  guests: query.guest,
  cabins: query.cabin,
  query: query.search,
  sort: query.sort,
  limit: query.page ? +query.page * limit : limit,
})

const Projects = ({ initialProps }) => {
  const router = useRouter()
  const { query } = router
  const { length } = useSelector((state) => state)
  const { footerItems } = initialProps

  const [paginationData, setPaginationData] = useState(
    initialProps.yachtPagination
  )
  const [contentData, setContentData] = useState(initialProps.yachtByType)
  const [list, setList] = useState(initialProps.yachtList)
  const [filterItems, setFilterItems] = useState(
    getFilterItems(contentData.page_yachts.filter, router.locale, length)
  )
  const [filterVariables, setFilterVariables] = useState(
    createFilter(query, length)
  )

  const [getList, { data: newListData }] = useLazyQuery(
    GET_PROJECTS_YACHTS_LIST
  )
  const [getPagination, { data: newPagination }] = useLazyQuery(
    GET_PROJECTS_YACHTS_PAGINATION
  )

  useEffect(() => {
    setFilterVariables(createFilter(query, length))
  }, [query])
  useEffect(() => {
    getList({ variables: { ...filterVariables, type: 'project' } })
    getPagination({ variables: { ...filterVariables, type: 'project', limit } })
  }, [filterVariables])
  useEffect(() => {
    newListData && setList(newListData)
    newPagination && setPaginationData(newPagination)
  }, [newListData, newPagination])
  useEffect(() => {
      setContentData(initialProps.yachtByType)
      setFilterItems(
        getFilterItems(contentData.page_yachts.filter, router.locale, length)
      )
  }, [router.locale, contentData.page_yachts.filter])

  // const { data: content } = useQuery(GET_YACHTS_PAGE_BY_TYPE, {
  //   variables: { type: 'project' },
  // })
  // const filtersVariables = createFilter(router.query, length)
  // const { data: pagination } = useQuery(GET_PROJECTS_YACHTS_PAGINATION, {
  //   variables: { type: 'project', ...filtersVariables, limit },
  // })
  // const { data: list } = useQuery(GET_PROJECTS_YACHTS_LIST, {
  //   variables: filtersVariables,
  // })
  // const { data: defaultList } = useQuery(GET_PROJECTS_YACHTS_LIST, {
  //   variables: { limit, sort: router.query.sort },
  // })
  //
  // const [paginationData, setPaginationData] = useState(pagination)
  // const [data, setData] = useState(list)
  // const [defaultData, setDefaultList] = useState(defaultList)
  // const [filterItems, setFilterItems] = useState(
  //   getFilterItems(content.page_yachts.filter, router.locale, length)
  // )
  // const [contentData, setContentData] = useState(content)
  //
  // useEffect(() => {
  //   if (content) {
  //     setContentData(content)
  //     setFilterItems(
  //       getFilterItems(content.page_yachts.filter, router.locale, length)
  //     )
  //   }
  // }, [router.locale, content])
  // useEffect(() => {
  //   if (pagination) {
  //     setPaginationData(pagination)
  //   }
  // }, [pagination])
  // useEffect(() => {
  //   if (list) {
  //     setData(list)
  //   }
  // }, [list])
  // useEffect(() => {
  //   if (defaultList) {
  //     setDefaultList(defaultList)
  //   }
  // }, [defaultList])
  //
  // useEffect(() => {
  //   if (query.length && query.length.slice(-1) !== length.slice(0, 1)) {
  //     const params = query.length.split(',')
  //     const value =
  //       length === 'ft'
  //         ? `${Math.floor(params[0] * FT_IN_METER * 1000) / 1000},${
  //             Math.floor(params[1] * FT_IN_METER * 1000) / 1000
  //           },${length.slice(0, 1)}`
  //         : `${Math.floor((params[0] / FT_IN_METER) * 100) / 100},${Math.floor(
  //             ((params[1] / FT_IN_METER) * 100) / 100
  //           )},${length.slice(0, 1)}`
  //     router.push(
  //       {
  //         pathname: PATH.PROJECTS,
  //         query: { ...query, length: value },
  //       },
  //       undefined,
  //       { shallow: true }
  //     )
  //   }
  // }, [query, length])

  const yachtCatalogStatic = useTranslation('yachtCatalogStatic')

  return (
    <MainLayout
      infoTitle={yachtCatalogStatic.projects.infoBlock.title}
      epilogueText={yachtCatalogStatic.projects.infoBlock.description}
      footerItems={footerItems}
    >
      <Head>
        <title>{yachtCatalogStatic.metaProject.title}</title>
        <meta
          name="description"
          content={yachtCatalogStatic.metaProject.description}
        />
      </Head>
      <ProjectsPage
        pagination={paginationData}
        list={list}
        content={contentData}
        total={list?.yachts?.total}
        defaultList={list}
        filterItems={filterItems}
      />
    </MainLayout>
  )
}

Projects.translation = {
  ...getTranslations({
    yachtCatalogStatic: yachtCatalogStatic,
    yachtsFiltersStatic: getFiltersStatic,
    sortsStatic: sortsStatic,
    yachtCardStatic: yachtCardStatic,
    feedbackFormStatic: feedbackFormStatic,
    sliderStatic: sliderStatic,
    homeStatic: homeStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    notificationStatic: notificationStatic,
    rangeInput: rangeInput,
    locationSearch: locationSearch,
    spoiler: spoilerStatic,
  }),
}
export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo(ctx)
  const { query } = ctx
  const lengthUnit = nextCookies(ctx)[lengthUnitKey] || 'm'
  const filterVariables = createFilter(query, lengthUnit)

  const footerItems = await getFooterData(apolloClient)
  const { data: yachtByType } = await apolloClient.query({
    query: GET_YACHTS_PAGE_BY_TYPE,
    variables: { type: 'project' },
  })
  const { data: yachtPagination } = await apolloClient.query({
    query: GET_PROJECTS_YACHTS_PAGINATION,
    variables: { type: 'project', ...filterVariables, limit },
  })
  const { data: yachtList } = await apolloClient.query({
    query: GET_PROJECTS_YACHTS_LIST,
    variables: filterVariables,
  })

  const initialProps = {
    footerItems,
    yachtPagination,
    yachtByType,
    yachtList,
  }

  // const
  //   apolloClient.query({
  //     query: GET_PROJECTS_YACHTS_LIST,
  //     variables: { limit, sort: query.sort },
  //   }),
  // ])

  return {
    props: {
      initialProps,
    },
  }
}

export default Projects
