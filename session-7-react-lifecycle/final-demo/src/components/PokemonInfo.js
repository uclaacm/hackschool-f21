import React, { useState, useEffect } from 'react';

const pokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon/';

function PokemonInfo({ pokemon='eevee' }) {
  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchData = async (pokemonInput) => {
    try {
      const response = await fetch(pokemonEndpoint + pokemonInput);
      const responseJson = await response.json();
      setData(responseJson);
      setErrorMsg(null);
    } catch (e) {
      setData(null);
      setErrorMsg(`Sorry, we couldn't find any info about ${pokemonInput}`);
    }
  };

  useEffect(() => {
    fetchData(pokemon);
  }, [pokemon]);

  let abilitiesList;
  if (data && data.abilities) {
    abilitiesList = data.abilities.map(abilityObj => {
      return <li>{abilityObj.ability.name}</li>;
    });
  }

  return (
    <div>
      <p style={{ color: 'red' }}>{errorMsg}</p>
      {data ? <div>
        <h2>Information about {pokemon}</h2>
        <h3>{pokemon}'s abilities:</h3>
        <ul>
          {abilitiesList}
        </ul>
      </div> : null}
    </div>
  );
}

export default PokemonInfo;
