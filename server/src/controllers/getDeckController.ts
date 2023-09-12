import { Request, Response } from "express";
import DeckModel from "../models/deck";

export const getDecksController = async (_: Request, res: Response) => {
	const decks = await DeckModel.find();
	res.json(decks);
};
