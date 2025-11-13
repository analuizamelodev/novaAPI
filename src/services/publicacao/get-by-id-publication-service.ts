import { prisma } from "../../server";

export const getByIdPublication = async (id: number) => {
  const publicacao = await prisma.publicacao.findUnique({
    where: { id },
  });
  return publicacao;
};
