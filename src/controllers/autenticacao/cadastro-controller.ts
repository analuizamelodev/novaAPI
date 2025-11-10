import { Request, Response } from "express";
import { getUserByEmail } from "../../services/usuario/get-user-by-email-service";
import { createUser } from "../../services/usuario/create-user-service";

export const cadastroController = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  const usuario = await getUserByEmail(email);
  if (!usuario) {
    await createUser(nome, email, senha);

    return res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  }

  res.status(400).json({ error: "Usuário já existe" });
};
