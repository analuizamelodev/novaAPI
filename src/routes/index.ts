import { Router } from "express";
import * as CidadeController from "./controllers/cidades";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Cidades
 *   description: Gerenciamento de cidades
 */

/**
 * @swagger
 * /cidades:
 *   post:
 *     summary: Cria uma nova cidade
 *     tags: [Cidades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Aracaju
 *               estado:
 *                 type: string
 *                 example: SE

 *     responses:
 *       201:
 *         description: Cidade criada com sucesso
 */
router.post("/cidades", CidadeController.create);

/**
 * @swagger
 * /cidades:
 *   get:
 *     summary: Lista todas as cidades
 *     tags: [Cidades]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get("/cidades", CidadeController.getAll);

/**
 * @swagger
 * /cidades/{id}:
 *   get:
 *     summary: Busca uma cidade pelo ID
 *     tags: [Cidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cidade encontrada
 *       404:
 *         description: Cidade não encontrada
 */
router.get("/cidades/:id", CidadeController.getById);

/**
 * @swagger
 * /cidades/{id}:
 *   put:
 *     summary: Atualiza uma cidade
 *     tags: [Cidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cidade atualizada com sucesso
 *       404:
 *         description: Cidade não encontrada
 */
router.put("/cidades/:id", CidadeController.updateById);

/**
 * @swagger
 * /cidades/{id}:
 *   delete:
 *     summary: Remove uma cidade
 *     tags: [Cidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Cidade removida com sucesso
 *       404:
 *         description: Cidade não encontrada
 */
router.delete("/cidades/:id", CidadeController.deleteById);

export { router };
