import { APP_URL } from "./config";

export const CreateDeck = async (title: string) => {
	const response = await fetch(`${APP_URL}/decks`, {
		method: "POST",
		body: JSON.stringify({
			title,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.json();
};
