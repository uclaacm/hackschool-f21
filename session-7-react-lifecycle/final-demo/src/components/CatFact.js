import React, { useEffect, useState } from 'react';

const catFactEndpoint = 'https://catfact.ninja/fact';

function CatFact() {
  const [fact, setFact] = useState('Loading...');

  const getFact = async () => {
    const response = await fetch(catFactEndpoint);
    const json = await response.json();
    setFact(json.fact);
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <div>
      <button onClick={getFact}>Get new cat fact</button>
      <div>{fact}</div>
    </div>
  );
}

export default CatFact;
