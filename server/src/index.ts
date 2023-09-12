import express, { Request, Response } from "express";
import dotenv from "dotenv";
import db from "./utils/db";
import DeckModel from "./models/deck";
import cors from "cors";


const PORT = 5000;

const app = express();

app.use(cors({
  origin: "*",
}));
app.use(express.json()); //allows support for json POST request

dotenv.config();

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new DeckModel({
    title: req.body.title,
  })
  const createdDeck = await newDeck.save();
  res.json(createdDeck)
})

app.get("/", (_, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, async () => {
  await db();
});
