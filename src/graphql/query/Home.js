import { gql } from '@apollo/client'

export const GET_HOME_BANNER = gql`
  query HomeBanner {
    home_banners {
      id
      image {
        fullpath
      }
      type
      name
      text
      yacht {
        slug
        is_rent_day
        is_rent_week
        shipyard {
          name
        }
      }
    }
  }
`
