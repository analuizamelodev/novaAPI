import { prisma } from "../../server";

export const deleteByIdPublication = async (id: number) => {
  const deletar = await prisma.publicacao.delete({
    where: { id },
  });

  return deletar;
};
