import { Request, Response } from "express";
import { z } from "zod";

interface Cidade {
  cidade: string;
  estado: string;
}

const cidadeSchema = z.object({
  cidade: z
    .string()
    .min(3, "A Cidade deve ter pelo menos 3 caracteres.")
    .max(50, "A cidade deve ter no máximo 50 caracteres."),
  estado: z.string().length(2, "O Estado deve ter exatamente 2 letras."),
});

export const create = (req: Request<{}, {}, Cidade>, res: Response) => {
  const result = cidadeSchema.safeParse(req.body);

  if (!result.success) {
    const mensagens = result.error.issues.map((issue) => {
      const campo = issue.path.join(".");
      return `Erro em '${campo}': ${issue.message}`;
    });

    return res.status(400).json({
      message: mensagens.length === 1 ? mensagens[0] : mensagens,
    });
  }

  return res.status(201).send({
    message: "Cidade e Estado criados com sucesso!",
  });
};
