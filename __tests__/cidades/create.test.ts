import { testServer } from "../jest.setup";

describe("Create /cidades", () => {
  it("Registrar uma nova cidade", async () => {
    const resCriar = await testServer.post("/cidades").send({
      nome: "São Paulo",
      estado: "SP",
    });
    expect(resCriar.status).toEqual(201);
  });
  it("Tentar registrar uma cidade com dados incompletos", async () => {
    const resCriar = await testServer.post("/cidades").send({
      nome: "Rio de Janeiro",
    });
    expect(resCriar.status).toEqual(400);
  });
  it("Tentar registrar uma cidade com dados inválidos", async () => {
    const resCriar = await testServer.post("/cidades").send({
      nome: "Belo Horizonte",
      estado: "Minas Gerais",
    });
    expect(resCriar.status).toEqual(400);
  });
});
