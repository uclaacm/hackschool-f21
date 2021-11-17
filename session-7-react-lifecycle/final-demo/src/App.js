import { useState } from 'react';
import PokemonInfo from './components/PokemonInfo';

function App() {
  const [userInput, setUserInput] = useState('');
  const [pokemon, setPokemon] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.length === 0) {
      return;
    }
    setPokemon(userInput);
    setUserInput('');
  };

  return (
    <div>
      <h2>Enter pokemon's name here:</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type='text'
          value={userInput}
          onChange={e => setUserInput(e.target.value)} 
        />
        <input type='submit' />
      </form>
      <PokemonInfo pokemon={pokemon} />
    </div>
  );
}

export default App;
