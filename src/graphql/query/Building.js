import { gql } from '@apollo/client'

export const GET_BUILDING_PAGE = gql`
  query BuildingPage {
    page_construction {
      count_projects
      projects {
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
      count_shipyards
      shipyards {
        id
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
        name
      }
    }
  }
`
