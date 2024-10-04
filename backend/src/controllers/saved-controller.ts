import { Request, Response } from "express";
import Saved from "../models/saved.model";

export const getAllSavedProduct = async (req: Request, res: Response) => {
  try {
    const savedProducts = await Saved.find({}).populate(["product", "user"]);
    res.status(200).json({
      message: "success to get all saved products",
      savedProducts: savedProducts,
    });
    console.log("Saved product", savedProducts);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "failed to get all saved products", error });
  }
};
