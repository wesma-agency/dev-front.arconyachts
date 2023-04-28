import React from 'react'
import Head from 'next/head'
import MainLayout from 'layouts/MainLayout'
import LeasingPage from 'components/LeasingPage'
import FeedbackForm from 'components/FeedbackForm'
import { useTranslation } from 'utils/useTranslation'
import { FormType } from 'utils/formType'
import { getTranslations } from 'utils/translationHelpers'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { leasingStatic } from 'config/static/service'
import { aboutStatic } from 'config/static/about'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { notificationStatic } from 'config/static/notification'
import { initializeApollo } from 'graphql/apollo'
import { REVALIDATE_INTERVAL } from 'utils/vars'
import { getFooterData } from 'utils/getFooterData'

const Leasing = ({ footerItems }) => {
  const content = useTranslation('leasingStatic')
  const aboutStatic = useTranslation('aboutStatic')

  return (
    <MainLayout showInfo={false} footerItems={footerItems}>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>
      <LeasingPage />
      <FeedbackForm
        {...aboutStatic.contactForm.leasing}
        formType={FormType.needRent}
      />
    </MainLayout>
  )
}

Leasing.translation = {
  ...getTranslations({
    aboutStatic: aboutStatic,
    feedbackFormStatic: feedbackFormStatic,
    leasingStatic: leasingStatic,
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

export default Leasing
