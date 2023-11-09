import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "./common/user";

/**
 * GraphQL Resolver (GraphQL Data Fetcher)
 */
const resolvers = {
  Query: {
    getUsers,
    getUser,
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
};

export default resolvers;
