import { Request, Response } from "express";
import DeckModel from "../models/deck";

export const getDeckController = async (req: Request, res: Response) => {
	const { deckId } = req.params;
	const deck = await DeckModel.findById(deckId);
	res.json(deck);
};
