import { APP_URL } from "../config";

export interface TDecks {
	title: string;
	_id: string;
	cards: string[];
}

export const getDecks = async (): Promise<TDecks[]> => {
	const response = await fetch(`${APP_URL}/decks`);
	return response.json();
};
