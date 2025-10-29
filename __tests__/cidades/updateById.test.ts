import { testServer } from "../jest.setup";

describe("UpdateById /cidades", () => {
  it("Atualizar um registro de cidade por id", async () => {
    const resCriar = await testServer
      .post("/cidades")
      .send({ cidade: "São Paulo", estado: "SP" });
    expect(resCriar.status).toEqual(201);

    const idToUpdate = 1;

    const resAtualizar = await testServer
      .put(`/cidades/${idToUpdate}`)
      .send({ cidade: "Rio de Janeiro", estado: "RJ" });
    expect(resAtualizar.status).toEqual(200);
  });
  it("Tentar atualizar um registro de cidade por id inválido", async () => {
    const idToUpdate = 0;

    const resAtualizar = await testServer
      .put(`/cidades/${idToUpdate}`)
      .send({ cidade: "Rio de Janeiro", estado: "RJ" });
    expect(resAtualizar.status).toEqual(400);
  });
});
