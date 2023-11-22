import prismaClient from "../../../database";
import { errorHandler } from "../../../utils/error";

export const getUser = async (_: undefined, args: { id: string | number }) => {
  try {
    const { id } = args;
    return await prismaClient.user.findUnique({
      where: {
        id: Number(id),
      },
    });
  } catch (error: any) {
    errorHandler(error);
  }
};
