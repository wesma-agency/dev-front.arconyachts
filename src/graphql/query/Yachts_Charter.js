import { gql, useQuery } from '@apollo/client'

export const GET_CHARTER_YACHTS_PAGINATION = gql`
  query YachtsList(
    $shipyards: [String]
    $conditions: [String]
    $body: [String]
    $year_built: [Int]
    $speeds: [Float]
    $length: [Float]
    $length_type: String
    $price: [String]
    $price_type: String
    $cabins: [String]
    $tags: [String]
    $query: String
    $sort: String
    $limit: Int
    $type: String
    $locations: [String]
    $guests: [String]
  ) {
    yachts(
      type: $type
      shipyards: $shipyards
      year_built: $year_built
      speeds: $speeds
      length: $length
      length_type: $length_type
      price: $price
      price_type: $price_type
      conditions: $conditions
      body: $body
      cabins: $cabins
      tags: $tags
      query: $query
      sort: $sort
      limit: $limit
      locations: $locations
      guests: $guests
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

export const GET_CHARTER_YACHTS_LIST = gql`
    
  query YachtsList(
    $shipyards: [String]
    $conditions: [String]
    $body: [String]
    $year_built: [Int]
    $speeds: [Float]
    $length: [Float]
    $length_type: String
    $price: [String]
    $price_type: String
    $guests: [String]
    $tags: [String]
    $query: String
    $sort: String
    $limit: Int
    $type: String
    $locations: [String]
    $page: Int
  ) {
    yachts(
      type: $type
      shipyards: $shipyards
      year_built: $year_built
      speeds: $speeds
      length: $length
      length_type: $length_type
      price: $price
      price_type: $price_type
      conditions: $conditions
      body: $body
      guests: $guests
      tags: $tags
      query: $query
      sort: $sort
      limit: $limit
      locations: $locations
      page: $page
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

export const GET_SALE_YACHTS_PAGE = gql`
  query YachtsPage($type: String) {
    page_yachts(type: $type) {
      title
      filter {
        price {
          currency
          min
          max
        }
        length
        year_built
        shipyards {
          slug
          name
        }
        body {
          id
          slug
          name
        }
        conditions {
          key
          value
        }
        speeds
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
          yachts_count
        }
      }
    }
  }
`

export const GET_YACHTS_PAGE_BY_TYPE = gql`
  query YachtsPage($type: String) {
    page_yachts(type: $type) {
      title
      filter {
        price {
          currency
          min
          max
        }
        length {
          unit
          min
          max
        }
        year_built
        shipyards {
          slug
          name
        }
        body {
          id
          slug
          name
        }
        conditions {
          key
          value
        }
        speeds
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
          yachts_count
        }
      }
      epilogue
      specials {
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
      rent_terms {
        name
        description
      }
    }
  }
`

export const GET_YACHTS_BY_LOCATIONS = gql`
  query YachtsByLocation($type: String, $locations: [String]) {
    yachts_by_location(type: $type, locations: $locations) {
      locations {
        id
        name
        slug
      }
      list {
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
        locations {
          name
          slug
        }
      }
    }
  }
`

export const GET_FAVORITE_LOCATIONS = gql`
  query FavoriteLocations {
    favorite_locations {
      id
      location {
        name
        slug
        id
      }
      name
      image {
        fullpath
      }
    }
  }
`

export const GET_YACHTS_QUANTITY = gql`
  query YachtsQuantity($type: String) {
    yacht_count(type: $type)
  }
`
