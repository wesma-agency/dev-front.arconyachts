import { gql } from '@apollo/client'

export const GET_FAVORITES_YACHTS = gql`
  query YachtsList(
    $sort: String
    $slugs: [String]
    $limit: Int
    $type: String
  ) {
    yachts(type: $type, sort: $sort, slugs: $slugs, limit: $limit) {
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
export const GET_FAVORITES_PAGINATION = gql`
  query YachtsList(
    $sort: String
    $slugs: [String]
    $limit: Int
    $type: String
  ) {
    yachts(type: $type, sort: $sort, slugs: $slugs, limit: $limit) {
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
