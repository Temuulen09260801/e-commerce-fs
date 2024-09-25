import { Request, Response } from "express";
import Category from "../models/category.model";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ message: "Хоосон категори байж болохгүй." });
    }

    const createdCategory = await Category.create({
      name,
      description,
    });
    res.status(201).json({
      message: "create category is successfull",
      category: createdCategory,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

const getAllCategory = async (req: Request, res: Response) => {};
