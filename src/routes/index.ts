import { Router } from "express";
import { cadastrarUsuarioController } from "../controllers/autenticacao/cadastrar-usuario-controller";
import { logarUsuarioController } from "../controllers/autenticacao/logar-usuario-controller";
import { publicarController } from "../controllers/publicacao/publicar-controller";
import { deletarPublicacaoPorIdController } from "../controllers/publicacao/deletar-publicacao-por-id-controller";
import { buscarTodasPublicacoesController } from "../controllers/publicacao/buscar-todas-publicacoes-controller";
import { buscarPublicacaoPorIdController } from "../controllers/publicacao/buscar-publicacao-por-id-controller";
import { atualizarPublicacaoPorIdController } from "../controllers/publicacao/atualizar-publicacao-por-id-controller";
import { comentarController } from "../controllers/comentario/comentar-controller";
import { buscarTodosComentariosController } from "../controllers/comentario/buscar-todos-comentarios-controller";
import { buscarComentarioPorIdController } from "../controllers/comentario/buscar-comentario-por-id-controller";
import { deletarComentarioPorIdController } from "../controllers/comentario/deletar-comentario-por-id-controller";

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
router.post("/autenticacao/cadastro", cadastrarUsuarioController);

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
router.post("/autenticacao/login", logarUsuarioController);

/**
 * @swagger
 * tags:
 *   name: Publicação
 *   description: Endpoints de publicação
 */
/**
 * @swagger
 * /publicacaor:
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
router.post("/publicacao", publicarController);

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
router.delete("/publicacao/:id", deletarPublicacaoPorIdController);

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

/**
 * @swagger
 * /publicacao/{id}:
 *   get:
 *     summary: Busca uma publicação pelo ID
 *     tags: [Publicação]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da publicação a ser buscada
 *     responses:
 *       200:
 *         description: Publicação encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 titulo:
 *                   type: string
 *                   example: Meu primeiro post
 *                 conteudo:
 *                   type: string
 *                   example: Este é o conteúdo da minha primeira publicação.
 *                 criadoEm:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-11-11T10:00:00.000Z
 *       404:
 *         description: Publicação não encontrada
 */
router.get("/publicacao/:id", buscarPublicacaoPorIdController);

/**
 * @swagger
 * /publicacao/{id}:
 *   put:
 *     summary: Atualiza uma publicação existente
 *     tags: [Publicação]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da publicação que será atualizada
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: Novo título da publicação
 *               conteudo:
 *                 type: string
 *                 example: Novo conteúdo atualizado da publicação.
 *     responses:
 *       200:
 *         description: Publicação atualizada com sucesso
 *       404:
 *         description: Publicação não encontrada
 *       500:
 *         description: Erro ao atualizar a publicação
 */
router.put("/publicacao/:id", atualizarPublicacaoPorIdController);

/**
 * @swagger
 * tags:
 *   name: Comentário
 *   description: Endpoints relacionados aos comentários
 */

/**
 * @swagger
 * /comentario:
 *   post:
 *     summary: Adicionar um novo comentário
 *     tags: [Comentário]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               publicacaoId:
 *                 type: integer
 *                 example: 1
 *               usuarioId:
 *                 type: integer
 *                 example: 42
 *               conteudo:
 *                 type: string
 *                 example: "Esse post está incrível!"
 *     responses:
 *       201:
 *         description: Comentário criado com sucesso
 */
router.post("/comentario", comentarController);

/**
 * @swagger
 * /comentario:
 *   get:
 *     summary: Retorna todos os comentários
 *     tags: [Comentário]
 *     responses:
 *       200:
 *         description: Lista de comentários retornada com sucesso
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
 *                   conteudo:
 *                     type: string
 *                     example: "Comentário de exemplo"
 *                   usuarioId:
 *                     type: integer
 *                     example: 42
 *                   publicacaoId:
 *                     type: integer
 *                     example: 10
 *                   criadoEm:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-11-11T10:00:00.000Z
 */
router.get("/comentario", buscarTodosComentariosController);

/**
 * @swagger
 * /comentario/{id}:
 *   get:
 *     summary: Busca um comentário pelo ID
 *     tags: [Comentário]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do comentário a ser buscado
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Comentário encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 conteudo:
 *                   type: string
 *                   example: "Comentário encontrado com sucesso"
 *                 usuarioId:
 *                   type: integer
 *                   example: 42
 *                 publicacaoId:
 *                   type: integer
 *                   example: 10
 *                 criadoEm:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-11-11T10:00:00.000Z
 *       404:
 *         description: Comentário não encontrado
 */
router.get("/comentario/:id", buscarComentarioPorIdController);

/**
 * @swagger
 * /comentario/{id}:
 *   delete:
 *     summary: Remove um comentário pelo ID
 *     tags: [Comentário]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do comentário a ser removido
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       204:
 *         description: Comentário removido com sucesso
 *       404:
 *         description: Comentário não encontrado
 */
router.delete("/comentario/:id", deletarComentarioPorIdController);

export { router };
