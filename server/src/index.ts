import express, { Request, Response, response } from "express";
import dotenv from "dotenv";
import db from "./utils/db";
import DeckModel from "./models/deck";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json()); //allows support for json POST request

dotenv.config();

app.post("/decks", async (req: Request, res: Response) => {
	try {
		const newDeck = new DeckModel({
			title: req.body.title,
		});
		const createdDeck = await newDeck.save();
		return res.json(createdDeck).status(200);
	} catch (error: unknown) {
		return res
			.json({ message: "Something went wrong, please try again later." })
			.status(500);
	}
});

app.get("/decks", async (_, res: Response) => {
	const decks = await DeckModel.find();
	res.json(decks);
});

app.delete("/decks/:deckId", async (req: Request, res: Response) => {
	const deckId = req.params.deckId;
	const deck = await DeckModel.findByIdAndDelete(deckId);
	res.json(deck).status(200);
});

app.get("/", (_, res: Response) => {
	res.send("Hello World!");
});

app.listen(PORT, async () => {
	await db();
});
