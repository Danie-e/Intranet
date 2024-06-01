import quizes from "../models/Quiz.js";
import { usuarios } from "../models/Usuario.js";

class QuizController {

    static async listarQuiz(req, res) {
        try {
            const quiz = await quizes.find({});
            res.status(200).json(quiz);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição.` });
        }
    };

    static async procurarQuiz(req, res) {
        try {
            const id = req.params.id;
            const quiz = await quizes.findById(id);
            res.status(200).json(quiz);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição do quiz.` });
        }
    };

    static async cadastrarQuiz(req, res) {
        const novoQuiz = req.body;

        try {
            // const autorQuiz = await usuarios.findById(novoQuiz.autor);
            // console.log(autorQuiz._doc );
            // const cadastroQuiz = { ...novaQuiz, autor: { ...autorQuiz._doc }};
            const quizCadastrado = await quizes.create(novoQuiz);
            res.status(201).json({ message: "Criado com sucesso", quizes: quizCadastrado });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha ao cadastrar quiz.` });
        }
    };

    static async atualizarQuiz(req, res) {
        try {
            const id = req.params.id;
            await quizes.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Quiz foi atualizado." });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição do quiz.` });
        }
    };

    static async excluirQuiz(req, res) {
        try {
            const id = req.params.id;
            await quizes.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "Quiz foi excluido com sucesso." });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição do quiz.` });
        }
    };

};

export default QuizController;   