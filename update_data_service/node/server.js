import { main } from "./functions.js";
import express from "express";
const PORT = 3010;
const server = express();
server.use(express.json());

server.get("/data", async (req, res) => {
  console.log("req");
  const { acao } = req.query;
  const response_data = await main(acao);
  res.send(response_data);
});

server.get("/health", (req, res) => {
  res.status(200).send("OK");
});

server.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
