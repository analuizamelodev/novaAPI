import { prisma } from "../../server";

export const getByIdComment = async (id: number) => {
  const comentario = await prisma.comentario.findUnique({
    where: { id },
  });
  return comentario;
};
