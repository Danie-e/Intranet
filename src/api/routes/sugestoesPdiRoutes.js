import express from "express";
import sugestoesPDIController from "../controller/SugestoesPdiController.js"; // Importando o PDIController

const routes = express.Router();

// Rotas para PDI
routes.get("/sugestoespdi", sugestoesPDIController.listarsugestoesPDI);
routes.get("/sugestoespdi/:id", sugestoesPDIController.procurarsugestoesPDI); // pelo id do usuário
routes.post("/sugestoespdi", sugestoesPDIController.cadastrarsugestoesPDI);
//routes.put("/pdi/:id", PDIController.atualizarPDI);
//routes.delete("/pdi/:id", PDIController.excluirPDI);

//testes
//routes.get("/pdi/:status", PDIController.procurarPDIstatus);

export default routes;
