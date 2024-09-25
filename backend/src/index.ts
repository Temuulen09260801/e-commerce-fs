import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
// import { Resend } from "resend";
import nodemailer from "nodemailer";

dotenv.config();

import authRoute from "./routes/auth-route";
import categoryRoute from "./routes/category-route";
import { connectDB } from "./config/db";
import { generateHtmlTemplate } from "./utils/generateHtmlTemplate";

const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express ees application object vvsgeh
const app = express();
// const resend = new Resend(process.env.RESEND_API_KEY);

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);

app.get("/", async (req: Request, res: Response) => {
  const rndOtp = Math.floor(Math.random() * 10_000)
    .toString()
    .padStart(4, "0");
  // const { data, error } = await resend.emails.send({
  //   from: "Acme <onboarding@resend.dev>",
  //   to: ["temuulen09260801@gmail.com"],
  //   subject: "hello world",
  //   html: generateHtmlTemplate(rndOtp),
  // });
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "amarjargal.ts01@gmail.com",
      pass: "vezokclscqdkxynx",
    },
  });
  const info = await transporter.sendMail({
    from: '"amarjargal.ts01@gmail.com', // sender address
    to: "temuulen09260801@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: generateHtmlTemplate(rndOtp), // html body
  });
  console.log("Message sent: %s", info.messageId);
  // if (error) {
  //   console.log("Email_error", { error });
  // }
  res.send("Welcome E-commerce API Server");
});

connectDB(MONGO_URI);

//server asaah
app.listen(PORT, () => {
  console.log(`Server localhost:${PORT} running!`);
});

// MONGOOSE framework san => ODM - Object data mapping
