import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../server";

interface Pessoa {
  nomeCompleto: string;
  email: string;
  idCidade: number;
}

const pessoaSchema = z.object({
  nomeCompleto: z.string().min(2).max(100),
  email: z.string(),
  cidadeId: z.number().min(1),
});

export const create = async (req: Request, res: Response) => {
  const result = pessoaSchema.safeParse(req.body);

  if (!result.success) {
    const mensagens = result.error.issues.map((issue) => {
      const campo = issue.path.join(".");
      return `Erro em '${campo}': ${issue.message}`;
    });

    return res.status(400).json({
      message: mensagens.length === 1 ? mensagens[0] : mensagens,
    });
  }

  const { nomeCompleto, email, cidadeId } = result.data;

  const pessoa = await prisma.pessoas.create({
    data: {
      nomeCompleto,
      email,
      cidadeId,
    },
  });

  return res.status(201).json({
    message: "Pessoa criada com sucesso!",
    data: {
      pessoa,
    },
  });
};
    