import express from "express";
import QuizController from "../controller/quizController.js";

const routes= express.Router();

routes.get("/quiz", QuizController.listarQuiz);
routes.get("/quiz/:id", QuizController.procurarQuiz);
routes.post("/quiz", QuizController.cadastrarQuiz);
routes.put("/quiz/:id", QuizController.atualizarQuiz);
routes.delete("/quiz/:id", QuizController.excluirQuiz);

export default routes;