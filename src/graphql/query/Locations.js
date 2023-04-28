import { gql } from '@apollo/client'

export const GET_LOCATIONS = gql`
  query Locations {
    locations {
      id
      name
      slug
      lat
      lng
      childrens {
        id
        name
        slug
        lat
        lng
        childrens {
          id
          name
          slug
          lat
          lng
          childrens {
            id
            name
            slug
            lat
            lng
            childrens {
              id
              name
              slug
              lat
              lng
              childrens {
                id
                name
                slug
                lat
                lng
              }
            }
          }
        }
      }
    }
  }
`
