import express from "express";
import sugestoesPDIController from "../controller/sugestoesPdiController.js"; // Importando o PDIController

const routes = express.Router();

// Rotas para PDI
routes.get("/sugestoespdi", sugestoesPDIController.listarsugestoesPDI);
routes.get("/sugestoespdi/:id", sugestoesPDIController.procurarsugestoesPDI);
routes.post("/sugestoespdi", sugestoesPDIController.cadastrarsugestoesPDI);
routes.put("/sugestoespdi/:id", sugestoesPDIController.atualizarsugestoesPDI);
routes.delete("/sugestoespdi/:id", sugestoesPDIController.excluirsugestoesPDI);

export default routes;
