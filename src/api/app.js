import express from "express";
import connect from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors"
const conexao = await connect();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
})

const app = express();
app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

routes(app);

export default app;
