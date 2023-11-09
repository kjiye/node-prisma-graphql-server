import { RoleType } from "@prisma/client";
import prismaClient from "../../../database";

export const createUser = async (userName: string, role: RoleType) => {
  return await prismaClient.user.create({
    data: {
      userName,
      role,
    },
  });
};
