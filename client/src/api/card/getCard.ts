import { APP_URL } from "../config";
import { TDecks } from "../deck/getDeck";

export const getDecks = async (): Promise<TDecks[]> => {
	const response = await fetch(`${APP_URL}/decks`);
	return response.json();
};
