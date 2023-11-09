import { ApolloServer } from "apollo-server";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import http from "http";
import schema from "./schema";
import logger from "morgan";
import resolvers from "./resolvers";

/**
 * Export the code for Express GraphQL server
 */

const app = express();

const prismaClientOrm = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  // req.prisma = prismaClient;
  console.log(req);
  next();
};

const corsOptions = {
  // origin: [`${process.env.SERVICE_CLIENT_URL}`, `${process.env.ADMIN_CLIENT_URL}`]
};

app.use(prismaClientOrm);
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

export default server;
