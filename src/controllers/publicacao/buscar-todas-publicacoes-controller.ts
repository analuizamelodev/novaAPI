import { Request, Response } from "express";
import { getAllPublications } from "../../services/publicacao/get-all-publications-service";

export const buscarTodasPublicacoesController = async (
  req: Request,
  res: Response
) => {
  try {
    const publicacoes = await getAllPublications();
    return res.status(200).json(publicacoes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar publicações" });
  }
};
