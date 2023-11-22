import prismaClient from "../../../database";
import { errorHandler } from "../../../utils/error";

export const deleteUser = async (_: undefined, args: { id: number }) => {
  try {
    const { id } = args;
    return await prismaClient.user.delete({
      where: {
        id,
      },
    });
  } catch (error: any) {
    errorHandler(error);
  }
};
