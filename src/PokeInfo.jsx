/* eslint-disable max-len */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Categoria from './components/Categoria';

function PokeInfo() {
  const params = useParams();
  const [pokemon, setPokemon] = useState({});
  const [evolucoes, setEvolucoes] = useState([]);

  const getPokemonInfo = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon_name}`);
    setPokemon(response.data);
  };

  const getEvolutionsInfo = async (chain) => {
    if (chain.evolves_to.length > 0) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${chain.evolves_to[0]}`);
      setEvolucoes([...evolucoes, response.data]);
    }
  };

  const getPokemonEvolutions = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
    if (response?.data?.chain?.species?.name === pokemon.name) getEvolutionsInfo(response?.data?.chain);
  };

  useEffect(() => {
    getPokemonInfo();
  }, []);

  useEffect(() => {
    if (pokemon?.id) getPokemonEvolutions(pokemon?.id);
  }, [pokemon]);

  return (
    <div className="flex flex-col justify-center text-center">
      <img className="h-[20rem] w-auto self-center" src={pokemon?.sprites?.front_default} alt="Imagem do pokemon" />
      <h1 className="font-bold">{pokemon?.name?.toUpperCase()}</h1>
      <div className="flex justify-center gap-20 mt-4">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Habilidades:</h2>
          <div>
            {pokemon && pokemon?.moves?.splice(0, 5).map((move) => (
              <p>{move.move.name}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Tipo:</h2>
          <div>
            {pokemon && pokemon?.types?.map((type) => (
              <p>{type.type.name}</p>
            ))}
          </div>
        </div>
      </div>
      <Categoria titulo="Evoluções" pokemons={[]} />
    </div>
  );
}

export default PokeInfo;
