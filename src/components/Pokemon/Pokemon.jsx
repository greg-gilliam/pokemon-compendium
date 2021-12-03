export const fetchPokemon = async () => {
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex`
  );

  const pokemonData = await response.json();
  const results = pokemonData.results;
  // console.log('pokemon', results);
  return results;
};
