import { useQuery } from '@apollo/client'
import ShipyardPage from 'components/ShipyardPage'
import { initializeApollo } from 'graphql/apollo'
import { GET_SHIPYARD } from 'graphql/query/Shipyard'
import MainLayout from 'layouts/MainLayout'
import { useRouter } from 'next/router'
import NotFound from 'pages/404'
import React from 'react'
import { useTranslation } from 'utils/useTranslation'
import Head from 'next/head'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { notificationStatic } from 'config/static/notification'
import { shipyardStatic } from 'config/static/shipyard'
import { getTranslations } from 'utils/translationHelpers'
import { detailHeaderStatic } from 'config/static/detailHeader'
import { sortsStatic } from 'config/static/sortFilters'
import { yachtCardStatic } from 'config/static/yachtCard'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { getFooterData } from 'utils/getFooterData'
import { spoilerStatic } from 'config/static/spoiler'
import { notFoundStatic } from 'config/static/notFound'

const Shipyard = ({ footerItems }) => {
  const router = useRouter()
  const { data } = useQuery(GET_SHIPYARD, {
    variables: { slug: router.query.slug },
  })

  const shipyardStatic = useTranslation('shipyardStatic')
  if (data?.shipyards?.data.length < 1) {
    return <NotFound footerItems={footerItems} />
  }

  const shipyard = data?.shipyards?.data[0]
  return (
    <MainLayout
      breadcrumbsTitle={shipyard.name}
      infoTitle={`${shipyardStatic.infoTitle} ${shipyard.name}`}
      epilogueText={shipyard.epilogue_text}
      showInfo={!!shipyard.epilogue_text}
      footerItems={footerItems}
    >
      <Head>
        <title>
          {shipyard.seo.title
            ? shipyard.seo.title
            : `${shipyardStatic.metaShipyard.title} ${shipyard.name} - Arcon Yachts`}
        </title>
        <meta
          name="description"
          content={
            shipyard.seo.description
              ? shipyard.seo.description
              : `${shipyardStatic.metaShipyard.description} ${shipyard.name} - Arcon Yachts`
          }
        />
      </Head>
      <ShipyardPage data={shipyard && shipyard} />
    </MainLayout>
  )
}

Shipyard.translation = {
  ...getTranslations({
    detailHeaderStatic: detailHeaderStatic,
    sortsStatic: sortsStatic,
    yachtCardStatic: yachtCardStatic,
    feedbackFormStatic: feedbackFormStatic,
    shipyardStatic: shipyardStatic,
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
    data: { shipyards },
  } = await apolloClient.query({
    query: GET_SHIPYARD,
    variables: { slug },
  })

  if (shipyards.data.length < 1) {
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

export default Shipyard
