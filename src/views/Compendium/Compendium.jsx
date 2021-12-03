import { useState, useEffect, React } from "react";
import Controls from "../../components/Controls/Controls";
import {
  fetchPokemon,
  fetchTypes,
  fetchFilteredPokemon,
} from "../../svcs/PokemonAPI.js";
import PokemonList from "../../components/PokemonList/PokemonList";

function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const pokedex = await fetchPokemon();
      setPokemon(pokedex);
      setLoading(false);
    }
    getPokemon();
  }, []);

  useEffect(() => {
    async function getTypes() {
      const pokemonTypes = await fetchTypes();
      setTypes(pokemonTypes);
    }
    getTypes();
  }, []);

  useEffect(() => {
    async function getFilteredPokemon() {
      // if (!selectedType) return;
      // setLoading(true);

      if (selectedType !== "all") {
        const filteredPokemon = await fetchFilteredPokemon(selectedType);
        setPokemon(filteredPokemon);
      } else {
        const pokemonList = await fetchPokemon();
        setPokemon(pokemonList);
      }
      setLoading(false);
      setSelectedType(selectedType);
    }
    getFilteredPokemon();
  }, [selectedType]);

  if (loading) {
    <h1>Loading ...</h1>;
  }
  return (
    <>
      <h1>Pokemon Compendium</h1>
      <Controls
        types={types}
        filterChange={setSelectedType}
        selectedType={selectedType}
      />
      <PokemonList pokedex={pokemon} />
    </>
  );
}

export default Compendium;
