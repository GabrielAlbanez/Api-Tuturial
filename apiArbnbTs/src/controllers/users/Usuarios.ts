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
      data: dataUser,
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
