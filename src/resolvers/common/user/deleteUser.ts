import prismaClient from "../../../database";

export const deleteUser = async (id: number) => {
  return await prismaClient.user.delete({
    where: {
      id,
    },
  });
};
