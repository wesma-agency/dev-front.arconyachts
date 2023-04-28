import ManagementPage from 'components/ManagementPage'
import MainLayout from 'layouts/MainLayout'
import React from 'react'
import Head from 'next/head'
import FeedbackForm from 'components/FeedbackForm'
import { FormType } from 'utils/formType'
import { useTranslation } from 'utils/useTranslation'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { servicesStatic } from 'config/static/service'
import { aboutStatic } from 'config/static/about'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { initializeApollo } from 'graphql/apollo'
import { REVALIDATE_INTERVAL } from 'utils/vars'
import { getFooterData } from 'utils/getFooterData'

const Management = ({ footerItems }) => {
  const servicesStatic = useTranslation('servicesStatic')
  const aboutStatic = useTranslation('aboutStatic')

  return (
    <MainLayout showInfo={false} footerItems={footerItems}>
      <Head>
        <title>{servicesStatic.meta.title}</title>
        <meta name="description" content={servicesStatic.meta.description} />
      </Head>
      <ManagementPage maintenances={servicesStatic.maintenances} />
      <FeedbackForm
        {...aboutStatic.contactForm.management}
        formType={FormType.managementRequest}
      />
    </MainLayout>
  )
}

Management.translation = {
  ...getTranslations({
    servicesStatic: servicesStatic,
    aboutStatic: aboutStatic,
    feedbackFormStatic: feedbackFormStatic,
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

export default Management
