import { Request, Response } from "express";
import DeckModel from "../models/deck";

export const deleteDeckController = async (req: Request, res: Response) => {
	const deckId = req.params.deckId;
	const deck = await DeckModel.findByIdAndDelete(deckId);
	res.json(deck).status(200);
};
