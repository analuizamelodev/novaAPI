import { prisma } from "../../server";

export const getAllComments = async () => {
  const comentarios = await prisma.comentario.findMany();
  return comentarios;
};
