import express, { Request, Response } from "express";
import dotenv from "dotenv";
import db from "./utils/db";


const PORT = 5000;

const app = express();

dotenv.config();

app.get("/", (_, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, async () => {
  await db();
});
