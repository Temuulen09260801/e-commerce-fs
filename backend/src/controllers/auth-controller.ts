import { Request, Response } from "express";
import User from "../models/user.model";

import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй." });
    }

    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      phoneNumber: "",
    });
    res
      .status(201)
      .json({ message: "create user is successfull", user: createdUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй." });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password.toString());
      if (!isCheck) {
        res
          .status(400)
          .json({ message: "Хэрэглэгчийн и-мэйл эсвэл нууц үг буруу байна." });
      } else {
        const token = generateToken({ id: user._id });
        res
          .status(200)
          .json({ message: "Хэрэглэгч амжилттай нэвтэрлээ", token });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Хэрэглэгч нэвтрэхэд алдаа гарлаа" });
  }
};
