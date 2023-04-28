import { gql } from '@apollo/client'

export const YACHT_META_ITEMS = gql`
  query YachtMetaItems {
    yacht_meta_items {
      name
      type
      filter
      value
    }
  }
`

export const GET_SALE_YACHT_META = gql`
  query YachtMeta(
    $filter: String
    $value: String
  ) {
    yacht_meta(
      type: "sale"
      filter: $filter
      value: $value
    ) {
      page_title
      description
      seo_title
      seo_description
      seo_keywords
      prefix
      postfix
    }
  }
`

export const GET_CHARTERS_YACHT_META = gql`
  query YachtMeta(
    $filter: String
    $value: String
  ) {
    yacht_meta(
      type: "rent"
      filter: $filter
      value: $value
    ) {
      page_title
      description
      seo_title
      seo_description
      seo_keywords
      prefix
      postfix
    }
  }
`
