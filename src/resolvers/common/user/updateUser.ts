import { RoleType } from "@prisma/client";
import prismaClient from "../../../database";
import { errorHandler } from "../../../utils/error";

export const updateUser = async (
  _: undefined,
  args: { id: string | number; userName: string; role?: RoleType }
) => {
  try {
    const { id, userName, role } = args;
    return await prismaClient.user.update({
      where: {
        id: Number(id),
      },
      data: {
        userName,
        role: role ?? role,
      },
    });
  } catch (error: any) {
    return errorHandler(error);
  }
};
