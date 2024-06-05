import express from "express";
import usuarios from "./usuariosRoutes.js";
import publicacao from "./publicacaoRoutes.js"
import formulario from "./formularioRoutes.js";

const routes = (app) => {
    app.route("/").get((req,res)=> res.status(200).send("Api criada para realização do Trabalho Interdisciplinar: Desenvolvimento de Aplicação Interativa "));
    app.use(express.json(),usuarios,publicacao,formulario);
};

export default routes;
