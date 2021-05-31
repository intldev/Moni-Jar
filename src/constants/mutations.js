import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      clientMutationId
      user {
        firstName
        lastName
        phone
      }
    }
  }
`;

const CREATE_JAR = gql`
  mutation CreateJar($input: CreateJarInput!) {
    createJar(input: $input) {
      jar {
        id
        savingsGoal
        deadline
        jarMembershipsByJarId {
          nodes {
            isAdmin
            jarId
            userId
            user {
              firstName
              id
              lastName
              phone
              userName
            }
          }
        }
      }
    }
  }
`

const CREATE_JAR_MEMBERSHIP = gql`
  mutation CreateJarMembership($input: CreateJarMembershipInput!) {
    createJarMembership(input: $input) {
      jar {
        savingsGoal
        deadline
        name
      }
      jarMembership {
        isAdmin
        userId
        jarId
        user {
          firstName
          userName
        }
      }
    }
  }
`

export {
  CREATE_USER,
  CREATE_JAR,
  CREATE_JAR_MEMBERSHIP
};
