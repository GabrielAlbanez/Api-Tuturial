import { Request, Response, Router } from "express"
import { ControlerUsers } from "../controllers/users/index"

const Rotauser = Router()


Rotauser.get('/users',ControlerUsers.getAllUsers)

export default Rotauser;