import { ObjectId } from "mongodb";
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

    static async procurarPDI(req, res) { // por autor
        try {
            //const autor = req.params.autor;
            // const foundPDI = await pdi.find(req);
            // if (!foundPDI) {
            //     return res.status(404).json({ message: "PDI não encontrado. Problemas no ID do usuário" });
            // }
            // res.status(200).json(foundPDI);
            
            const autor = req.params.autor;
            const foundPDIs = await pdi.find({ autor: autor });
            if (foundPDIs.length === 0) {
            return res.status(404).json({ message: "Nenhum PDI encontrado para este autor." });
        }
        res.status(200).json(foundPDIs);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição do PDI.` });
        }
    }

    static async cadastrarPDI(req, res) {
        const novoPDI = req.body;

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
            const pdiCriado = await pdi.create(novoPDI);
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

    // static async excluirPDI(req, res) {
    //     try {
    //         const id = req.params.id;
    //         console.log(req);
    //         filtro = { "_id": ObjectId(req) }
    //         await pdi.deleteOne(filtro);
    //         res.status(200).json({ message: "PDI excluído com sucesso." });
    //     } catch (error) {
    //         res.status(500).json({ message: `${error.message} - Falha na requisição de exclusão do PDI.` });
    //     }
    // }

    static async excluirPDI(req, res) {
        try {
            const id = req.params.id; // o req.body.id dependiendo de cómo envíes el ID
            const filtro = { "_id": new ObjectId(id) };
    
            const resultado = await pdi.deleteOne(filtro);
    
            if (resultado.deletedCount === 1) {
                res.status(200).json({ message: "PDI excluído com sucesso." });
            } else {
                res.status(404).json({ message: "PDI não encontrado." });
            }
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição de exclusão do PDI.` });
        }
    }
}

export default PDIController;
