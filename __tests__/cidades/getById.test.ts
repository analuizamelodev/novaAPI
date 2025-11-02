import { testServer } from "../jest.setup";

describe("GetById /cidades", () => {
  it("Buscar um registro de cidade por id", async () => {
    const resCriar = await testServer
      .post("/cidades")
      .send({ nome: "São Paulo", estado: "SP" });
    expect(resCriar.status).toEqual(201);

    const idToGet = 1;

    const resGet = await testServer.get(`/cidades/${idToGet}`);
    expect(resGet.status).toEqual(200);
  });
  it("Tentar buscar um registro de cidade por id inválido", async () => {
    const idToGet = 0;
    const resGet = await testServer.get(`/cidades/${idToGet}`);
    expect(resGet.status).toEqual(400);
  });
});
