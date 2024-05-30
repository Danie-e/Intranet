import express from "express";
import usuarios from "./usuariosRoutes.js";
import publicacao from "./publicacaoRoutes.js"

const routes = (app) => {
    app.route("/").get((req,res)=> res.status(200).send("Api criada para realização do Trabalho Interdisciplinar: Desenvolvimento de Aplicação Interativa "));
    app.use(express.json(),usuarios,publicacao);
};

export default routes;
