import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../server";

const paramsSchema = z.object({
  id: z.coerce.number().min(1, "O ID deve ser no mínimo 1."),
});

const bodySchema = z.object({
  nomeCompleto: z.string().min(2).max(100),
  email: z.string().email("Email inválido."),
  cidadeId: z.number().min(1, "Cidade inválida."),
});

interface IParamsProps {
  id: number;
}

interface IBodyProps {
  nomeCompleto: string;
  email: string;
  cidadeId: number;
}

export const updateById = async (
  req: Request<IParamsProps, {}, IBodyProps>,
  res: Response
) => {
  const paramsResult = paramsSchema.safeParse(req.params);
  const bodyResult = bodySchema.safeParse(req.body);

  if (!paramsResult.success || !bodyResult.success) {
    const erros = [
      ...(paramsResult.error?.issues || []),
      ...(bodyResult.error?.issues || []),
    ].map((issue) => `Erro em '${issue.path.join(".")}': ${issue.message}`);

    return res.status(400).json({
      message: erros.length === 1 ? erros[0] : erros,
    });
  }

  const { id } = paramsResult.data;
  const { nomeCompleto, email, cidadeId } = bodyResult.data;

  try {
    const pessoa = await prisma.pessoas.update({
      where: { id },
      data: { nomeCompleto, email, cidadeId },
    });

    return res.status(200).json({
      message: "Pessoa atualizada com sucesso!",
      data: pessoa,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao atualizar pessoa.",
      error,
    });
  }
};
