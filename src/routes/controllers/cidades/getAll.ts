import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../../server";

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

const querySchema = z.object({
  page: z.coerce.number().min(1).optional(),
  limit: z.coerce.number().min(1).optional(),
  filter: z.string().optional(),
});

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  const result = querySchema.safeParse(req.query);

  if (!result.success) {
    const mensagens = result.error.issues.map((issue) => {
      const campo = issue.path.join(".");
      return `Erro em '${campo}': ${issue.message}`;
    });

    return res.status(400).json({
      message: mensagens.length === 1 ? mensagens[0] : mensagens,
    });
  }

  const cidades = await prisma.cidade.findMany();

  return res.status(200).json({
    message: "Cidades e Estados encontrados com sucesso!",
    data: {
      cidades,
    },
  });
};
