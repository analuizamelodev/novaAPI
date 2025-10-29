import { json, Router } from "express";

import * as CidadeController from "./controllers/cidades";
const router = Router();

router.get("/", (req, res) => {
  return res.send("Rostas funcionando!");
});

router.post("/cidades", CidadeController.create);
router.get("/cidades", CidadeController.getAll);
router.get("/cidades/:id", CidadeController.getById);
router.put("/cidades/:id", CidadeController.updateById);
router.delete("/cidades/:id", CidadeController.deleteById);
export { router };
