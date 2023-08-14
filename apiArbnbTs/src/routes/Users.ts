import { Request, Response, Router } from "express"
import { ControlerUsers } from "../controllers/users/index"

const Rotauser = Router()


Rotauser.get('/users',ControlerUsers.getAllUsers);

Rotauser.get('/user/:id',ControlerUsers.getByIdUser)
Rotauser.get('/userFavorite/:id',ControlerUsers.allFavorites)
Rotauser.post('/userC',ControlerUsers.createUser)
Rotauser.put('/user/:id',ControlerUsers.updataUser)
Rotauser.delete('/user/:id',ControlerUsers.deleteUser)
Rotauser.post('/MarkFavorite',ControlerUsers.FavoriteHome)

export default Rotauser;