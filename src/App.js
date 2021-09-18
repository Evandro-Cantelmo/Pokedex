import "./App.css";
import Card from "./componentes/card";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [pokemon, setPokemon] = useState([]);
  async function getAllPokes() {
    let res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0"
    );
    let resJson = await res.json();
    setPokemon(resJson.results);
    console.log(resJson);
  }
  console.log(pokemon);
  useEffect(() => {
    getAllPokes();
  }, []);

  return (
    <div className="pokedex">
      {pokemon.map((poke, index) => (
        <Card name={poke.name} key={index} imageIndex={index + 1}></Card>
      ))}
    </div>
  );
}

export default App;
