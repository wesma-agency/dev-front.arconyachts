import { gql } from '@apollo/client'

export const GET_NEWS_PAGE = gql`
  query NewsPage {
    page_news {
      title
      epilogue
      shipyards {
        id
        name
        slug
      }
      tags {
        name
        slug
        yachts_count
      }
      specials {
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

export const GET_NEWS_LIST = gql`
  query NewsList($tags: [String], $shipyards: [String], $limit: Int) {
    news(tags: $tags, shipyards: $shipyards, limit: $limit) {
      total
      per_page
      current_page
      from
      to
      last_page
      has_more_pages
      data {
        id
        slug
        preview {
          id
          fullpath
          properties
        }
        start_at
        end_at
        title
        preview_text
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

export const GET_NEWS_PAGINATION = gql`
  query NewsPagination($tags: [String], $shipyards: [String], $limit: Int) {
    news(tags: $tags, shipyards: $shipyards, limit: $limit) {
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
