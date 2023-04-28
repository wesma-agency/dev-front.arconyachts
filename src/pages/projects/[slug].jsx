import React from 'react'
import MainLayout from 'layouts/MainLayout'
import { initializeApollo } from 'graphql/apollo'
import { useRouter } from 'next/router'
import { GET_PROJECT } from 'graphql/query/Project'
import { useQuery } from '@apollo/client'
import ProjectPage from 'components/ProjectPage'
import { transformYacht } from 'utils/transformYacht'
import NotFound from 'pages/404'
import Head from 'next/head'
import { useTranslation } from 'utils/useTranslation'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { detailYachtStatic } from 'config/static/detailYacht'
import { detailHeaderStatic } from 'config/static/detailHeader'
import { yachtCatalogStatic } from 'config/static/yachtCatalog'
import { shipyardStatic } from 'config/static/shipyard'
import { sortsStatic } from 'config/static/sortFilters'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { getFooterData } from 'utils/getFooterData'
import { spoilerStatic } from 'config/static/spoiler'
import { notFoundStatic } from 'config/static/notFound'

const ProjectDetail = ({ footerItems, yachts }) => {
  const { query } = useRouter()
  // const { data } = useQuery(GET_PROJECT, { variables: { slug: query.slug } })
  const yacht = yachts.data[0]
  const detailYachtStatic = useTranslation('detailYachtStatic')
  let {main_name, shipyard} = yacht;
  let mainNameWithoutShipyard = null;
  if(main_name && shipyard && shipyard.name) {
    let reg = new RegExp(shipyard.name, 'gi');
    mainNameWithoutShipyard = main_name.replace(reg, '');
  }

  if (!yacht) {
    return <NotFound footerItems={footerItems} />
  }
  return (
    <MainLayout
      showInfo={false}
      breadcrumbsTitle={`${yacht.shipyard?.name} 
      ${mainNameWithoutShipyard ? mainNameWithoutShipyard : yacht.main_name}`}
      footerItems={footerItems}
    >
      <Head>
        <title>
          {yacht.seo.title
            ? yacht.seo.title
            : `${detailYachtStatic.metaProject.title} ${yacht.main_name} - Arcon Yachts`}
        </title>
        <meta
          name="description"
          content={
            yacht.seo.description
              ? yacht.seo.description
              : `${yacht.main_name} ${detailYachtStatic.metaProject.description} `
          }
        />
      </Head>
      <ProjectPage yacht={transformYacht(yacht, 'project')} />
    </MainLayout>
  )
}

ProjectDetail.translation = {
  ...getTranslations({
    detailYachtStatic: detailYachtStatic,
    detailHeaderStatic: detailHeaderStatic,
    yachtCatalogStatic: yachtCatalogStatic,
    shipyardStatic: shipyardStatic,
    sortsStatic: sortsStatic,
    feedbackFormStatic: feedbackFormStatic,
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
  const apolloClient = initializeApollo(ctx)
  const { query } = ctx
  const {
    data: { yachts },
  } = await apolloClient.query({
    query: GET_PROJECT,
    variables: { slug: query.slug },
  })

  if (yachts.data.length < 1) {
    return {
      notFound: true,
    }
  }

  const footerItems = await getFooterData(apolloClient)

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      footerItems,
      yachts,
    },
  }
}

export default ProjectDetail
