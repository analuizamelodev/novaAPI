import { Router } from "express";
import * as CidadeController from "../controllers/cidades";
import * as PessoaController from "../controllers/pessoas";
``

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

/**
 * @swagger
 * tags:
 *   name: Pessoas
 *   description: Gerenciamento de pessoas
 */

/**
 * @swagger
 * /pessoas:
 *   post:
 *     summary: Cria uma nova pessoa
 *     tags: [Pessoas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeCompleto:
 *                 type: string
 *                 example: Ana Luiza Santos
 *               email:
 *                 type: string
 *                 example: ana.luiza@email.com
 *               cidadeId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Pessoa criada com sucesso
 */
router.post("/pessoas", PessoaController.create);

/**
 * @swagger
 * /pessoas:
 *   get:
 *     summary: Lista todas as pessoas
 *     tags: [Pessoas]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get("/pessoas", PessoaController.getAll);

/**
 * @swagger
 * /pessoas/{id}:
 *   get:
 *     summary: Busca uma pessoa pelo ID
 *     tags: [Pessoas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pessoa encontrada
 *       404:
 *         description: Pessoa não encontrada
 */
router.get("/pessoas/:id", PessoaController.getById);

/**
 * @swagger
 * /pessoas/{id}:
 *   put:
 *     summary: Atualiza uma pessoa
 *     tags: [Pessoas]
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
 *               nomeCompleto:
 *                 type: string
 *                 example: Ana Luiza Santos
 *               email:
 *                 type: string
 *                 example: ana.luiza@email.com
 *               cidadeId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Pessoa atualizada com sucesso
 *       404:
 *         description: Pessoa não encontrada
 */
router.put("/pessoas/:id", PessoaController.updateById);

/**
 * @swagger
 * /pessoas/{id}:
 *   delete:
 *     summary: Remove uma pessoa
 *     tags: [Pessoas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Pessoa removida com sucesso
 *       404:
 *         description: Pessoa não encontrada
 */
router.delete("/pessoas/:id", PessoaController.deleteById);



export { router };
