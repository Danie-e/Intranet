import mongoose from "mongoose";
import { usuariosSchema } from "./Usuario.js";

const publicacaoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    descricao: { type: String },
    autor: usuariosSchema,
    imagem: { type: String },
    texto: { type: String, require: true },
    categorias: { type: String, require: true },
}, { versionKey: false });

const publicacoes = mongoose.model("publicacoes", publicacaoSchema);

export default publicacoes;
