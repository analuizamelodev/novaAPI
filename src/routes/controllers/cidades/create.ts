import { Request, Response } from "express";

interface Cidade {
    nome: string;
};

export const create = (req: Request<{}, {}, Cidade>, res: Response) => {
  console.log(req.body);
  return res.send('Cidade criada com sucesso!');
};   