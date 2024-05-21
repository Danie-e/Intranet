import express from "express";
import PublicacaoController from "../controller/publicacaoController.js";

const routes= express.Router();

routes.get("/publicacao", PublicacaoController.listarPublicacao);
routes.get("/publicacao/:id", PublicacaoController.procurarPublicacao);
routes.post("/publicacao", PublicacaoController.cadastrarPublicacao);
routes.put("/publicacao/:id", PublicacaoController.atualizarPublicacao);
routes.delete("/publicacao/:id", PublicacaoController.excluirPublicacao);



export default routes;
