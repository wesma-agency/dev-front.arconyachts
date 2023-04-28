import { gql } from '@apollo/client'

export const GET_FILTERS = gql`
  query Filters($type: String) {
    page_yachts(type: $type) {
      filter {
        conditions {
          key
          value
        }
        cabins {
          key
          value
        }
        guests {
          key
          value
        }
        tags {
          id
          name
          slug
        }
        shipyards {
          name
          slug
        }
        body {
          name
          slug
        }
      }
    }
  }
`

export const GET_SITEMAP_LOCATIONS = gql`
  query Locations {
    locations {
      childrens {
        id
        name
        slug
      }
    }
  }
`

export const GET_META_ITEMS = gql`
    query YachtMetaItem {
        yacht_meta_items {
            value
            type
        }
    }
`