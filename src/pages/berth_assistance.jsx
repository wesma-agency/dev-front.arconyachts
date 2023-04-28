import MainLayout from 'layouts/MainLayout'
import React from 'react'
import DockPage from 'components/DockPage'
import { useTranslation } from 'utils/useTranslation'
import Head from 'next/head'
import { dockStatic } from 'config/static/service'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { notificationStatic } from 'config/static/notification'
import { getTranslations } from 'utils/translationHelpers'
import { initializeApollo } from 'graphql/apollo'
import { REVALIDATE_INTERVAL } from 'utils/vars'
import { getFooterData } from 'utils/getFooterData'

const Dock = ({ footerItems }) => {
  const content = useTranslation('dockStatic')

  return (
    <MainLayout showInfo={false} footerItems={footerItems}>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>
      <DockPage />
    </MainLayout>
  )
}

Dock.translation = {
  ...getTranslations({
    dockStatic: dockStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    notificationStatic: notificationStatic,
  })
}
export async function getStaticProps(ctx) {
  const apolloClient = initializeApollo(ctx)
  const footerItems = await getFooterData(apolloClient)

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      footerItems,
    },
    revalidate: REVALIDATE_INTERVAL,
  }
}

export default Dock
