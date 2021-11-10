import './App.css';
import React /*,{ useState }*/ from 'react';
// import { simulateIntensiveTask, simulateIntensiveAsyncTask } from './obfuscatedFunctions';

function App() {

  const handleClick = () => {
    // DO WORK
    
  }
  const altClick = () => {
    console.log("yo");
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button> <br/>
      <button onClick={altClick}>Other click</button> <br/>
    </div>
  );
}

export default App;
