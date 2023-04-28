import { gql } from '@apollo/client'

export const GET_SHIPYARDS_PAGE_CONTENT = gql`
  query PageShipyards {
    page_shipyards {
      title
      description
      epilogue
      filter {
        characters
        locations {
          id
          name
          slug
          count_shipyards
        }
      }
    }
  }
`

export const GET_SHIPYARDS_LIST = gql`
  query Shipyards(
    $slug: String
    $limit: Int
    $page: Int
    $locations: [String]
    $char: [String]
  ) {
    shipyards(
      slug: $slug
      limit: $limit
      page: $page
      locations: $locations
      char: $char
    ) {
      data {
        sort
        id
        name
        logo {
          id
          fullpath
        }
        preview {
          id
          fullpath
        }
        slug
        count_yachts
      }
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

export const GET_SHIPYARD = gql`
  query Shipyard(
    $slug: String
    $limit: Int
    $page: Int
    $locations: [String]
    $char: [String]
  ) {
    shipyards(
      slug: $slug
      limit: $limit
      page: $page
      locations: $locations
      char: $char
    ) {
      data {
        id
        slug
        name
        count_yachts
        preview {
          fullpath
        }
        logo {
          id
          fullpath
        }
        location {
          name
          name_genitive
        }
        year_of_foundation
        images {
          id
          fullpath
        }
        about_text
        sale {
          count
          text
          list {
            slug
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
            is_hide_cost
            cost_euro
            cost_dollar
            cost_pound
            cost_ruble
          }
        }
        rent {
          count
          text
          list {
            slug
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
            is_rent
            is_rent_week
            is_rent_day
            is_hide_rent_day_cost
            is_hide_rent_week_cost
            rent_day_euro
            rent_day_dollar
            rent_day_pound
            rent_day_ruble
            rent_week_euro
            rent_week_dollar
            rent_week_pound
            rent_week_ruble
          }
        }
        building {
          count
          text

          list {
            slug
            images {
              fullpath
              id
            }
            name
            main_name
            ex_name
            year_built
            year_renovation
            condition
            teaser
            length_m
            length_ft
            number_cabins
            number_guests
          }
        }
        others {
          logo {
            fullpath
            id
          }
          preview {
            id
            fullpath
          }
          count_yachts
          slug
          id
          name
        }
        epilogue_text
        seo {
          title
          description
        }
      }
    }
  }
`
