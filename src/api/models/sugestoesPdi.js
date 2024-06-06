import mongoose from "mongoose";

/*const tarefasSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    link: { type: String },
    feito: {type: Boolean},
});*/

//import { usuariosSchema } from "./Usuario.js";

const sugestoesPDISchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  subtitulo: { type: String },
  conteudo: {type: String},
  tituloTarefa1: {type: String},
  linkTarefa1: {type: String},
  //status: {type: Boolean},
  //prazo: {type: Date},
  //autor: {type: String},
}, { versionKey: false });

const sugestoespdi = mongoose.model("sugestoespdi", sugestoesPDISchema);

export { sugestoespdi, sugestoesPDISchema}
