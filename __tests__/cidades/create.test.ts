import { testServer } from "../jest.setup";


describe("Post /cidades", () => {

    it("Registrar uma nova cidade", async () => {
        const resCriar = await testServer
        .post("/cidades")
        .send({
            cidade: "São Paulo",
            estado: "SP"
        });
        expect(resCriar.status).toEqual(201);
    });
});
        