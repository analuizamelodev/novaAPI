import express from "express";

import { PrismaClient } from "@prisma/client";

import "dotenv/config";

import { router } from "./routes";

const prisma = new PrismaClient();

import { swaggerUi, swaggerSpec } from "./swagger";

const server = express();

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.use(express.json());

server.use(router);

export { server, prisma };

server.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
  console.log("📘 Swagger disponível em http://localhost:3000/api-docs");
});
