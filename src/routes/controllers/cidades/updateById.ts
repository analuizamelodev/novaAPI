import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../../server";

interface IParamsProps {
  id: number;
}

interface IBodyProps {
  nome: string;
  estado: string;
}

const cidadeSchema = z.object({
  id: z.coerce.number().min(1, "O ID deve ser no mínimo 1."),
  nome: z
    .string()
    .min(3, "A Cidade deve ter pelo menos 3 caracteres.")
    .max(50, "A cidade deve ter no máximo 50 caracteres."),
  estado: z.string().length(2, "O Estado deve ter exatamente 2 letras."),
});

export const updateById = async (
  req: Request<IParamsProps, {}, IBodyProps>,
  res: Response
) => {
  const result = cidadeSchema.safeParse({
    ...req.params,
    ...req.body,
  });

  if (!result.success) {
    const mensagens = result.error.issues.map((issue) => {
      const campo = issue.path.join(".");
      return `Erro em '${campo}': ${issue.message}`;
    });

    return res.status(400).json({
      message: mensagens.length === 1 ? mensagens[0] : mensagens,
    });
  }
  await prisma.cidade.update({
    where: {
      id: result.data.id,
    },
    data: {
      nome: result.data.nome,
      estado: result.data.estado,
    },
  });

  return res.status(200).json({
    message: "Cidade e Estado atualizados com sucesso!",
  });
};
