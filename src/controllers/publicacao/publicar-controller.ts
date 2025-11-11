import { Request, Response } from "express";
import { createPublication } from "../../services/publicacao/create-publication-service";
import { getUserFromToken } from "../../utils/get-user-from-token";

export const publicarController = async (req: Request, res: Response) => {
  try {

    const { valid, error, usuario } = getUserFromToken(req);

    if (!valid || !usuario) {
      return res.status(401).json({ error: error || "Token inválido ou não fornecido" });
    }

    const { titulo, conteudo } = req.body;
    if (!titulo || !conteudo) {
      return res.status(400).json({ error: "Título e conteúdo são obrigatórios" });
    }

    const publicacao = await createPublication(titulo, conteudo, usuario.id);

    return res.status(201).json(publicacao);
  } catch (error) {
    console.error("Erro ao criar publicação:", error);
    return res.status(500).json({ error: "Erro interno ao criar publicação" });
  }
};
