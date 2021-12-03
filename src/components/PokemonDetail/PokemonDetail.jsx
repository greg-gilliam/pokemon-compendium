import PropTypes from "prop-types";

export default function PokemonDetail({ pokemon }) {
  const secondType = pokemon.type_2 !== "NA";
  const secondAbility = pokemon.ability_2 !== "NA";
  const specialAttack = pokemon.special_attack !== "NA";
  const specialDefense = pokemon.special_defense !== "NA";

  return (
    <figure>
      <img src={pokemon.url_image} alt={`${pokemon.pokemon}`} />
      <div className="detail">
        <a href={pokemon.pokedex}>{pokemon.pokemon}</a>
        <p>
          Abilities:
          {pokemon.ability_1}
          {secondAbility && `/${pokemon.ability_2}`}
        </p>
        <p>
          Attack:
          {pokemon.attack}
          {specialAttack}
        </p>
        <p>
          Defense:
          {pokemon.defense}
          {specialDefense}
        </p>
        <p>
          HP:
          {pokemon.hp}
        </p>
        <p>
          Types:
          {pokemon.type_1}
          {secondType && `/${pokemon.type_2}`}
        </p>
      </div>
    </figure>
  );
}

PokemonDetail.propTypes = {
  pokemon: PropTypes.shape({
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
  }).isRequired,
};
