import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "./common/user";

/**
 * Define GraphQL Resolver
 * 데이터를 클라이언트의 요청에 맞게 처리하는 GraphQL Data Fetcher
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
