import express from "express";
import PDIController from "../controller/sugestoesPdiController.js"; // Importando o PDIController

const routes = express.Router();

// Rotas para PDI
routes.get("/sugestoespdi", PDIController.listarPDI);
routes.get("/sugestoespdi/:id", PDIController.procurarPDI);
routes.post("/sugestoespdi", PDIController.cadastrarPDI);
routes.put("/sugestoespdi/:id", PDIController.atualizarPDI);
routes.delete("/sugestoespdi/:id", PDIController.excluirPDI);

export default routes;
