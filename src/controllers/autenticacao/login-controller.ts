import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { getUserByEmail } from "../../services/usuario/get-user-by-email-service";

const SECRET = "minha_chave_super_secreta";

export const loginController = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  const usuario = await getUserByEmail(email);

  if (usuario && usuario.senha === senha) {
    const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET, {
      expiresIn: "1h",
    });

    return res.json({ token });
  }

  res.status(401).json({ error: "Credenciais inválidas" });
};
