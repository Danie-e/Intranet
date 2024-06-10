import mongoose from "mongoose";
import { usuariosSchema } from "./Usuario.js";

const quizSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    varNomeQuiz: { type: String, required: true },
    varQuestoes: { type: Array, required: true },
    //varTextoQuestao: { type: String, required: true },
    //varImagem: { type: String },
    //varOpcao: { type: Array, require: true },
    //varTextoOpcao: { type: Array, require: true },
}, { versionKey: false });

const quizes = mongoose.model("quizes", quizSchema);

export default quizes;