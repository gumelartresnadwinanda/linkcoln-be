import { Request, Response, NextFunction } from "express";
import Page from "../models/Page";

const checkPageOwnership = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id: pageId } = req.params;
  const userId = req.userId;

  try {
    const page = await Page.findById(pageId);
    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    if (page.userId !== userId) {
      return res
        .status(403)
        .json({ message: "You do not have permission to modify this page" });
    }

    next();
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export default checkPageOwnership;
