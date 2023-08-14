import { Router } from "express";
import { 
    getAllAutor,
    getByIdAutor,
    createAutor,
    updateAutor,
    deleteAutor
 } from "../controllers/Autor";

const autorRota = Router()

autorRota.get('/autores',getAllAutor)
autorRota.get('/autor/:id',getByIdAutor)
autorRota.post('/createA',createAutor)
autorRota.put('/updateA/:id',updateAutor)
autorRota.delete('/deleteA/:id',deleteAutor)


export default autorRota;
