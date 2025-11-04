import swaggerJSDoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Minha API TypeScript",
      version: "1.0.0",
      description: "Documentação da API feita com TypeScript e Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], //
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
