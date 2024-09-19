import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

import authRoute from "./routes/auth-route";

const PORT = process.env.PORT;

//express ees application object vvsgeh
const app = express();

//middlewares
app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome E-commerce API Server");
});

//server asaah
app.listen(PORT, () => {
  console.log(`Server localhost:${PORT} running!`);
});
