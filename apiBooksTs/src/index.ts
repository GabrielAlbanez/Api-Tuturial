import express, { Request, Response } from "express";
import autorRota from "./routes/Ator";
import rotaLivro from "./routes/Livros";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("running");
});

app.use(autorRota,rotaLivro)


app.listen(port, () => {
  console.log(`server rodando na porta: ${port}`);
});
