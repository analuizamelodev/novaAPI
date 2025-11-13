import { Request, Response } from "express";
import { getByIdComment } from "../../services/comentario/get-by-id-comment";

export const buscarComentarioPorIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const comentario = await getByIdComment(Number(id));
    return res.status(200).json(comentario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar comentário" });
  }
};
