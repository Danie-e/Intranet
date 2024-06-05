import express from "express";
import FormularioController from "../controller/formularioController.js";

const routes = express.Router();

routes.get("/formulario", FormularioController.listarFormulario);
routes.get("/formulario/:id", FormularioController.procurarFormulario);
routes.post("/formulario", FormularioController.cadastrarFormulario);
routes.put("/formulario/:id", FormularioController.atualizarFormulario);
routes.delete("/formulario/:id", FormularioController.excluirFormulario);

export default routes;
