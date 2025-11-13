import { Request, Response } from "express";
import { updateByIdPublication } from "../../services/publicacao/update-by-id-publication-service";
import { getUserFromToken } from "../../utils/get-user-from-token";

export const atualizarPublicacaoPorIdController = async (
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
    const { titulo, conteudo } = req.body;
    const updatedPublication = await updateByIdPublication(Number(id), {
      titulo,
      conteudo,
    });
    return res.status(200).json(updatedPublication);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar publicação" });
  }
};
