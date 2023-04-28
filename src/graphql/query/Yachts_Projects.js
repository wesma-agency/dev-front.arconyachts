import { gql } from '@apollo/client'

export const GET_PROJECTS_YACHTS_PAGINATION = gql`
  query YachtsList(
    $shipyards: [String]
    $conditions: [String]
    $body: [String]
    $year_built: [Int]
    $speeds: [Float]
    $length: [Float]
    $length_type: String
    $cabins: [String]
    $guests: [String]
    $tags: [String]
    $query: String
    $sort: String
    $limit: Int
    $type: String
  ) {
    yachts(
      type: $type
      shipyards: $shipyards
      year_built: $year_built
      speeds: $speeds
      length: $length
      length_type: $length_type
      conditions: $conditions
      body: $body
      cabins: $cabins
      guests: $guests
      tags: $tags
      query: $query
      sort: $sort
      limit: $limit
    ) {
      total
      per_page
      current_page
      from
      to
      last_page
      has_more_pages
    }
  }
`

export const GET_PROJECTS_YACHTS_LIST = gql`
  query YachtsList(
    $shipyards: [String]
    $body: [String]
    $year_built: [Int]
    $speeds: [Float]
    $length_type: String
    $length: [Float]
    $guests: [String]
    $cabins: [String]
    $tags: [String]
    $query: String
    $sort: String
    $limit: Int
    $type: String = "project"
  ) {
    yachts(
      type: $type
      shipyards: $shipyards
      year_built: $year_built
      speeds: $speeds
      length: $length
      length_type: $length_type
      body: $body
      guests: $guests
      cabins: $cabins
      tags: $tags
      query: $query
      sort: $sort
      limit: $limit
    ) {
      total
      per_page
      current_page
      from
      to
      last_page
      has_more_pages
      data {
        slug
        id
        images {
          fullpath
          previewpath
          id
        }
        name
        main_name
        ex_name
        year_built
        year_renovation
        length_m
        length_ft
        number_cabins
        number_guests
        condition
        teaser
        is_sale
        is_rent
        is_hide_cost
        is_rent_day
        is_rent_week
        rent_day_euro
        rent_day_dollar
        rent_day_pound
        rent_day_ruble
        rent_week_euro
        rent_week_dollar
        rent_week_pound
        rent_week_ruble
        is_hide_rent_week_cost
        is_hide_rent_day_cost
        cost_euro
        cost_dollar
        cost_pound
        cost_ruble
      }
    }
  }
`
