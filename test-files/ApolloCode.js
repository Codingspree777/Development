import gql from 'graphql-tag';
const ADD_USER = gql`
  mutation addUser(
    $text: String!
    $name: String
    $userName: String
    $department: String
    $access: String
  ) {
    addUser(
      text: $text
      name: $name
      userName: $userName
      department: $department
      access: $access
    ) @client {
      id
    }
  }
`;