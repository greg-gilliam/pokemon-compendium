import { useState, useEffect, React } from "react";
import fetchPokemon from "../../components/Pokemon/Pokemon";
import PokemonList from "../../components/PokemonList/PokemonList";

function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const pokedex = await fetchPokemon();
      setPokemon(pokedex);
      setLoading(false);
    }
    getPokemon();
  }, []);

  if (loading) {
    <h1>Loading ...</h1>;
  }
  return (
    <>
      <h1>Pokemon Compendium</h1>

      <PokemonList pokedex={pokemon} />
    </>
  );
}

export default Compendium;
