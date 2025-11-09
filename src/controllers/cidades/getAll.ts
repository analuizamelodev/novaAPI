import { Request, Response } from "express";
import { prisma } from "../../server";

export const getAll = async (_: Request, res: Response) => {
  try {
    const cidades = await prisma.cidade.findMany();

    return res.status(200).json({
      message: "Cidades e Estados encontrados com sucesso!",
      data: cidades,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar cidades.",
      error,
    });
  }
};
