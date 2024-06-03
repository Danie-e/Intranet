import { sugestoespdi } from "../models/sugestoesPdi.js";

class sugestoesPDIController {
    static async listarsugestoesPDI(req, res) {
        try {
            const sugestoespdiList = await sugestoespdi.find({});
            res.status(200).json(sugestoespdiList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição.` });
        }
    }

    static async procurarsugestoesPDI(req, res) {
        try {
            const id = req.params.id;
            const foundPDI = await sugestoespdi.findById(id);
            if (!foundPDI) {
                return res.status(404).json({ message: "PDI não encontrado." });
            }
            res.status(200).json(foundPDI);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição da sugestão do PDI.` });
        }
    }

    static async cadastrarsugestoesPDI(req, res) {
        const novasugestoesPDI = req.body;

        try {
            // Verificar se o autor existe

            // const autorPDI = await usuarios.findById(novoPDI.autor);
            // if (!autorPDI) {
            //    return res.status(404).json({ message: "Autor não encontrado." });
            // }

            // //Montar objeto para cadastro
            // const cadastroPDI = {
            //     ...novoPDI,
            //     autor: { ...autorPDI._doc },
            //     data: Date(),
            // };

            // Criar o PDI
            // const pdiCriado = await pdi.create(cadastroPDI);
            const sugestoespdiCriado = await sugestoespdi.create(novasugestoesPDI);
            res.status(201).json({ message: "Criado com sucesso", sugestoespdi: sugestoespdiCriado });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar PDI.` });
        }
    }

    static async atualizarsugestoesPDI(req, res) {
        try {
            const id = req.params.id;
            const atualizacaosugestoesPDI = req.body;
            await sugestoespdi.findByIdAndUpdate(id, atualizacaosugestoesPDI);
            res.status(200).json({ message: "PDI atualizado com sucesso." });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição de atualização do PDI.` });
        }
    }

    static async excluirsugestoesPDI(req, res) {
        try {
            const id = req.params.id;
            await sugestoespdi.findByIdAndDelete(id);
            res.status(200).json({ message: "Sugestão de PDI excluído com sucesso." });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição de exclusão do PDI.` });
        }
    }
}

export default sugestoesPDIController;
