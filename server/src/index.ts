import express, { Response } from "express";
import dotenv from "dotenv";
import db from "./utils/db";
import cors from "cors";
import { createDeckController } from "./controllers/createdeckcontroller";
import { getDecksController } from "./controllers/getDeckController";
import { deleteDeckController } from "./controllers/deletedeckcontroller";
import { createCardForDeckController } from "./controllers/createCardForDeckController";

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

app.get("/", (_, res: Response) => {
	res.send("Hello World!");
});

app.listen(PORT, async () => {
	await db();
});
