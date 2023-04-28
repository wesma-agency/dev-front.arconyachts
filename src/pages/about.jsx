import { useQuery } from '@apollo/client'
import AboutIntro from 'components/AboutIntro'
import AboutPeople from 'components/AboutPeople'
import { StyledFeedbackForm } from 'components/ProjectsPage/ProjectsPage.styled'
import { initializeApollo } from 'graphql/apollo'
import { GET_ABOUT_PAGE } from 'graphql/query/About'
import MainLayout from 'layouts/MainLayout'
import React from 'react'
import FeedbackModal from 'ui/Modals/FeedbackModal'
import { divideFilter } from 'utils/divideFilter'
import { useModal } from 'utils/useModal'
import { useTranslation } from 'utils/useTranslation'
import Head from 'next/head'
import { FormType } from 'utils/formType'
import { aboutStatic as aboutStaticTranslation } from 'config/static/about'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { REVALIDATE_INTERVAL } from 'utils/vars'
import { getFooterData } from 'utils/getFooterData'

const About = ({ footerItems }) => {
  const { data } = useQuery(GET_ABOUT_PAGE)
  const { presentation, count_yachts, managers: people } = data.page_about
  const [founders, managers] = people
    ? divideFilter(people, (item) => item.is_lead)
    : [null, null]

  const { openModal, closeModal, modalRef, isOpened } = useModal()
  const aboutStatic = useTranslation('aboutStatic')

  return (
    <MainLayout showInfo={false} smallIndent footerItems={footerItems}>
      <Head>
        <title>{aboutStatic.meta.title}</title>
        <meta name="description" content={aboutStatic.meta.description} />
      </Head>
      <AboutIntro presentation={presentation} yachtsCount={count_yachts} />
      {founders ? (
        <AboutPeople
          data={founders}
          {...aboutStatic.founders}
          hasEmail={false}
          onClick={openModal}
        />
      ) : null}
      {managers ? (
        <AboutPeople
          data={managers}
          {...aboutStatic.managers}
          largeIndent
          onClick={openModal}
        />
      ) : null}
      <StyledFeedbackForm
        withTextArea
        {...aboutStatic.contactForm.about}
        formType={FormType.needConsultation}
      />

      {isOpened && (
        <FeedbackModal
          ref={modalRef}
          {...aboutStatic.contactForm.about}
          closeModal={closeModal}
          formType={FormType.needConsultation}
        />
      )}
    </MainLayout>
  )
}

About.translation = {
  ...getTranslations({
    aboutStatic: aboutStaticTranslation,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    feedbackFormStatic: feedbackFormStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    notificationStatic: notificationStatic,
  }),
}

export async function getStaticProps(ctx) {
  const apolloClient = initializeApollo(ctx)

  const [footerItems] = await Promise.all([
    getFooterData(apolloClient),
    apolloClient.query({ query: GET_ABOUT_PAGE }),
  ])

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      footerItems,
    },
    revalidate: REVALIDATE_INTERVAL,
  }
}

export default About
