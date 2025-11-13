import { prisma } from "../../server";

export const deleteByIdComment = async (id: number) => {
  await prisma.comentario.delete({
    where: { id },
  });
};
