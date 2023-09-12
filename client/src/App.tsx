import React, { useEffect, useState } from 'react'
import './App.css'

interface TDecks {
  title: string,
  _id: string,
}

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDecks[]>([]);

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const deck = await response.json();
    setDecks([...decks, deck])
    setTitle("");
  };

  const handleDeleteDeck = async (deckId: string) => {
    await fetch(`http://localhost:5000/decks/${deckId}`, {
      method: "DELETE",
    });
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5000/decks");
      const newDecks = await response.json();
      setDecks(newDecks)
    })();
    /* async function fetchDecks() => {
      await fetch("http://localhost:5000/decks");
    }
    fetchDecks(); */
  }, [])
  

  return (
    <div className='App'>
      <ul className='decks'>
        {decks.map((deck) => (
          <li key={deck._id}>
            <button onClick={() => handleDeleteDeck(deck._id)}>X</button>{deck.title}</li>
        ))}
      </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title </label>
        <input value={title} type="text" id='deck-title' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}  />
        <button>Add</button>
      </form>
    </div>
  )
}

export default App
