import { prisma } from "../../server";

export const updateByIdPublication = async (
  id: number,
  data: { titulo: string; conteudo: string }
) => {
  return await prisma.publicacao.update({
    where: { id },
    data,
  });
};
