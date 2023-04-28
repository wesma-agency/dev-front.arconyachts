import { gql } from '@apollo/client'

export const GET_FOOTER_LOCATIONS = gql`
  query FooterLocations {
    locations {
      childrens {
        name
        slug
        childrens {
          name
          slug
          childrens {
            name
            slug
            childrens {
              name
              slug
            }
          }
        }
      }
    }
  }
`
export const GET_FOOTER_SALE = gql`
  query FooterSaleFilters {
    page_yachts(type: "cost") {
      filter {
        cabins {
          key
          value
        }
        conditions {
          key
          value
        }
        body {
          name
          slug
        }
        tags {
          name
          slug
        }
        guests {
          key
          value
        }
      }
    }
  }
`
export const GET_FOOTER_PROJECTS = gql`
  query FooterProjects {
    yachts(type: "project", limit: 16) {
      data {
        slug
        name
      }
    }
  }
`
export const GET_FOOTER_SHIPYARDS = gql`
  query FooterShipyardsss {
    shipyards(limit: 100) {
      total
      data {
        name
        slug
      }
    }
  }
`
