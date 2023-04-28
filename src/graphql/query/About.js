import { gql } from '@apollo/client'

export const GET_ABOUT_PAGE = gql`
  query AboutPage {
    page_about {
      presentation
      count_yachts
      managers {
        id
        photo {
          fullpath
        }
        is_lead
        name
        position
      }
    }
  }
`
