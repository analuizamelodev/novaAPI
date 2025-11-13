import { Request, Response } from "express";
import { createComment } from "../../services/comentario/create-comment-service";
import { getUserFromToken } from "../../utils/get-user-from-token";

export const comentarController = async (req: Request, res: Response) => {
  const { valid, error, usuario } = getUserFromToken(req);
  if (!valid || !usuario) {
    return res
      .status(401)
      .json({ error: error || "Token inválido ou não fornecido" });
  }
  try {
    const { publicacaoId, usuarioId, conteudo } = req.body;
    const comentario = await createComment(conteudo, usuarioId, publicacaoId);
    return res.status(201).json(comentario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar comentário" });
  }
};
