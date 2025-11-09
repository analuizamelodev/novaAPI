import { Request, Response } from "express";
import { prisma } from "../../server";

export const getAll = async (_: Request, res: Response) => {

  try {
    const pessoas = await prisma.pessoas.findMany();

    return res.status(200).json({
      message: "Pessoas encontradas com sucesso!",
      data: pessoas,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar pessoas.",
      error,
    });
  }
};

