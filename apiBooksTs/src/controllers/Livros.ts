import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const Livros = new PrismaClient().livros; //ou seja essa nossa constante vai estar istanciando o banco de dados

//vamos fazer os metods do crud para a tabela client usando essa instanciação
//esse findMany metodo do prisma para retornar todos values do campo da tabela e a gente coloca esse include
//o include vai trazer junto tudo que estiver relacionado a ess tabela
export const getAllLivros = async (req: Request, res: Response) => {
 
    try{
 
        const allLivros = await Livros.findMany()
        res.status(200).json(allLivros)

    }
    catch(err){console.log(err)}

  }


export const getByIdLivros = async (req: Request, res: Response) => {
  try{
    const livroID = req.params.id
    const LivrosId = await Livros.findUnique({
      where : {
        id : livroID
      }
    })
    res.status(200).json({data : LivrosId})
   

  }catch(err){console.log(err);}
}


export const createLivro = async (req: Request, res: Response) => {
  try{
    const livroData = req.body
    const livro = await Livros.create({
      data : {
        title : livroData.title,
        autor : {
            connect : { id: livroData.autorid}
        }
      }
    })
    res.status(201).json({data : livro})
   

  }catch(err){console.log(err);}
}


export const updateLivro = async (req: Request, res: Response) => {
  try{
    const livroID = req.params.id
    const livroData = req.body
    const livro = await Livros.update({
       where : {
         id : livroID
       },
       data : livroData
    })
    res.status(200).json({data : livro})
   

  }catch(err){console.log(err);}
}


export const deleteLivro = async (req: Request, res: Response) => {
  try{
    const livroID = req.params.id
    await Livros.delete({
       where : {
         id : livroID
       }
    })
    res.status(200).json({message : `Autor ${livroID} deletado com sucesso`})
   

  }catch(err){console.log(err);}
}
