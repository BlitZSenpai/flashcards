import { APP_URL } from "../config";
import { TDecks } from "../deck/getDeck";

export const createCard = async (
	deckId: string,
	text: string
): Promise<TDecks> => {
	const response = await fetch(`${APP_URL}/decks/${deckId}/cards`, {
		method: "POST",
		body: JSON.stringify({
			text,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.json();
};
