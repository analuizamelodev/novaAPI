import jwt from "jsonwebtoken";

const SECRET = "minha_chave_super_secreta";

export const validateTokenService = (token: string) => {
  try {
    const decoded = jwt.verify(token, SECRET);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, error: "Token inválido ou expirado" };
  }
};
