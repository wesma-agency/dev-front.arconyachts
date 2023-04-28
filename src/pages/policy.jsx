import MainLayout from 'layouts/MainLayout'
import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { typography } from '../utils/mixins'
import { media } from '../utils/vars'
import { useTranslation } from 'utils/useTranslation'
import { headerStatic } from 'config/static/header'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { policyStatic } from 'config/static/policy'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { initializeApollo } from 'graphql/apollo'
import { REVALIDATE_INTERVAL } from 'utils/vars'
import { getFooterData } from 'utils/getFooterData'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  ${media.ultraWide} {
    width: 100%;
  }
`

const Header = styled.h1`
  ${typography.h1};
  line-height: 120%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-top: 140px;
  margin-bottom: 40px;
  hyphens: none;

  ${media.ultraWide} {
    margin-left: -1vw;
    white-space: pre-wrap;
  }

  ${media.tablet} {
    margin-top: 60px;
    margin-left: 0;
  }

  ${media.phablet} {
    hyphens: manual;
  }
`

const Description = styled.p`
  ${typography.p};
  letter-spacing: normal;

  &:not(:first-of-type) {
    margin-bottom: 15px;
  }

  &:last-of-type {
    margin-bottom: 200px;
  }

  ${media.ultraWide} {
    width: 68%;
  }

  ${media.notebook} {
    width: 90%;
  }

  ${media.tablet} {
    width: 100%;

    &:not(:first-of-type) {
      margin-bottom: 80px;
    }

    &:last-of-type {
      margin-bottom: 140px;
    }
  }
`

const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 150%;
  letter-spacing: -0.02em;
  margin-top: 60px;
  margin-bottom: 28px;

  ${media.fullhd} {
    font-size: 36px;
  }

  ${media.notebook} {
    font-size: 30px;
  }

  ${media.tablet} {
    font-size: 26px;
    line-height: 34px;
  }
`

const Agreement = ({ footerItems }) => {
  const policyStatic = useTranslation('policyStatic')
  return (
    <MainLayout breadcrumbs={false} showInfo={false} footerItems={footerItems}>
      <Head>
        <title>{policyStatic.meta.title}</title>
        <meta name="description" content={policyStatic.meta.description} />
      </Head>
      <Wrapper>
        <Header>{policyStatic.header}</Header>
        <Description>{policyStatic.description}</Description>
        <SubTitle>{policyStatic.subTitle}</SubTitle>
        {policyStatic.information.map((paragraph, index) => (
          <Description key={index}>{paragraph}</Description>
        ))}
      </Wrapper>
    </MainLayout>
  )
}

Agreement.translation = {
  ...getTranslations({
    policyStatic: policyStatic,
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

export default Agreement
