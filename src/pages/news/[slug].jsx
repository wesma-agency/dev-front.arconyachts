import { useQuery } from '@apollo/client'
import NewsPage from 'components/NewsPage'
import { PATH } from 'config/path'
import { initializeApollo } from 'graphql/apollo'
import { GET_NEWS_BY_SLUG } from 'graphql/query/New_Detail'
import MainLayout from 'layouts/MainLayout'
import { useRouter } from 'next/router'
import NotFound from 'pages/404'
import React from 'react'
import Head from 'next/head'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { newsStatic } from 'config/static/news'
import { sliderStatic } from 'config/static/slider'
import { yachtCardStatic } from 'config/static/yachtCard'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { getFooterData } from 'utils/getFooterData'
import { spoilerStatic } from 'config/static/spoiler'
import { notFoundStatic } from 'config/static/notFound'

const NewsDetails = ({ footerItems }) => {
  const { query } = useRouter()
  const { data } = useQuery(GET_NEWS_BY_SLUG, {
    variables: { slug: query.slug },
  })

  if (data.news.data.length < 1) {
    return <NotFound footerItems={footerItems} />
  }

  const news = data.news.data[0]
  const tags = [
    ...news.tags.map((tag) => ({
      pathname: PATH.NEWS,
      param: 'tag',
      title: tag.name,
      slug: tag.slug,
    })),
    ...news.shipyards.map((shipyard) => ({
      pathname: PATH.NEWS,
      param: 'shipyard',
      title: shipyard.name,
      slug: shipyard.slug,
    })),
  ]
  return (
    <MainLayout
      breadcrumbsTitle={news.title}
      showInfo={false}
      tags={tags}
      smallIndent
      footerItems={footerItems}
    >
      <Head>
        <title>{news.title} - Arcon Yachts</title>
        <meta name="description" content={`${news.title} - Arcon Yachts`} />
      </Head>
      <NewsPage content={news} />
    </MainLayout>
  )
}

NewsDetails.translation = {
  ...getTranslations({
    newsStatic: newsStatic,
    sliderStatic: sliderStatic,
    yachtCardStatic: yachtCardStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    notificationStatic: notificationStatic,
    spoiler: spoilerStatic,
    notFoundStatic: notFoundStatic,
  }),
}

export async function getServerSideProps(ctx) {
  const {
    query: { slug },
  } = ctx

  const apolloClient = initializeApollo(ctx)

  const footerItems = await getFooterData(apolloClient)

  const {
    data: { news },
  } = await apolloClient.query({
    query: GET_NEWS_BY_SLUG,
    variables: { slug },
  })

  if (news.data.length < 1) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      footerItems,
    },
  }
}

export default NewsDetails
