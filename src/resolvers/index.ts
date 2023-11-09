import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "./common/user";

/**
 * Define GraphQL Resolver
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
