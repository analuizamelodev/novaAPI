import { Request, Response } from "express";
import { z } from "zod";

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

const cidadeSchema = z.object({
  page: z.coerce.number().min(1, "A página deve ser no mínimo 1.").optional(),
  limit: z.coerce
    .number()
    .min(1, "O limite deve ser no mínimo 1.")
    .max(100, "O limite deve ser no máximo 100.")
    .optional(),
  filter: z
    .string()
    .min(3, "O filtro deve ter pelo menos 3 caracteres.")
    .max(50, "O filtro deve ter no máximo 50 caracteres.")
    .optional(),
});

export const getAll = (req: Request<{}, {}, IQueryProps>, res: Response) => {
  const result = cidadeSchema.safeParse(req.query);

  if (!result.success) {
    const mensagens = result.error.issues.map((issue) => {
      const campo = issue.path.join(".");
      return `Erro em '${campo}': ${issue.message}`;
    });

    return res.status(400).json({
      message: mensagens.length === 1 ? mensagens[0] : mensagens,
    });
  }

  return res.status(200).json({
    message: "Cidades e Estados encontrados com sucesso!",
  });
};
