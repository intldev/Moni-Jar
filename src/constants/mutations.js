import { gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      clientMutationId
    }
  }
`;

export {
  CREATE_USER
}