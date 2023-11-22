import { gql } from "apollo-server";

/**
 * GraphQL schema including all the available types, mutations, and queries
 */
const schema = gql`
  enum RoleType {
    USER
    ADMIN
  }
  type User {
    id: ID!
    userName: String!
    role: RoleType!
  }
  type Query {
    getUsers(id: ID, userName: String, role: RoleType): [User]
    getUser(id: ID!): User
  }
  type Mutation {
    createUser(userName: String!, role: RoleType): User!
    updateUser(id: ID!, userName: String, role: RoleType): User!
    deleteUser(id: ID!): ID!
  }
`;

export default schema;
