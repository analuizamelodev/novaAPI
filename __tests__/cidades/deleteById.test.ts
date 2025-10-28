import { testServer } from "../jest.setup";

describe("Delete /cidades/:id", () => {
    it("Deletar um registro de cidade por id", async () => {
        const resCriar = await testServer.post("/cidades").send({ cidade: "São Paulo", estado: "SP" });
        expect(resCriar.status).toEqual(201);

        const idToDelete = 1;

        const resDeletar = await testServer.delete(`/cidades/${idToDelete}`);
        expect(resDeletar.status).toEqual(200);
    });
});