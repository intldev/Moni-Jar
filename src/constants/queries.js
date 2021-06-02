import { gql } from "@apollo/client";

export const USER_DETAILS = gql`
  query user {
    firstName @client
    lastName @client
    jarMembershipsByUserId @client
  }
`;

export const USER = gql`
  query user($id: String!) {
    user(id: $id) {
      firstName
      lastName
      jarMembershipsByUserId {
        totalCount
      }
    }
  }
`;
