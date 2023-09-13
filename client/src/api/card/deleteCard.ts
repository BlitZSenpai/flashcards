import { APP_URL } from "../config";
import { TDecks } from "../deck/getDecks";

export const deleteCard = async (
	deckId: string,
	index: number
): Promise<TDecks> => {
	const response = await fetch(`${APP_URL}/decks/${deckId}/cards/${index}`, {
		method: "DELETE",
	});
	return response.json();
};
