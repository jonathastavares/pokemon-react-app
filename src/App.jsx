import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './Components/Card';

function App() {
  const [data, setData] = useState([]);
  // const params = useparams();
  const getPokemon = async (dados) => {
    const resultado = await Promise.all(dados.map(async (url) => {
      const results = await axios.get(url);
      return results.data;
    }));
    setData(resultado);
    console.log(resultado);
  };

  const GetName = async () => {
    const resultado = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
    const dados = resultado.data.results;
    const listaNomes = [];
    dados.forEach((obj) => {
      listaNomes.push(obj.url);
    });
    getPokemon(listaNomes);
  };
  useEffect(() => {
    GetName();
  }, []);

  // const getPokemon = async () => {
  // const resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon_name}`);

  return (
    <div>
      {data.map((pokemon) => (
        <Card name={nome} />
      ))}

    </div>
  );
}

export default App;
