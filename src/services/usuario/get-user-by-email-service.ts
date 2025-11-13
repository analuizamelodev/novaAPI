import { prisma } from "../../server";

export const getUserByEmail = async (email: string) => {
  const usuario = await prisma.usuario.findUnique({
    where: {
      email,
    },
  });
  return usuario;
};
