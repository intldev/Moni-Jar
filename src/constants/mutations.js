import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        firstName
        lastName
      }
    }
  }
`;

export { CREATE_USER };
