import publicacoes from "../models/Publicacoes.js";
import { usuarios } from "../models/Usuario.js";

class PublicacaoController {

    static async listarPublicacao(req, res) {
        try {
            const publicacao = await publicacoes.find({});
            res.status(200).json(publicacao);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição.` });
        }
    };

    static async procurarPublicacao(req, res) {
        try {
            const id = req.params.id;
            const publicacao = await publicacoes.findById(id);
            res.status(200).json(publicacao);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição da publicação.` });
        }
    };

    static async cadastrarPublicacao(req, res) {
        const novaPublicacao = req.body;

        try {
            const autorPublicacao = await usuarios.findById(novaPublicacao.autor);
            const cadastroPublicacao = { ...novaPublicacao, autor: { ...autorPublicacao.
                _doc } };
            const publicacaoCadastrada =await publicacoes.create(cadastroPublicacao);
            
            res.status(201).json({ message: "Criado com sucesso", publicacoes: publicacaoCadastrada });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha ao cadastrar publicação.` });
        }
    };

    static async atualizarPublicacao(req, res) {
        try {
            const id = req.params.id;
            await publicacoes.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Publicação foi atualizado." });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição da publicação.` });
        }
    };

    static async excluirPublicacao(req, res) {
        try {
            const id = req.params.id;
            await publicacoes.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "Publicação foi excluida com sucesso." });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição da publicação.` });
        }
    };

};

export default PublicacaoController;