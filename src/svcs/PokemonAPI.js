// import { pokeMunger } from "../utils/helpers";

export async function fetchPokemon() {
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex`
  );

  const pokemonData = await response.json();
  const results = pokemonData.results;
  return results;
}

export async function fetchTypes() {
  const res = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex/types`
  );

  const pokemonTypes = await res.json();

  const randomTypes = pokemonTypes
    .map((pokemonType) => ({ type: pokemonType.type }))
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
  return randomTypes;
}

export async function fetchFilteredPokemon(type) {
  const res = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}`
  );
  const pokemonData = await res.json();
  // const filteredPokemon = pokemonData.results.map((pokemon) =>
  //   pokeMunger(pokemon)
  // );
  // return filteredPokemon;
  return pokemonData.results;
}
