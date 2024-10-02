import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import { sendEmail } from "../utils/send-email";
import crypto from "crypto";

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
        const { firstname, profile_img, email } = user;
        res.status(200).json({
          message: "Хэрэглэгч амжилттай нэвтэрлээ",
          token,
          user: { firstname, profile_img, email },
        });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Хэрэглэгч нэвтрэхэд алдаа гарлаа" });
  }
};

export const currentUser = async (req: Request, res: Response) => {
  const { id } = req.user;
  const findUser = await User.findById(id);
  res.status(200).json({ user: findUser, message: "Success" });
};

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res
        .status(400)
        .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    }
    const rndOtp = Math.floor(Math.random() * 10_000)
      .toString()
      .padStart(4, "0");
    findUser.otp = rndOtp;
    await findUser.save();
    await sendEmail(email, rndOtp);
    res.status(200).json({ message: "OTP code sent to email success" });
  } catch (error) {}
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otpValue } = req.body;
  const findUser = await User.findOne({ email: email, otp: otpValue });
  if (!findUser) {
    return res
      .status(400)
      .json({ message: "Бүртгэлтэй хэрэглэгч эсвэл OTP код олдсонгүй" });
  }
  //sendEmail
  const resetToken = crypto.randomBytes(25).toString("hex");
  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  findUser.passwordResetToken = hashedResetToken;
  findUser.passwordResetTokenExpire = new Date(Date.now() + 10 * 60 * 1000);
  await findUser.save();
  console.log("RESET TOKEN", resetToken);
  await sendEmail(
    email,
    `<a href="http://localhost:3000/forgetpass/newpass?resettoken=${resetToken}">Нууц үг сэргээх холбоос</a>`
  );
  res.status(200).json({ message: "Нууц үг сэргээх имэйл илгээлээ" });
};

export const verifyPassword = async (req: Request, res: Response) => {
  const { password, resetToken } = req.body;
  console.log("shalgah", password, resetToken);

  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  console.log("hash", hashedResetToken);
  const findUser = await User.findOne({
    passwordResetToken: hashedResetToken,
    passwordResetTokenExpire: { $gt: Date.now() },
  });
  console.log("finduser", findUser);
  if (!findUser) {
    return (
      res
        .status(400)
        .json({ message: "Таны нууц үг сэргээх хугацаа дууссан байна:" }),
      console.log("Res", res)
    );
  }

  findUser.password = password;
  await findUser.save();
  console.log("user", findUser);
  res.status(200).json({ message: "Нууц үг  амжилттэй сэргээлээ" });
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({
    message: "Хэрэглэгчийн мэдээлэл амжилттай шинэчлэгдлээ.",
    updatedUser,
  });
};
