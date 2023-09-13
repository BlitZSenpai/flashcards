import React, { useState, useEffect } from "react";
import "./App.css";
import { createCard } from "./api/card/createCard";
import { useParams } from "react-router-dom";
import { getDeck } from "./api/card/getDeck";
import { TDecks } from "./api/deck/getDecks";
import { deleteCard } from "./api/card/deleteCard";

function App() {
	const [deck, setDeck] = useState<TDecks | undefined>();
	const [text, setText] = useState("");
	const [cards, setCards] = useState<string[]>([]);
	const { deckId } = useParams();

	const handleCreateCard = async (e: React.FormEvent) => {
		e.preventDefault();
		const { cards: serverCards } = await createCard(deckId!, text);
		setCards(serverCards);
		setText("");
	};

	const handleDeleteCard = async (index: number) => {
		if (!deckId) return;
		const newDeck = await deleteCard(deckId, index);
		setCards(newDeck.cards);
	};

	useEffect(() => {
		(async () => {
			if (!deckId) return;
			const newDeck = await getDeck(deckId);
			setDeck(newDeck);
			setCards(newDeck.cards);
		})();
	}, [deckId]);

	return (
		<div className="Deck">
			<h1>{deck?.title}</h1>
			<ul className="decks">
				{cards.map((card, index) => (
					<li key={index}>
						<button onClick={() => handleDeleteCard(index)}>X</button>
						{card}
					</li>
				))}
			</ul>
			<form onSubmit={handleCreateCard}>
				<label htmlFor="card-text">Card Text </label>
				<input
					value={text}
					type="text"
					id="card-text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setText(e.target.value)
					}
				/>
				<button>Add Card</button>
			</form>
		</div>
	);
}

export default App;
