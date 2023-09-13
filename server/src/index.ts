import express, { Response } from "express";
import dotenv from "dotenv";
import db from "./utils/db";
import cors from "cors";
import { createDeckController } from "./controllers/createdeckcontroller";
import { getDeckController } from "./controllers/getDeckController";
import { getDecksController } from "./controllers/getDecksController";
import { deleteDeckController } from "./controllers/deletedeckcontroller";
import { createCardForDeckController } from "./controllers/createCardForDeckController";
import { deleteCardController } from "./controllers/deleteCardController";

const PORT = 5000;

const app = express();

app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json()); //allows support for json POST request

dotenv.config();

app.post("/decks", createDeckController);
app.get("/decks", getDecksController);
app.delete("/decks/:deckId", deleteDeckController);
app.post("/decks/:deckId/cards", createCardForDeckController);
app.get("/decks/:deckId", getDeckController);
app.delete("/decks/:deckId/cards/:index", deleteCardController);

app.get("/", (_, res: Response) => {
	res.send("Hello World!");
});

app.listen(PORT, async () => {
	await db();
});
