import { Router } from "express";
import { 
  getAllLivros,
  getByIdLivros,
  createLivro,
  deleteLivro,
  updateLivro
 } from "../controllers/Livros";

const rotaLivro = Router()

rotaLivro.get('/livros',getAllLivros)
rotaLivro.get('/livro/:id',getByIdLivros)
rotaLivro.post('/createL',createLivro)
rotaLivro.put('/updateL/:id',updateLivro)
rotaLivro.delete('/deleteL/:id',deleteLivro)


export default rotaLivro;
