import { prisma } from "../../server";

export const getAllPublications = async () => {
  const publicacoes = await prisma.publicacao.findMany();
  return publicacoes;
};
