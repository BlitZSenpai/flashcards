import { Request, Response } from "express";
import DeckModel from "../models/deck";

export const createDeckController = async (req: Request, res: Response) => {
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
};
