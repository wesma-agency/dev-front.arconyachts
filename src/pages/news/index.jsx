import { useQuery } from '@apollo/client'
import NewsMainPage from 'components/NewsMainPage'
import { yachtsFiltersStatic } from 'config/static/yachtsFilters'
import { initializeApollo } from 'graphql/apollo'
import {
  GET_NEWS_LIST,
  GET_NEWS_PAGE,
  GET_NEWS_PAGINATION,
} from 'graphql/query/News'
import MainLayout from 'layouts/MainLayout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getUniqueListBy } from 'utils/arrayHelpers'
import { useTranslation } from 'utils/useTranslation'
import Head from 'next/head'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { newsStatic } from 'config/static/news'
import { yachtCatalogStatic } from 'config/static/yachtCatalog'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { homeStatic } from 'config/static/home'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { rangeInput } from 'config/static/rangeInput'
import { locationSearch } from 'config/static/locationSearch'
import { getFooterData } from 'utils/getFooterData'
import { spoilerStatic } from 'config/static/spoiler'

const limit = 6

const getFilterItems = ({ shipyards, tags, locale }) => {
  try {
    return [
      {
        type: 'checkbox',
        title: yachtsFiltersStatic(locale === 'ru').shipyards.title,
        activeTitle: yachtsFiltersStatic(locale === 'ru').shipyards.activeTitle,
        items: shipyards.map((shipyard) => ({
          name: shipyard.name,
          slug: shipyard.slug,
        })),
        param: 'shipyard',
      },

      ...getUniqueListBy(
        tags.map((item) => ({
          type: 'toggle',
          title: item.name,
          slug: item.slug,
          param: 'tag',
          quantity: item.yachts_count,
        })),
        'slug'
      ),
    ]
  } catch {
    return []
  }
}

const News = ({ footerItems }) => {
  const router = useRouter()
  const { query, locale } = router
  const { data: content } = useQuery(GET_NEWS_PAGE)
  const shipyards = content.page_news.shipyards
  const tags = content.page_news.tags
  const [filterItems, setFilterItems] = useState(
    getFilterItems({ shipyards, tags, locale })
  )
  useEffect(() => {
    setFilterItems(getFilterItems({ shipyards, tags, locale }))
  }, [tags])
  const filters = {
    shipyards: query.shipyard,
    tags: query.tag,
    limit: query.page ? +query.page * limit : limit,
  }

  const { data: pagination } = useQuery(GET_NEWS_PAGINATION, {
    variables: {
      ...filters,
      limit,
    },
  })

  const { data: news } = useQuery(GET_NEWS_LIST, {
    variables: filters,
  })

  const [paginationData, setPaginationData] = useState(pagination)
  const [newsData, setNewsData] = useState(news)
  useEffect(() => {
    if (pagination) {
      setPaginationData(pagination)
    }
  }, [pagination])
  useEffect(() => {
    if (news) {
      setNewsData(news)
    }
  }, [news])
  const newsStatic = useTranslation('newsStatic')
  return (
    <MainLayout
      infoTitle={newsStatic.epilogueTitle}
      epilogueText={content.page_news.epilogue}
      footerItems={footerItems}
    >
      <Head>
        <title>{newsStatic.meta.title}</title>
        <meta name="description" content={newsStatic.meta.description} />
      </Head>
      <NewsMainPage
        filterItems={filterItems}
        pagination={paginationData}
        news={newsData}
        yachtsList={content.page_news.specials}
      />
    </MainLayout>
  )
}

News.translation = {
  ...getTranslations({
    newsStatic: newsStatic,
    yachtsFiltersStatic: yachtsFiltersStatic,
    yachtCatalogStatic: yachtCatalogStatic,
    feedbackFormStatic: feedbackFormStatic,
    homeStatic: homeStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    notificationStatic: notificationStatic,
    rangeInput: rangeInput,
    locationSearch: locationSearch,
    spoiler: spoilerStatic,
  })
}

export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo(ctx)
  const { query } = ctx

  const filters = {
    shipyards: query.shipyard,
    tags: query.tag,
    limit: query.page ? +query.page * limit : limit,
  }

  const [footerItems] = await Promise.all([
    getFooterData(apolloClient),
    apolloClient.query({ query: GET_NEWS_PAGE }),
    apolloClient.query({
      query: GET_NEWS_PAGINATION,
      variables: { ...filters, limit },
    }),
    apolloClient.query({ query: GET_NEWS_LIST, variables: filters })
  ])

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      footerItems,
    },
  }
}

export default News
