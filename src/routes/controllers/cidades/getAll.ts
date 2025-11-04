import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../../server";

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAll = async (
  req: Request<{}, {}, IQueryProps>,
  res: Response
) => {
  const cidades = await prisma.cidade.findMany();

  return res.status(200).json({
    message: "Cidades e Estados encontrados com sucesso!",
    data: {
      cidades,
    },
  });
};
