import express from "express";
import PublicacaoController from "../controller/publicacaoController.js";
import PDIController from "../controller/pdiController.js"; // Importando o PDIController

const routes = express.Router();

// Rotas para PDI
routes.get("/pdi", PDIController.listarPDI);
routes.get("/pdi/:id", PDIController.procurarPDI);
routes.post("/pdi", PDIController.cadastrarPDI);
routes.put("/pdi/:id", PDIController.atualizarPDI);
routes.delete("/pdi/:id", PDIController.excluirPDI);

export default routes;
