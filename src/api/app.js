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
routes(app);



app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("livro removido com sucesso");
});

export default app;
