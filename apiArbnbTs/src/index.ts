import express, { Request, Response } from "express"
import RotaCasa from "./routes/Casas"
import Rotauser from "./routes/Users"
const app = express()
const porta = process.env.PORT || 8080
app.use(express.json())

app.get('/',(req : Request,res : Response)=>{
res.status(200).send("Welcome Api Arbnb")
})

app.use(RotaCasa,Rotauser)



app.listen(porta,()=>{console.log(`server running on ${porta}`)})