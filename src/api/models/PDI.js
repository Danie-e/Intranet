import mongoose from "mongoose";

const tarefasSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    link: { type: String },
    feito: {type: Boolean},
});

const PDISchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  subtitulo: { type: String },
  conteudo: {type: String},
  tituloTarefa1: {type: String},
  linkTarefa1: {type: String},
  status: {type: Boolean},
  prazo: {type: Date},
}, { versionKey: false });

const pdi = mongoose.model("pdi", PDISchema);

export { pdi, PDISchema}
