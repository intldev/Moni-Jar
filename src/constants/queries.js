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

export const JAR_MEMBERSHIPS = gql`
  query JarMemberships($input: String!) {
    jarMemberships(condition: { userId: $input }) {
      nodes {
        isAdmin
        jar {
          savingsGoal
          deadline
          name
          jarMembershipsByJarId {
            nodes {
              user {
                firstName
                lastName
              }
            }
          }
        }
        user {
          firstName
          lastName
          phone
        }
      }
    }
  }
`;

export const SEARCH_USERS = gql`
  query SearchUsers($input: String!) {
    searchUsers(search: $input) {
      totalCount
      nodes {
        firstName
        lastName
        phone
        userName
        id
      }
    }
  }
`;
