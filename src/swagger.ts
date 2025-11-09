import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API de Exemplo",
    version: "1.0.0",
    description: "Documentação da API com Swagger",
  },
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/**/*.ts"], 
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
