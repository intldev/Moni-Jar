import { gql } from '@apollo/client';

export const typeDefs = gql`
  extend type Query {
    firstName: String!
    lastName: string!
    phone: String
  }
`;