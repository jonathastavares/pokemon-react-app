import React from 'react';
import Card from './Components/Card';

function App() {
  const GetName =()=> {
    const resultado="https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    console.log(resultado);
  
  }
  GetName()
  return (
    <div>
      <Card/>

    </div>
  );
}

export default App;
