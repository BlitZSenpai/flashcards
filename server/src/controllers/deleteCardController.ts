import { Request, Response } from "express";
import DeckModel from "../models/deck";

export const deleteCardController = async (req: Request, res: Response) => {
	const deckId = req.params.deckId;
	const index = req.params.index;
	const deck = await DeckModel.findById(deckId);
	if (!deck) {
		return res.status(400).send("no deck of this id exists");
	}
	deck.cards.splice(parseInt(index), 1);
	await deck.save();
	res.json(deck);
};
