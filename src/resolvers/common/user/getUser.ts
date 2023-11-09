import prismaClient from "../../../database";
import { errorHandler } from "../../../utils/error";

export const getUser = async (id: number) => {
  try {
    return await prismaClient.user.findUnique({
      where: {
        id,
      },
    });
  } catch (error: any) {
    console.trace();
    return errorHandler(error);
  }
};
