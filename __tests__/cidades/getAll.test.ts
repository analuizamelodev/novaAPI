import { testServer } from "../jest.setup";

describe("GetAll /cidades", () => {
  it("Buscar todos os registros de cidades", async () => {
    const resCriar = await testServer.post("/cidades").send({
      cidade: "São Paulo",
      estado: "SP",
    });
    expect(resCriar.status).toEqual(201);
    const resBuscar = await testServer.get("/cidades");
    expect(resBuscar.status).toEqual(200);
  });
  it("Tentar buscar registros de cidades com query inválida", async () => {
    const res = await testServer.get("/cidades").query({ limit: 0 });
    expect(res.status).toEqual(400);
  });
});
