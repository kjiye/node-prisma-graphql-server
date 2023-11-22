import { RoleType } from "@prisma/client";
import prismaClient from "../../../database";
import { errorHandler } from "../../../utils/error";

//parent, args, contextValue, info
export const createUser = async (
  _: undefined,
  args: { userName: string; role?: RoleType }
) => {
  try {
    const { userName, role } = args;
    return await prismaClient.user.create({
      data: {
        userName,
        role: role ?? role,
      },
    });
  } catch (error: any) {
    return errorHandler(error);
  }
};
