import express from "express";

import { PrismaClient } from "@prisma/client";

import "dotenv/config";

import { router } from "./routes";

const prisma = new PrismaClient();

const server = express();

server.use(express.json());

server.use(router);

export { server, prisma };
