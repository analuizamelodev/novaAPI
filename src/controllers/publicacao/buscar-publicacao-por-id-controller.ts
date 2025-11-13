import  { Request, Response } from "express";
import { getByIdPublication } from "../../services/publicacao/get-by-id-publication-service";

export const buscarPublicacaoPorIdController = async (req: Request, res: Response) => {
  try {
    const publicacao = await getByIdPublication(Number(req.params.id));
    return res.status(200).json(publicacao);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar publicações" });
  }
};
