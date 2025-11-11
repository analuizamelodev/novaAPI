import { Router } from "express";
import { cadastroController } from "../controllers/autenticacao/cadastro-controller";
import { loginController } from "../controllers/autenticacao/login-controller";
import { publicarController } from "../controllers/publicacao/publicar-controller";
import { deletarController } from "../controllers/publicacao/deletar-controller";
import { buscarTodasPublicacoesController } from "../controllers/publicacao/buscar-todas-publicacoes-controller";

``;

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Endpoints de autenticação
 */

/**
 * @swagger
 * /autenticacao/cadastro:
 *   post:
 *     summary: Cadastro de novo usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Jondoe Silva
 *               email:
 *                 type: string
 *                 example: usuario@email.com
 *               senha:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso
 */
router.post("/autenticacao/cadastro", cadastroController);

/**
 * @swagger
 * /autenticacao/login:
 *   post:
 *     summary: Login de usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: usuario@email.com
 *               senha:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 */
router.post("/autenticacao/login", loginController);

/**
 * @swagger
 * /publicacao/publicar:
 *   post:
 *     summary: Postar uma nova publicação
 *     tags: [Publicação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: Meu primeiro post
 *               conteudo:
 *                 type: string
 *                 example: Este é o conteúdo da minha primeira publicação.
 *     responses:
 *       201:
 *         description: Publicação criada com sucesso
 */
router.post("/publicacao/publicar", publicarController);

/**
 * @swagger
 * /publicacao/{id}:
 *   delete:
 *     summary: Remove uma publicação
 *     tags: [Publicação]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Publicação removida com sucesso
 *       404:
 *         description: Publicação não encontrada
 */
router.delete("/publicacao/:id", deletarController);

/**
 * @swagger
 * /publicacao:
 *   get:
 *     summary: Retorna todas as publicações
 *     tags: [Publicação]
 *     responses:
 *       200:
 *         description: Lista de publicações retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   titulo:
 *                     type: string
 *                     example: Meu primeiro post
 *                   conteudo:
 *                     type: string
 *                     example: Este é o conteúdo da minha primeira publicação.
 *                   criadoEm:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-11-11T10:00:00.000Z
 */
router.get("/publicacao", buscarTodasPublicacoesController);

export { router };
