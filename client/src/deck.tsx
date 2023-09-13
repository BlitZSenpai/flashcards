import React, { useState } from "react";
import "./App.css";
import { createCard } from "./api/card/createCard";
import { useParams } from "react-router-dom";

function App() {
	const [text, setText] = useState("");
	const [cards, setCards] = useState<string[]>([]);
	const { deckId } = useParams();

	const handleCreateCard = async (e: React.FormEvent) => {
		e.preventDefault();
		const { cards: serverCards } = await createCard(deckId!, text);
		setCards(serverCards);
		setText("");
	};

	// const handleDeleteDeck = async (deckId: string) => {
	// 	setDecks((decks) => decks.filter((deck) => deck._id !== deckId));
	// 	await deleteDeck(deckId);
	// };

	// useEffect(() => {
	// 	(async () => {
	// 		const newDecks = await getDecks();
	// 		setDecks(newDecks);
	// 	})();
	// 	/* async function fetchDecks() => {
	//     await fetch("http://localhost:5000/decks");
	//   }
	//   fetchDecks(); */
	// }, []);

	return (
		<div className="Deck">
			<ul className="decks">
				{cards.map((card) => (
					<li key={card}>
						{/* <button onClick={() => handleDeleteDeck(deck._id)}>X</button> */}
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
