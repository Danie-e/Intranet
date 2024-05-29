import { pdi } from "../models/PDI.js";
import { usuarios } from "../models/Usuario.js";

class PDIController {
    static async listarPDI(req, res) {
        try {
            const pdiList = await pdi.find({});
            res.status(200).json(pdiList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição.` });
        }
    }

    static async procurarPDI(req, res) {
        try {
            const id = req.params.id;
            const foundPDI = await pdi.findById(id);
            if (!foundPDI) {
                return res.status(404).json({ message: "PDI não encontrado." });
            }
            res.status(200).json(foundPDI);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição do PDI.` });
        }
    }

    static async cadastrarPDI(req, res) {
        const novoPDI = req.body;

        try {
            // Verificar se o autor existe
            const autorPDI = await usuarios.findById(novoPDI.autor);
            if (!autorPDI) {
                return res.status(404).json({ message: "Autor não encontrado." });
            }

            // Montar objeto para cadastro
            const cadastroPDI = {
                ...novoPDI,
                autor: { ...autorPDI._doc },
                data: Date(),
            };

            // Criar o PDI
            const pdiCriado = await pdi.create(cadastroPDI);
            res.status(201).json({ message: "Criado com sucesso", pdi: pdiCriado });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar PDI.` });
        }
    }

    static async atualizarPDI(req, res) {
        try {
            const id = req.params.id;
            const atualizacaoPDI = req.body;
            await pdi.findByIdAndUpdate(id, atualizacaoPDI);
            res.status(200).json({ message: "PDI atualizado com sucesso." });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição de atualização do PDI.` });
        }
    }

    static async excluirPDI(req, res) {
        try {
            const id = req.params.id;
            await pdi.findByIdAndDelete(id);
            res.status(200).json({ message: "PDI excluído com sucesso." });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição de exclusão do PDI.` });
        }
    }
}

export default PDIController;
