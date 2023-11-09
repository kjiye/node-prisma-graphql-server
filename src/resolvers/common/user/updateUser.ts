import { RoleType } from "@prisma/client";
import prismaClient from "../../../database";

export const updateUser = async (
  id: number,
  userName: string,
  role: RoleType
) => {
  return await prismaClient.user.update({
    where: {
      id,
    },
    data: {
      userName,
      role,
    },
  });
};
