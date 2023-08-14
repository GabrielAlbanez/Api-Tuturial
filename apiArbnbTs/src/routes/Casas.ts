import { Request, Response, Router } from "express"

const RotaCasa = Router()


RotaCasa.get('/casas', (req : Request, res : Response) => {
    res.send('casas')
})

export default RotaCasa