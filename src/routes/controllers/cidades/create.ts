import { Request, Response } from "express";
import { z } from "zod";

interface Cidade {
  nome: string;
}

const cidadeSchema = z.object({
  nome: z.string().min(3).max(50),
});

export const create = (req: Request<{}, {}, Cidade>, res: Response) => {
  const result = cidadeSchema.safeParse(req.body);

  if (!result.success) {
    const mensagens = result.error.issues.map((issue) => issue.message);

    return res.status(400).json({
      message: mensagens.length === 1 ? mensagens[0] : mensagens,
    });
  }

  console.log(req.body);
  return res.send("Cidade criada com sucesso!");
};
