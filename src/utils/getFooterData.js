import {
  GET_FOOTER_LOCATIONS,
  GET_FOOTER_SALE,
  GET_FOOTER_PROJECTS,
  GET_FOOTER_SHIPYARDS,
} from 'graphql/query/Footer.js'
import {YACHT_META_ITEMS} from "../graphql/query/Yacht_Meta";

export const getFooterData = async (apolloClient) => {
  const [
    { data: footerLocations },
    { data: footerSale },
    { data: footerProjects },
    { data: footerShipyards },
    { data: metaData }
  ] = await Promise.all([
    apolloClient.query({
      query: GET_FOOTER_LOCATIONS,
    }),
    apolloClient.query({
      query: GET_FOOTER_SALE,
    }),
    apolloClient.query({
      query: GET_FOOTER_PROJECTS,
    }),
    apolloClient.query({
      query: GET_FOOTER_SHIPYARDS,
    }),
    apolloClient.query({
      query: YACHT_META_ITEMS
    })
  ])

  return {
    ...footerLocations,
    ...footerSale,
    ...footerProjects,
    ...footerShipyards,
    ...metaData
  } || null
}