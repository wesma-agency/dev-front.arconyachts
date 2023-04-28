import { useQuery } from '@apollo/client'
import ShipyardCatalog from 'components/ShipyardCatalog'
import { shipyardCatalogStatic as getShipyardCatalogStatic } from 'config/static/shipyradCatalog'
import { initializeApollo } from 'graphql/apollo'
import {
  GET_SHIPYARDS_LIST,
  GET_SHIPYARDS_PAGE_CONTENT,
} from 'graphql/query/Shipyard'
import MainLayout from 'layouts/MainLayout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'utils/useTranslation'
import Head from 'next/head'
import { PATH } from 'config/path'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { notificationStatic } from 'config/static/notification'
import { getTranslations } from 'utils/translationHelpers'
import { yachtsFiltersStatic } from 'config/static/yachtsFilters'
import { yachtCatalogStatic } from 'config/static/yachtCatalog'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { homeStatic } from 'config/static/home'
import { shipyardStatic } from 'config/static/shipyard'
import { rangeInput } from 'config/static/rangeInput'
import { locationSearch } from 'config/static/locationSearch'
import { getFooterData } from 'utils/getFooterData'
import { spoilerStatic } from 'config/static/spoiler'

const limit = 1000

const getChars = (query) => {
  if (query) {
    if (Array.isArray(query)) {
      return [...query.map((item) => item.toUpperCase()).join('')]
    } else {
      return [...query.toUpperCase()]
    }
  } else {
    return []
  }
}

const Shipyards = ({ content, filterItems, footerItems }) => {
  const router = useRouter()
  const { query } = router
  // useEffect(() => {
  //   if (!query.letter && !query.location) {
  //     router.push(
  //       {
  //         pathname: PATH.SHIPYARDS,
  //         query: { ...query, letter: 'ABC' },
  //       },
  //       undefined,
  //       { shallow: true }
  //     )
  //   }
  // }, [query])

  const { data: defaultShipyards } = useQuery(GET_SHIPYARDS_LIST, {
    variables: { limit, char: getChars(query.letter) },
  })

  const { data: shipyards } = useQuery(GET_SHIPYARDS_LIST, {
    variables: {
      limit,
      char: getChars(query.letter),
      locations: query.location,
    },
  })
  const [data, setData] = useState(shipyards)
  useEffect(() => {
    if (shipyards) {
      setData(shipyards)
    }
  }, [shipyards])
  const shipyardCatalogStatic = useTranslation('shipyardCatalogStatic')

  return (
    <MainLayout
      infoTitle={shipyardCatalogStatic.epilogue}
      epilogueText={shipyardCatalogStatic.epilogueText}
      footerItems={footerItems}
    >
      <Head>
        <title>{shipyardCatalogStatic.meta.title}</title>
        <meta
          name="description"
          content={shipyardCatalogStatic.meta.description}
        />
      </Head>
      <ShipyardCatalog
        filterItems={filterItems}
        shipyardsList={data}
        defaultShipyards={defaultShipyards}
        content={content.page_shipyards}
      />
    </MainLayout>
  )
}

Shipyards.translation = {
  ...getTranslations({
    shipyardCatalogStatic: getShipyardCatalogStatic,
    yachtsFiltersStatic: yachtsFiltersStatic,
    yachtCatalogStatic: yachtCatalogStatic,
    feedbackFormStatic: feedbackFormStatic,
    homeStatic: homeStatic,
    shipyardStatic: shipyardStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    notificationStatic: notificationStatic,
    rangeInput: rangeInput,
    locationSearch: locationSearch,
    spoiler: spoilerStatic,
  }),
}

export async function getServerSideProps(ctx) {
  const { query, locale } = ctx
  const { letter, location } = query
  const apolloClient = initializeApollo(ctx)

  const [footerItems, { data: content }] = await Promise.all([
    getFooterData(apolloClient),
    apolloClient.query({
      query: GET_SHIPYARDS_PAGE_CONTENT,
    }),
    apolloClient.query({
      query: GET_SHIPYARDS_LIST,
      variables: { char: getChars(letter), locations: location },
    }),
    apolloClient.query({
      query: GET_SHIPYARDS_LIST,
      variables: { limit },
    }),
  ])

  const filterItems = [
    {
      type: 'checkbox',
      title: getShipyardCatalogStatic(locale === 'ru').filter.country,
      activeTitle: getShipyardCatalogStatic(locale === 'ru').filter.country,
      items: content.page_shipyards.filter.locations.map((location) => ({
        name: location.name,
        slug: location.slug,
        ignoreCompilation: true,
        isCompilation: false,
      })),
      param: 'location',
      singleActiveTitle: true,
    },
    ...content.page_shipyards.filter.locations
      .map((location) => ({
        type: 'toggle',
        title: location.name,
        quantity: location.count_shipyards,
        slug: location.slug,
        param: 'location',
        ignoreCompilation: true,
      }))
      .sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0)),
  ]

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItems ? filterItems : null,
      content: content ? content : null,
      footerItems,
    },
  }
}

export default Shipyards
