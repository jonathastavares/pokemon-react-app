/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Categoria from './Components/Categoria';

function App() {
  const [data, setData] = useState([]);
  const [categorias, setCategorias] = useState([]);
  // const params = useparams();

  const pegarCategorias = (resultado) => {
    const todasAsCategorias = [];
    resultado.forEach((pokemon) => {
      pokemon.types.forEach((tipo) => {
        todasAsCategorias.push(tipo.type.name);
      });
    });
    const categoriasFiltradas = [...new Set(todasAsCategorias)];
    setCategorias(categoriasFiltradas);
  };

  const getPokemon = async (dados) => {
    const resultado = await Promise.all(dados.map(async (url) => {
      const results = await axios.get(url);
      return results.data;
    }));
    setData(resultado);
    pegarCategorias(resultado);
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

  const pegarTiposDoPokemon = (pokemon) => {
    const tipos = [];
    pokemon.types.forEach((type) => {
      tipos.push(type.type.name);
    });
    return tipos;
  };

  const pegarPokemonsDeUmaCategoria = (categoria) => {
    const pokemonsDaCategoria = data.filter((pokemon) => pokemon.types.some((tipo) => tipo.type.name.includes(categoria)));

    return pokemonsDaCategoria;
  };

  useEffect(() => {
    GetName();
  }, []);

  return (
    <div className="py-8">
      {categorias && categorias.map((categoria) => (
        <Categoria key={categoria} nome={categoria} pokemonsDaCategoria={pegarPokemonsDeUmaCategoria(categoria)} pegarTiposDoPokemon={pegarTiposDoPokemon} />
      ))}

    </div>
  );
}

export default App;
