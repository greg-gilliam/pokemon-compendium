import PropTypes from "prop-types";
import PokemonDetail from "../PokemonDetail/PokemonDetail";

export default function PokemonList({ pokedex }) {
  return (
    <ul aria-label="list">
      {pokedex.map((pokemon) => {
        return (
          <li key={pokemon.id}>
            <PokemonDetail pokemon={pokemon} />
          </li>
        );
      })}
    </ul>
  );
}

PokemonDetail.PropTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url_image: PropTypes.string.isRequired,
      pokedex: PropTypes.string.isRequired,
      ability_1: PropTypes.string.isRequired,
      ability_2: PropTypes.string.isRequired,
      attack: PropTypes.number.isRequired,
      special_attack: PropTypes.number.isRequired,
      defense: PropTypes.number.isRequired,
      special_defense: PropTypes.number.isRequired,
      hp: PropTypes.number.isRequired,
      type_1: PropTypes.string.isRequired,
      type_2: PropTypes.string.isRequired,
    }).isRequired
  ),
};
