import MainLayout from 'layouts/MainLayout'
import SitemapPage from 'components/SitemapPage'
import { initializeApollo } from 'graphql/apollo'
import { useQuery } from '@apollo/client'
import { GET_FILTERS, GET_SITEMAP_LOCATIONS, GET_META_ITEMS } from 'graphql/query/Sitemap'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'utils/useTranslation'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { sitemapStatic } from 'config/static/sitemap'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { REVALIDATE_INTERVAL } from 'utils/vars'
import { getFooterData } from 'utils/getFooterData'

const Sitemap = ({ footerItems }) => {
  const { data: saleFiltersData } = useQuery(GET_FILTERS, {
    variables: { type: 'cost' },
  })
  const { data: charterFiltersData } = useQuery(GET_FILTERS, {
    variables: { type: 'rent_week' },
  })
  const { data: locations } = useQuery(GET_SITEMAP_LOCATIONS)

  const { data: yachtMetaItem } = useQuery(GET_META_ITEMS)

  const sitemapStatic = useTranslation('sitemapStatic')
  return (
    <MainLayout showInfo={false} showHeadquarter={false} footerItems={footerItems}>
      <Head>
        <title>{sitemapStatic.meta.title}</title>
        <meta name="description" content={sitemapStatic.meta.description} />
      </Head>
      <SitemapPage
        saleFilters={saleFiltersData.page_yachts.filter}
        charterFilters={charterFiltersData.page_yachts.filter}
        locations={locations.locations
          .flat()
          .map((item) => item.childrens)
          .flat()}
        metaItems={yachtMetaItem.yacht_meta_items}
      />
    </MainLayout>
  )
}

Sitemap.translation = {
  ...getTranslations({
    sitemapStatic: sitemapStatic,
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

  await Promise.all([
    apolloClient.query({ query: GET_FILTERS, variables: { type: 'cost' } }),
    apolloClient.query({
      query: GET_FILTERS,
      variables: { type: 'rent_week' },
    }),
    apolloClient.query({ query: GET_SITEMAP_LOCATIONS }),
  ])

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      footerItems,
    },
    revalidate: REVALIDATE_INTERVAL,
  }
}

export default Sitemap
