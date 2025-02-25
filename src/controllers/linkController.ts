import { Request, Response } from "express";

export const getLinks = (req: Request, res: Response) => {
  res.send("Get Links");
};

export const createLink = (req: Request, res: Response) => {
  res.send("Create Link");
};

export const getLinkById = (req: Request, res: Response) => {
  res.send("Get Link By ID");
};
