import React from 'react'
import Head from 'next/head'
import MainLayout from 'layouts/MainLayout'
import LawPage from 'components/LawPage'
import FeedbackForm from 'components/FeedbackForm'
import { FormType } from 'utils/formType'
import { useTranslation } from 'utils/useTranslation'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { lawStatic } from 'config/static/service'
import { aboutStatic } from 'config/static/about'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { initializeApollo } from 'graphql/apollo'
import { REVALIDATE_INTERVAL } from 'utils/vars'
import { getFooterData } from 'utils/getFooterData'

const LegalServices = ({ footerItems }) => {
  const content = useTranslation('lawStatic')
  const aboutStatic = useTranslation('aboutStatic')

  return (
    <MainLayout showInfo={false} footerItems={footerItems}>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>
      <LawPage />
      <FeedbackForm
        {...aboutStatic.contactForm.legalServices}
        formType={FormType.managementRequest}
      />
    </MainLayout>
  )
}

LegalServices.translation = {
  ...getTranslations({
    lawStatic: lawStatic,
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

export default LegalServices
