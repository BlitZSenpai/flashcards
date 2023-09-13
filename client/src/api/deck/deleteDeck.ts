import { APP_URL } from "../config";

export const deleteDeck = async (deckId: string) => {
	await fetch(`${APP_URL}/decks/${deckId}`, {
		method: "DELETE",
	});
};
