import { prisma } from "../../server";

export const createPublication = async (
  titulo: string,
  conteudo: string,
  autorId: number
) => {
  const novaPublicacao = await prisma.publicacao.create({
    data: {
      titulo,
      conteudo,
      autorId,
    },
  });

  return novaPublicacao;
};
