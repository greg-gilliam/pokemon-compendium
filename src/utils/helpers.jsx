const capitalizeWord = (name) => name.charAt(0).toUpperCase() + name.slice(1);

export const pokeMunger = (pokemon) => {
  return {
    id: pokemon.id,
    abilityOne: capitalizeWord(pokemon.ability_1),
    abilityTwo: capitalizeWord(pokemon.ability_2),
    typeOne: capitalizeWord(pokemon.type_1),
    typeTwo: capitalizeWord(pokemon.type_2),
  };
};
