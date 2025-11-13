import { Request, Response } from "express";
import { deleteByIdComment } from "../../services/comentario/delete-by-id-comment-service";
import { getUserFromToken } from "../../utils/get-user-from-token";

export const deletarComentarioPorIdController = async (
  req: Request,
  res: Response
) => {
  const { valid, error, usuario } = getUserFromToken(req);
  if (!valid || !usuario) {
    return res
      .status(401)
      .json({ error: error || "Token inválido ou não fornecido" });
  }
  try {
    const { id } = req.params;
    const deletar = await deleteByIdComment(Number(id));
    return res.status(200).json({
      message: "Comentário deletado com sucesso.",
      deletar,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar comentário" });
  }
};
