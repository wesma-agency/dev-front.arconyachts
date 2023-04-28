import { gql } from '@apollo/client'

export const GET_YACHT_CHARTER = gql`
  query YachtCharter($slug: String, $type: String) {
    yachts(type: $type, slug: $slug) {
      total
      data {
        id
        slug
        is_rent
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
        is_hide_rent_day_cost
        is_hide_rent_week_cost
        length_m
        length_ft
        shipyard {
          id
          name
        }
        main_name
        ex_name
        year_built
        year_renovation
        number_guests
        number_cabins
        speed
        body_material {
          id
          name
          slug
        }

        locations {
          id
          name
          slug
          lat
          lng
        }
        images {
          id
          fullpath
          previewpath
        }
        about_text
        benefits {
          id
          image {
            id
            fullpath
          }
          name
          description
        }
        specification_text
        specifications {
          key
          value
        }
        equipment_text
        detail_images {
          id
          fullpath
          properties
        }
        video_review {
          preview {
            id
            fullpath
          }
          link
        }
        deck_plan_images {
          id
          fullpath
          properties
        }
        rent_vat
        rent_apa
        rent_terms_text
        rent_terms {
          name
          description
        }
        location_text
        employee {
          id
          photo {
            fullpath
            id
          }
          name
          position
          quote
        }
        collection_shipyard {
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
        }
        collection_popular {
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
        }
        rent_epilogue_text
        seo(type: "rent") {
          title
          description
        }
      }
    }
  }
`

export const GET_CHARTER_TRAVELS = gql`
  query GetTravelNews($locations: [String]) {
    travel_news(locations: $locations) {
      id
      type
      preview {
        id
        fullpath
      }
      preview_text
      slug
      title
    }
  }
`
