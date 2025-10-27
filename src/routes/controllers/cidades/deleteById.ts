import { Request, Response } from "express";
import { z } from "zod";

interface IParamsProps {
  id: number;
}

const cidadeSchema = z.object({
  id: z.coerce.number().min(1, "O ID deve ser no mínimo 1."),
});

export const deleteById = (req: Request<{}, {}, IParamsProps>, res: Response) => {
  const result = cidadeSchema.safeParse(req.params);

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
    message: "Cidade e Estado deletados com sucesso!",
  });
};
