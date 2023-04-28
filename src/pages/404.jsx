import MainLayout from 'layouts/MainLayout'
import React from 'react'
import styled from 'styled-components'
import { typography } from 'utils/mixins'
import { media } from 'utils/vars'
import { useTranslation } from '../utils/useTranslation'
import Head from 'next/head'
import { notFoundStatic } from 'config/static/notFound'
import { headerStatic } from 'config/static/header'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { initializeApollo } from 'graphql/apollo'
import { REVALIDATE_INTERVAL } from 'utils/vars'
import { getFooterData } from 'utils/getFooterData'

const Wrapper = styled.div`
  margin: 124px auto 192px;
  width: 80%;

  ${media.ultraWide} {
    width: 100%;
  }

  ${media.tablet} {
    margin-top: 60px;
    margin-bottom: 100px;
  }
`

const Page = styled.span`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.4;

  ${media.tablet} {
    line-height: 12px;
  }
`

const Header = styled.h1`
  ${typography.h1};
  width: 94%;
  line-height: 88px;
  font-weight: 500;
  white-space: pre-wrap;

  ${media.ultraWide} {
    margin-left: -1vw;
  }

  ${media.notebook} {
    margin-left: 0;
  }
`

const NotFound = ({ footerItems }) => {
  const notFoundStatic = useTranslation('notFoundStatic')

  return (
    <MainLayout breadcrumbs={false} showInfo={false} footerItems={footerItems}>
      <Head>
        <title>{notFoundStatic.meta.title}</title>
        <meta name="description" content={notFoundStatic.meta.description} />
      </Head>
      <Wrapper>
        <Page>{notFoundStatic.page}</Page>
        <Header>{notFoundStatic.header}</Header>
      </Wrapper>
    </MainLayout>
  )
}

NotFound.translation = {
  ...getTranslations({
    notFoundStatic: notFoundStatic,
    headerStatic: headerStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    notificationStatic: notificationStatic,
  }),
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

export default NotFound
