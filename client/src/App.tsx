import React, { useState } from 'react'
import './App.css'

function App() {
  const [ title, setTitle ] = useState("");

  const handleCreateDeck = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:5000/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title </label>
        <input value={title} type="text" id='deck-title' onChange={(e: React.ChangeEvent<HTMLInputElement>) => (setTitle(e.target.value))}  />
        <button>Add</button>
      </form>
    </div>
  )
}

export default App
