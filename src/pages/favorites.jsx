import { useQuery } from '@apollo/client'
import FavoritesPage from 'components/FavoritesPage'
import { initializeApollo } from 'graphql/apollo'
import {
  GET_FAVORITES_PAGINATION,
  GET_FAVORITES_YACHTS,
} from 'graphql/query/Favortes'
import MainLayout from 'layouts/MainLayout'
import nextCookies from 'next-cookies'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useBreakpoint } from 'utils/useBreakpoint'
import Head from 'next/head'
import { useTranslation } from 'utils/useTranslation'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { favoritesStatic } from 'config/static/favorites'
import { yachtCatalogStatic } from 'config/static/yachtCatalog'
import { sortsStatic } from 'config/static/sortFilters'
import { yachtCardStatic } from 'config/static/yachtCard'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { getFooterData } from 'utils/getFooterData'

const limit = 12

const Favorites = ({ footerItems, list, pagination }) => {
  const { query } = useRouter()
  const {
    project,
    ['charter-week']: charterWeek,
    ['charter-day']: charterDay,
    sale,
  } = useSelector((state) => state.favorites)

  const type =
    query.type === 'charter-week'
      ? 'rent_week'
      : query.type === 'charter-day'
      ? 'rent_day'
      : query.type === 'project'
      ? 'project'
      : 'cost'

  const favoritesFromCookie =
    query.type === 'charter-week'
      ? charterWeek
      : query.type === 'charter-day'
      ? charterDay
      : query.type === 'project'
      ? project
      : sale
  // const { data: list } = useQuery(GET_FAVORITES_YACHTS, {
  //   variables: {
  //     type,
  //     slugs: favoritesFromCookie.length > 0 ? favoritesFromCookie : [],
  //     limit: query.page ? +query.page * limit : limit,
  //     sort: query.sort,
  //   },
  // })
  // const { data: pagination } = useQuery(GET_FAVORITES_PAGINATION, {
  //   variables: { type, slugs: favoritesFromCookie, limit, sort: query.sort },
  // })

  const [data, setData] = useState(list)
  const [paginationData, setPaginationData] = useState(pagination)
  useEffect(() => {
    if (pagination) {
      setPaginationData(pagination)
    }
  }, [pagination])
  useEffect(() => {
    if (list) {
      setData(list)
    }
  }, [list])
  const { tablet } = useBreakpoint()

  const page = +query.page || 1
  const perPage = paginationData.yachts.per_page

  let foundData = data.yachts.data
  const [foundList, setFoundList] = useState(
    foundData.slice(perPage * page - perPage, perPage * page)
  )
  useEffect(() => {
    setFoundList(
      tablet
        ? foundData
        : foundData.slice(perPage * page - perPage, perPage * page)
    )
  }, [foundData, tablet])
  const favoritesStatic = useTranslation('favoritesStatic')
  return (
    <MainLayout showInfo={false} footerItems={footerItems}>
      <Head>
        <title>{favoritesStatic.meta.title}</title>
        <meta name="description" content={favoritesStatic.meta.description} />
      </Head>
      <FavoritesPage foundList={foundList} paginationData={paginationData} />
    </MainLayout>
  )
}

Favorites.translation = {
  ...getTranslations({
    favoritesStatic: favoritesStatic,
    yachtCatalogStatic: yachtCatalogStatic,
    sortsStatic: sortsStatic,
    yachtCardStatic: yachtCardStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    notificationStatic: notificationStatic,
  }),
}

export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo(ctx)
  const { query } = ctx

  const project = nextCookies(ctx)['project'] || []
  const chartersWeek = nextCookies(ctx)['charter-week'] || []
  const chartersDay = nextCookies(ctx)['charter-day'] || []
  const sale = nextCookies(ctx)['sale'] || []

  const type =
    query.type === 'charter-week'
      ? 'rent_week'
      : query.type === 'charter-day'
      ? 'rent_day'
      : query.type === 'project'
      ? 'project'
      : 'cost'

  const favoritesFromCookie =
    query.type === 'charter-week'
      ? chartersWeek
      : query.type === 'charter-day'
      ? chartersDay
      : query.type === 'project'
      ? project
      : sale

  const footerItems = await getFooterData(apolloClient)

  const { data: list } = await apolloClient.query({
    query: GET_FAVORITES_YACHTS,
    variables: {
      slugs: favoritesFromCookie,
      limit: query.page ? +query.page * limit : limit,
      sort: query.sort,
      type,
    },
  })
  const { data: pagination } = await apolloClient.query({
    query: GET_FAVORITES_PAGINATION,
    variables: { slugs: favoritesFromCookie, limit, sort: query.sort, type },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      footerItems,
      list,
      pagination,
    },
  }
}

export default Favorites
