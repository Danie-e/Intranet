import formulario from "../models/Formularios.js";
import { usuarios } from "../models/Usuario.js";

class FormularioController {

    static async listarFormulario(req, res) {
        try {
            const formularios = await formulario.find({});
            res.status(200).json(formularios);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição.` });
        }
    };

    static async procurarFormulario(req, res) {
        try {
            const id = req.params.id;
            const formularios = await formulario.findById(id);
            res.status(200).json(formularios);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição do formulario.` });
        }
    };

    static async cadastrarFormulario(req, res) {
        const novoformulario = req.body;

        try {
            // const autorFormulario = await usuarios.findById(novoformulario.autor);
            // console.log(autorFormulario._doc );
            // const cadastroFormulario = { ...novoformulario, autor: { ...autorFormulario._doc }, data:Date() };
            const formularioCadastrado =await formulario.create(novoformulario);
            res.status(201).json({ message: "Criado com sucesso", formulario: formularioCadastrado });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha ao cadastrar formularios.` });
        }
    };

    static async atualizarFormulario(req, res) {
        try {
            const id = req.params.id;
            await formulario.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Formulario foi atualizado com sucesso." });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição do formularios.` });
        }
    };

    static async excluirFormulario(req, res) {
        try {
            const id = req.params.id;
            await formulario.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "Formularios foi excluida com sucesso." });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição do formulario.` });
        }
    };

};

export default FormularioController;