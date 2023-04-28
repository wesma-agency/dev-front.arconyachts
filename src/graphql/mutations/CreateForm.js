import { gql } from '@apollo/client'

export const CREATE_FORM = gql`
  mutation CreateForm(
    $type: FormType
    $name: String
    $email: String
    $phone: String
    $referer: String
    $yacht_id: Int
    $employee_id: Int
    $shipyard_id: Int
    $news_id: Int
    $date: String
  ) {
    CreateForm(
      type: $type
      name: $name
      email: $email
      phone: $phone
      referer: $referer
      yacht_id: $yacht_id
      employee_id: $employee_id
      shipyard_id: $shipyard_id
      news_id: $news_id
      date: $date
    )
  }
`
