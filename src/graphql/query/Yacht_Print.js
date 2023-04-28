import { gql } from '@apollo/client'

export const GET_YACHT_PRINT = gql`
  query YachtSale($slug: String, $type: String) {
    yachts(type: $type, slug: $slug, limit: 1) {
      data {
        id
        slug
        is_sale
        is_hide_cost
        cost_euro
        cost_pound
        cost_dollar
        cost_ruble
        shipyard {
          id
          name
          slug
        }
        main_name
        ex_name
        length_m
        length_ft
        year_built
        year_renovation
        number_cabins
        number_guests
        about_project_text
        project_completed_work
        speed
        body_material {
          id
          name
          slug
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
        is_rent
        is_rent_day
        is_rent_week
        is_hide_rent_week_cost
        is_hide_rent_day_cost
        rent_day_euro
        rent_day_dollar
        rent_day_pound
        rent_day_ruble
        rent_week_euro
        rent_week_dollar
        rent_week_pound
        rent_week_ruble
        deck_plan_images {
          id
          fullpath
          properties
        }
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
        maintenance_text
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
        sale_epilogue_text
      }
    }
  }
`
