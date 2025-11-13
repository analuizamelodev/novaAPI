import { Request, Response } from "express";
import { getAllComments } from "../../services/comentario/get-all-comments-service";
export const buscarTodosComentariosController = async (
  req: Request,
  res: Response
) => {
  try {
    const comentarios = await getAllComments();
    return res.status(200).json(comentarios);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar comentários" });
  }
};
