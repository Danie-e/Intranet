import express from "express";
import usuarios from "./usuariosRoutes.js";
import publicacao from "./publicacaoRoutes.js";
import quiz from "./quizRoutes.js";

const routes = (app) => {
    app.route("/").get((req,res)=> res.status(200).send("curso de Node.js"));
    app.use(express.json(),usuarios,publicacao,quiz);
};

export default routes;
