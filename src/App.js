import "./App.css";
import imgRickMorty from "./img/rick-morty.png";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const restApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <div className="App-content">
            <img src={imgRickMorty} alt="Rick & Morty" className="App-logo" />
            <button onClick={restApi} className="btn-search">
              Buscar Personajes
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
