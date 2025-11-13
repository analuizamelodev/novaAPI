import { prisma } from "../../server";

export const createUser = async (
  nome: string,
  email: string,
  senha: string
) => {
  const novoUsuario = await prisma.usuario.create({
    data: {
      nome,
      email,
      senha,
    },
  });
  return novoUsuario;
};
