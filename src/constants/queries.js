import { gql } from "@apollo/client";

export const USER_DETAILS = gql`
  query user {
    firstName @client
    lastName @client
    phone @client
    jarMembershipsByUserId @client
  }
`;

export const USER = gql`
  query user($id: String!) {
    user(id: $id) {
      firstName
      lastName
      phone
      jarMembershipsByUserId {
        totalCount
      }
    }
  }
`;


export const JAR_MEMBERSHIPS = gql`
  query JarMemberships($input: String!) {
    jarMemberships(condition: {userId: $input}) {
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
`