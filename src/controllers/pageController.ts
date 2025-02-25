import { Request, Response } from "express";

export const getPages = (req: Request, res: Response) => {
  res.send("Get Pages");
};

export const createPage = (req: Request, res: Response) => {
  res.send("Create Page");
};

export const getPageById = (req: Request, res: Response) => {
  res.send("Get Page By ID");
};
