import { prisma } from "../../server";

export const createComment = async (
  conteudo: string,
  autorId: number,
  publicacaoId: number
) => {
  const novoComentario = await prisma.comentario.create({
    data: {
      conteudo,
      autorId,
      publicacaoId,
    },
  });
  return novoComentario;
};
