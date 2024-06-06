import { sugestoespdi } from "../models/SugestoesPDI.js";
//import { usuarios } from "../models/Usuario.js";

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
            const sugestoesPDI = await sugestoesPDI.findById(id);
            res.status(200).json(sugestoesPDI);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição da sugestao de pdi.` });
        }
    };

    static async cadastrarsugestoesPDI(req, res) { 
        const novosugestoesPDI = req.body;

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

            // //Criar o PDI
            // const pdiCriado = await pdi.create(cadastroPDI);
            const sugestoespdiCriado = await sugestoespdi.create(novosugestoesPDI);
            res.status(201).json({ message: "Criado com sucesso", sugestoespdi: sugestoespdiCriado });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar PDI.` });
        }
    }

//     static async atualizarPDI(req, res) {
//         try {
//             const id = req.params.id;
//             const atualizacaoPDI = req.body;
//             await pdi.findByIdAndUpdate(id, atualizacaoPDI);
//             res.status(200).json({ message: "PDI atualizado com sucesso." });
//         } catch (error) {
//             res.status(500).json({ message: `${error.message} - Falha na requisição de atualização do PDI.` });
//         }
//     }

//     static async excluirPDI(req, res) {
//         try {
//             const id = req.params.id;
//             await pdi.findByIdAndDelete(id);
//             res.status(200).json({ message: "PDI excluído com sucesso." });
//         } catch (error) {
//             res.status(500).json({ message: `${error.message} - Falha na requisição de exclusão do PDI.` });
//         }
//     }
}

export default sugestoesPDIController;
