import mongoose from "mongoose";

const sugestoesPDISchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  subtitulo: { type: String },
  conteudo: {type: String},
  tituloTarefa1: {type: String},
  linkTarefa1: {type: String},
}, { versionKey: false });

const sugestoespdi = mongoose.model("sugestoespdi", sugestoesPDISchema);

export { sugestoespdi, sugestoesPDISchema}
