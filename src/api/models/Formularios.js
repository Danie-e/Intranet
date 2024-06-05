import mongoose from "mongoose";
import { usuariosSchema } from "./Usuario.js";
import { json } from "express";

const formularioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    data: { type: Date },
    formHtml: { type: String },
    conteudo: { type: JSON, require: true },
}, { versionKey: false });

const formulario = mongoose.model("formulario", formularioSchema);

export default formulario;
