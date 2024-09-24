import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Resend } from "resend";

dotenv.config();

import authRoute from "./routes/auth-route";
import { connectDB } from "./config/db";
import { generateHtmlTemplate } from "./utils/generateHtmlTemplate";

const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express ees application object vvsgeh
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);

app.get("/", async (req: Request, res: Response) => {
  const rndOtp = Math.floor(Math.random() * 10_000)
    .toString()
    .padStart(4, "0");
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["temuulen09260801@gmail.com"],
    subject: "hello world",
    html: generateHtmlTemplate(rndOtp),
  });
  if (error) {
    console.log("Email_error", { error });
  }
  res.send("Welcome E-commerce API Server");
});

connectDB(MONGO_URI);

//server asaah
app.listen(PORT, () => {
  console.log(`Server localhost:${PORT} running!`);
});

// MONGOOSE framework san => ODM - Object data mapping
