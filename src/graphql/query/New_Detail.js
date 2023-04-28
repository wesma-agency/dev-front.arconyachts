import { gql } from '@apollo/client'

export const GET_NEWS_BY_SLUG = gql`
  query News($slug: String) {
    news(slug: $slug) {
      data {
        id
        type
        is_invite
        detail {
          fullpath
        }
        title
        content
        slug
        start_at
        end_at
        tags {
          name
          slug
          id
        }
        shipyards {
          name
          slug
        }
        related {
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
  }
`
