import { Request, Response } from "express";
import { createPublication } from "../../services/publicacao/create-publication-service";
import { getUserFromToken } from "../../utils/getUserFromToken";

export const publicarController = async (req: Request, res: Response) => {
  try {
    const { valid, error, usuario } = getUserFromToken(req);

    if (!valid || !usuario) {
      return res.status(401).json({ error });
    }

    const { titulo, conteudo } = req.body;
    const publicacao = await createPublication(titulo, conteudo, usuario.id);

    return res.status(201).json(publicacao);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar publicação" });
  }
};
