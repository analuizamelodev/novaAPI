import { Request, Response } from "express";
import { getUserFromToken } from "../../utils/getUserFromToken";
import { deletePublication } from "../../services/publicacao/delete-publication-service";
import { prisma } from "../../server";

export const deletarController = async (req: Request, res: Response) => {
  try {
    const { valid, error, usuario } = getUserFromToken(req);

    if (!valid || !usuario) {
      return res.status(401).json({ error });
    }

    const { id } = req.params;

    const deletar = await deletePublication(Number(id));

    return res.status(200).json({
      message: "Publicação deletada com sucesso.",
      deletar,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar publicação" });
  }
};
