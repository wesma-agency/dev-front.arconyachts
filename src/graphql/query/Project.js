import { gql } from '@apollo/client'

export const GET_PROJECT = gql`
  query Project($slug: String) {
    yachts(type: "project", slug: $slug) {
      data {
        id
        slug
        shipyard {
          id
          name
          slug
        }
        main_name
        ex_name
        length_m
        length_ft
        about_project_text
        project_completed_work
        year_built
        year_renovation
        number_cabins
        number_guests
        speed
        body_material {
          id
          name
          slug
        }
        images {
          id
          fullpath
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
        seo(type: "project") {
            title
            description
          }
      }
    }
  }
`
