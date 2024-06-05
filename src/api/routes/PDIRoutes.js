import express from "express";
import PDIController from "../controller/pdiController.js"; // Importando o PDIController

const routes = express.Router();

// Rotas para PDI
routes.get("/pdi", PDIController.listarPDI);
routes.get("/pdi/:autor", PDIController.procurarPDI); // pelo id do usuário
routes.post("/pdi", PDIController.cadastrarPDI);
routes.put("/pdi/:id", PDIController.atualizarPDI);
routes.delete("/pdi/:id", PDIController.excluirPDI);

//testes
//routes.get("/pdi/:status", PDIController.procurarPDIstatus);

export default routes;
