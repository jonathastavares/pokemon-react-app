/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Categoria from './components/Categoria';

function Home() {
  const [pokemonsBaseInformation, setPokemonBaseInformation] = useState([]);
  const [pokemonsFullInformation, setPokemonsFullInformation] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const getPokemonsBaseInformation = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0');
    setPokemonBaseInformation(response.data.results);
  };

  const getPokemonsFullInformation = async () => {
    setPokemonsFullInformation(await Promise.all(pokemonsBaseInformation.map(async (pokemon) => {
      const response = await axios.get(pokemon.url);
      return response.data;
    })));
  };

  const getCategories = () => {
    const todasCategorias = [];
    pokemonsFullInformation.map((pokemon) => pokemon.types.map((categoria) => todasCategorias.push(categoria.type.name)));
    setCategorias(Array.from(new Set(todasCategorias)));
  };

  const getPokemonsByCategory = (categoryName) => pokemonsFullInformation.filter((pokemon) => pokemon.types.map((type) => type.type.name).includes(categoryName));

  useEffect(() => {
    getPokemonsBaseInformation();
  }, []);

  useEffect(() => {
    getPokemonsFullInformation();
  }, [pokemonsBaseInformation]);

  useEffect(() => {
    getCategories();
  }, [pokemonsFullInformation]);

  return (
    <div className="py-6 w-full flex flex-col gap-4">
      {categorias && categorias.map((categoria) => (
        <Categoria titulo={categoria} pokemons={getPokemonsByCategory(categoria)} />
      ))}
    </div>
  );
}

export default Home;
