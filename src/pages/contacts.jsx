import React from 'react'
import MainLayout from 'layouts/MainLayout'
import ContactsPage from 'components/ContactsPage'
import Head from 'next/head'
import { useTranslation } from 'utils/useTranslation'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { initializeApollo } from 'graphql/apollo'
import { REVALIDATE_INTERVAL } from 'utils/vars'
import { getFooterData } from 'utils/getFooterData'

const Contacts = ({ footerItems }) => {
  const contactsStatic = useTranslation('contactsStatic')
  return (
    <MainLayout showInfo={false} showHeadquarter={false} smallIndent footerItems={footerItems}>
      <Head>
        <title>{contactsStatic.meta.title}</title>
        <meta name="description" content={contactsStatic.meta.description} />
      </Head>
      <ContactsPage />
    </MainLayout>
  )
}

Contacts.translation = {
  ...getTranslations({
    contactsStatic: contactsStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
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

export default Contacts
