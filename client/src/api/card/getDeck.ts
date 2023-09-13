import { APP_URL } from "../config";
import { TDecks } from "../deck/getDecks";

export const getDeck = async (deckId: string): Promise<TDecks> => {
	const response = await fetch(`${APP_URL}/decks/${deckId}`);
	return response.json();
};
