import { gql } from '@apollo/client'

export const CREATE_SUBSCRIPTION = gql`
  mutation CreateSubscription($email: String) {
    CreateSubscription(email: $email)
  }
`
