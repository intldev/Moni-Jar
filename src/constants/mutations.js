import { gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      clientMutationId
      user{
        firstName
        lastName
        phone
      }
    }
  }
`;

export {
  CREATE_USER
}