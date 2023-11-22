import { Prisma } from "@prisma/client";
import { ApolloError } from "apollo-server-errors";
import server from "../server";

export const errorHandler = (error: any) => {
  console.log(error);
  let output = { message: "Something Went Wrong", code: "UNKNOWN_ERR" };

  if (error instanceof Prisma.PrismaClientRustPanicError) {
    server.listen(process.env.PORT);
  } else {
    if (
      error instanceof Prisma.PrismaClientValidationError ||
      Prisma.PrismaClientKnownRequestError
    ) {
      output = { message: "Database Query Error", code: "DB_QUERY_ERR" };
    } else if (
      error instanceof Prisma.PrismaClientUnknownRequestError ||
      Prisma.PrismaClientInitializationError
    ) {
      output = {
        message: "Database Operation Error",
        code: "DB_OPERATION_ERR",
      };
    } else {
      output = { message: "Apollo Server Error", code: "SERVER_ERR" };
    }
    throw new ApolloError(output.message, output.code);
  }
};
