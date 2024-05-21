import "dotenv/config";
import app from "./api/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor escutando!");
});
