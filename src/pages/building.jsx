import { useQuery } from '@apollo/client'
import BuildingPage from 'components/BuildingPage'
import { initializeApollo } from 'graphql/apollo'
import { GET_BUILDING_PAGE } from 'graphql/query/Building'
import MainLayout from 'layouts/MainLayout'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'utils/useTranslation'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { buildingStatic } from 'config/static/building'
import { detailHeaderStatic } from 'config/static/detailHeader'
import { sortsStatic } from 'config/static/sortFilters'
import { shipyardStatic } from 'config/static/shipyard'
import { detailYachtStatic } from 'config/static/detailYacht'
import { yachtCardStatic } from 'config/static/yachtCard'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { REVALIDATE_INTERVAL } from 'utils/vars'
import { getFooterData } from 'utils/getFooterData'

const Building = ({ footerItems }) => {
  const { data } = useQuery(GET_BUILDING_PAGE)
  const buildingStatic = useTranslation('buildingStatic')
  return (
    <MainLayout showInfo={false} footerItems={footerItems}>
      <Head>
        <title>{buildingStatic.meta.title}</title>
        <meta name="description" content={buildingStatic.meta.description} />
      </Head>
      <BuildingPage content={data.page_construction} />
    </MainLayout>
  )
}

Building.translation = {
  ...getTranslations({
    buildingStatic: buildingStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    detailHeaderStatic: detailHeaderStatic,
    sortsStatic: sortsStatic,
    shipyardStatic: shipyardStatic,
    detailYachtStatic: detailYachtStatic,
    yachtCardStatic: yachtCardStatic,
    feedbackFormStatic: feedbackFormStatic,
    notificationStatic: notificationStatic,
  })
}

export async function getStaticProps(ctx) {
  const apolloClient = initializeApollo(ctx)

  const buildingData = apolloClient.query({ query: GET_BUILDING_PAGE })
  const footerData = getFooterData(apolloClient)

  const [footerItems] = await Promise.all([
    footerData,
    buildingData,
  ])
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      footerItems,
    },
    revalidate: REVALIDATE_INTERVAL,
  }
}

export default Building
