import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  senha: { type: String },
  equipe: { type: String },
  tipo: { type: Number }
}, { versionKey: false });

const usuarios = mongoose.model("usuarios", usuariosSchema);

export { usuarios, usuariosSchema}
