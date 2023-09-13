import React, { useEffect, useState } from "react";
import "./App.css";
import { CreateDeck } from "./api/deck/createDeck";
import { deleteDeck } from "./api/deck/deleteDeck";
import { TDecks, getDecks } from "./api/deck/getDeck";
import { Link } from "react-router-dom";

function App() {
	const [title, setTitle] = useState("");
	const [decks, setDecks] = useState<TDecks[]>([]);

	const handleCreateDeck = async (e: React.FormEvent) => {
		e.preventDefault();
		if (title.length === 0) return;
		const deck = await CreateDeck(title);
		setDecks((decks) => [...decks, deck]);
		setTitle("");
	};

	const handleDeleteDeck = async (deckId: string) => {
		setDecks((decks) => decks.filter((deck) => deck._id !== deckId));
		await deleteDeck(deckId);
	};

	useEffect(() => {
		(async () => {
			const newDecks = await getDecks();
			setDecks(newDecks);
		})();
		/* async function fetchDecks() => {
      await fetch("http://localhost:5000/decks");
    }
    fetchDecks(); */
	}, []);

	return (
		<div className="App">
			<ul className="decks">
				{decks.map((deck) => (
					<li key={deck._id}>
						<button onClick={() => handleDeleteDeck(deck._id)}>X</button>
						{deck.title}
						<Link to={`decks/${deck._id}`}>{deck.title}</Link>
					</li>
				))}
			</ul>
			<form onSubmit={handleCreateDeck}>
				<label htmlFor="deck-title">Deck Title </label>
				<input
					value={title}
					type="text"
					id="deck-title"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setTitle(e.target.value)
					}
				/>
				<button>Add Deck</button>
			</form>
		</div>
	);
}

export default App;
