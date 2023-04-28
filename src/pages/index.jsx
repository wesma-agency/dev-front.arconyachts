import { useLazyQuery, useQuery } from '@apollo/client'
import FeedbackForm from 'components/FeedbackForm'
import MainPage from 'components/MainPage'
import MainNews from 'components/MainPage/MainNews/MainNews'
import { initializeApollo } from 'graphql/apollo'
import { GET_HOME_BANNER } from 'graphql/query/Home'
import { GET_NEWS_LIST } from 'graphql/query/News'
import { GET_YACHT_SALE } from 'graphql/query/Yacht_Sale'
import { GET_SHIPYARDS_LIST } from 'graphql/query/Shipyard'
import { GET_CHARTER_YACHTS_LIST } from 'graphql/query/Yachts_Charter'
import MainLayout from 'layouts/MainLayout'
import Head from 'next/head'
import React from 'react'
import { FormType } from 'utils/formType'
import { useTranslation } from 'utils/useTranslation'
import { homeStatic } from 'config/static/home'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { shipyardStatic } from 'config/static/shipyard'
import { yachtCardStatic } from 'config/static/yachtCard'
import { servicesStatic } from 'config/static/service'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { sliderStatic } from 'config/static/slider'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { REVALIDATE_INTERVAL } from 'utils/vars'
import { getFooterData } from 'utils/getFooterData'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { GET_FOOTER_SALE } from 'graphql/query/Footer'

export const MainContext = React.createContext({})

const Home = ({ initialProps }) => {
  const { locale } = useRouter()
  const { bannerData, shipyardsData, newsData } = initialProps
  const homeStatic = useTranslation('homeStatic')
  const { infoTitle, infoContent } = homeStatic

  const contextData = {
    charterData: initialProps.charterData,
    saleData: initialProps.saleData,
  }

  const [context, setContext] = useState(contextData)

  const [loadSaleData, { data: saleData }] = useLazyQuery(
    GET_CHARTER_YACHTS_LIST,
    {
      variables: { type: 'cost', limit: 16 },
      fetchPolicy: 'network-only',
    }
  )

  useEffect(() => {
    loadSaleData()
    loadSale()
  }, [locale])

  useEffect(() => {
    saleData && setContext((prev) => ({ ...prev, saleData }))
  }, [saleData])

  // Footer Refetch
  const [footerItems, setFooterItems] = useState(initialProps.footerItems)
  const [loadSale, { data: footerSale }] = useLazyQuery(GET_FOOTER_SALE, {
    fetchPolicy: 'network-only',
  })
  useEffect(() => {
    if (footerSale) {
      // setFooterItems((prev) => ({ ...prev, ...footerSale }))
      setFooterItems((prev) => ({ ...prev, ...initialProps.footerItems }))
    }
  }, [footerSale])
  // Footer RefetcEnd
  return (
    <MainLayout
      breadcrumbs={false}
      infoTitle={infoTitle}
      infoContent={infoContent}
      footerItems={footerItems}
    >
      <Head>
        <title>{homeStatic.meta.title}</title>
        <meta name={'description'} content={homeStatic.meta.description} />
      </Head>
      <MainContext.Provider value={context}>
        <MainPage
          banners={bannerData.home_banners}
          shipyards={shipyardsData.shipyards.data}
        />
      </MainContext.Provider>
      <FeedbackForm {...homeStatic.form} formType={FormType.yachtSelection} />
      {newsData.news.data.length > 0 && (
        <MainNews
          isMain={true}
          title={homeStatic.news.title}
          news={newsData.news.data}
        />
      )}
    </MainLayout>
  )
}

Home.translation = {
  ...getTranslations({
    homeStatic: homeStatic,
    shipyardStatic: shipyardStatic,
    yachtCardStatic: yachtCardStatic,
    servicesStatic: servicesStatic,
    feedbackFormStatic: feedbackFormStatic,
    sliderStatic: sliderStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    notificationStatic: notificationStatic,
  }),
}

export async function getStaticProps(ctx) {
  const apolloClient = initializeApollo(ctx)
  const footerItems = await getFooterData(apolloClient)
  const { data: bannerData } = await apolloClient.query({
    query: GET_HOME_BANNER,
  })
  const { data: shipyardsData } = await apolloClient.query({
    query: GET_SHIPYARDS_LIST,
  })
  const { data: newsData } = await apolloClient.query({
    query: GET_NEWS_LIST,
    variables: { limit: 6 },
  })
  const { data: saleData } = await apolloClient.query({
    query: GET_CHARTER_YACHTS_LIST,
    variables: { type: 'cost', limit: 6 },
  })
  const { data: charterData } = await apolloClient.query({
    query: GET_CHARTER_YACHTS_LIST,
    variables: { type: 'rent_week', limit: 6},
  })

  const initialProps = {
    footerItems,
    bannerData,
    shipyardsData,
    newsData,
    saleData,
    charterData,
  }

  return {
    props: {
      initialProps,
    },
    revalidate: REVALIDATE_INTERVAL,
  }
}

export default Home
