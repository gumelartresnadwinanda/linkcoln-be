import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.send("Get Users");
};

export const createUser = (req: Request, res: Response) => {
  res.send("Create User");
};

export const getUserById = (req: Request, res: Response) => {
  res.send("Get User By ID");
};
