import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const AutorCliente = new PrismaClient().autor; //ou seja essa nossa constante vai estar istanciando o banco de dados

//vamos fazer os metods do crud para a tabela client usando essa instanciação
//esse findMany metodo do prisma para retornar todos values do campo da tabela e a gente coloca esse include
//o include vai trazer junto tudo que estiver relacionado a ess tabela
export const getAllAutor = async (req: Request, res: Response) => {
  try {
    const allAutores = await AutorCliente.findMany({
      include: {
        livros: true,
      },
    });
    res.status(200).json({ data: allAutores });
  } catch (err) {
    console.log(err);
  }
};

export const getByIdAutor = async (req: Request, res: Response) => {
  try{
    const autorID = req.params.id
    const autor = await AutorCliente.findUnique({
      where : {
        id : autorID
      },
      include : {
        livros : true
      }
    })
    res.status(200).json({data : autor})
   

  }catch(err){console.log(err);}
}


export const createAutor = async (req: Request, res: Response) => {
  try{
    const autorData = req.body
    const autor = await AutorCliente.create({
      data : autorData
    })
    res.status(201).json({data : autor})
   

  }catch(err){console.log(err);}
}


export const updateAutor = async (req: Request, res: Response) => {
  try{
    const autorID = req.params.id
    const autorData = req.body
    const autor = await AutorCliente.update({
       where : {
         id : autorID
       },
       data : autorData
    })
    res.status(200).json({data : autor})
   

  }catch(err){console.log(err);}
}


export const deleteAutor = async (req: Request, res: Response) => {
  try{
    const autorID = req.params.id
    const autor = await AutorCliente.delete({
       where : {
         id : autorID
       }
    })
    res.status(200).json({message : `Autor ${autorID} deletado com sucesso`})
   

  }catch(err){console.log(err);}
}
