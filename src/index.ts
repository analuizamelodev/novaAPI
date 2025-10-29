import { server } from "./server";

const PORT = process.env.PORT ?? 3333;
server.listen(Number(PORT), () => {
  console.log(`Server running on port ${PORT}`);
});
