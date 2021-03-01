import { gql } from '@apollo/client'

export const WX_LOGIN = gql`
  mutation Login($code: String!){
    wxLogin(code: $code) {
      value
    }
  }
`
// bindWx(
//   username: String!
//       password: String!
//       code: String!
// ): Token
export const BIND_WX = gql`
  mutation Bind($username: String!, $password: String!, $code: String!) {
    bindWx(
      username: $username
      password: $password
      code: $code
    ) {
      value
    }
  }
`

export default {}
