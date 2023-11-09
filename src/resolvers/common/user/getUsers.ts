import { RoleType } from "@prisma/client";
import prismaClient from "../../../database";

export const getUsers = async (
  id?: number,
  userName?: string,
  role?: RoleType
) => {
  let where = {};
  if (id) {
    where = {
      ...where,
      id,
    };
  }
  if (userName) {
    where = {
      ...where,
      userName,
    };
  }
  if (role) {
    where = {
      ...where,
      role,
    };
  }
  return await prismaClient.user.findMany({
    where,
  });
};
