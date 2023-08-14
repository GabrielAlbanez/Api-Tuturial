import { db as prisma } from "../../shared/db";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allusers = await prisma.usuarios.findMany({
      include: {
        Favoritos: true,
      },
    });
    res.status(200).json({ data: allusers });
  } catch (err) {
    console.log(err);
  }
};

export const getByIdUser = async (req: Request, res: Response) => {
  try {
    const Userid = req.params.id;
    const allusers = await prisma.usuarios.findMany({
      where: {
        id: Userid,
      },
      include: {
        Favoritos: true,
      },
    });
    res.status(200).json({ data: allusers });
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const dataUser = req.body;
    const user = await prisma.usuarios.create({
      data: dataUser
    });
    res.status(200).json({ data: user });
  } catch (err) {
    console.log(err);
  }
};

export const updataUser = async (req: Request, res: Response) => {
  try {
    const Userid = req.params.id;
    const dataUser = req.body;
    const user = await prisma.usuarios.update({
      where: {
        id: Userid,
      },
      data: dataUser,
    });
    res.status(200).json({ data: user });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const Userid = req.params.id;
    await prisma.usuarios.delete({
      where: {
        id: Userid,
      },
    });
    res.status(200).json({ message: `Autor ${Userid} deletado com sucesso` });
  } catch (err) {
    console.log(err);
  }
};


//rota para favoritar uma casa

export const FavoriteHome = async(req : Request,res : Response)=>{

  const {usuarioId, casaId} = req.body

  try {
    const usuario = await prisma.usuarios.update({
      where: { id: usuarioId },
      data: {
        Favoritos: {
          connect: { id: casaId }
        }
      }
    });

    res.json(usuario);
  }
  catch (error) {
    res.status(500).json({ error: 'Erro ao marcar casa como favorita.' });
  }
}

//rotas para buscar todas as casas favoritas de um certo usuario

export const allFavorites = async(req : Request ,res : Response)=>{

  const {id} = req.params

  try{
   
    const usuario = await prisma.usuarios.findUnique({
      where : {id : id},
      include : {Favoritos : true}
    })

     res.status(200).json(usuario.Favoritos)
  }
  catch(error){
    res.status(500).json({error : 'Erro ao buscar casas favoritas.'})
  }
 
   

 



}