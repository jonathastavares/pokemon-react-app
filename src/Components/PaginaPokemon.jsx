/* eslint-disable max-len */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Categoria from './Categoria';

function PaginaPokemon() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evolucoes, setEvolucoes] = useState([]);

  const pegarInformacoesDasEvolucoes = async (evolutions) => {
    const resultado = await Promise.all(evolutions.map(async (evolucao) => {
      const info = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolucao.name}`);
      return info.data;
    }));
    setEvolucoes(resultado);
  };

  const pegarEvolucoesDoPokemon = async (poke) => {
    const todasAsEvolucoes = [];
    const resultado = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${poke?.id}`);
    if (resultado.data.chain.evolves_to.length > 0) {
      todasAsEvolucoes.push(resultado.data.chain.evolves_to[0].species);
      if (resultado.data.chain.evolves_to[0].evolves_to.length > 0) {
        todasAsEvolucoes.push(resultado.data.chain.evolves_to[0].evolves_to[0].species);
        if (resultado.data.chain.evolves_to[0].evolves_to[0].evolves_to.length > 0) {
          todasAsEvolucoes.push(resultado.data.chain.evolves_to[0].evolves_to[0].evolves_to[0].species);
        }
      }
    }
    pegarInformacoesDasEvolucoes(todasAsEvolucoes);
  };

  const pegarInformacoesDoPokemon = async () => {
    const resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
    setPokemon(resultado.data);
    pegarEvolucoesDoPokemon(resultado.data);
  };

  const pegarTiposDoPokemon = (poke) => {
    const tipos = [];
    poke.types.forEach((type) => {
      tipos.push(type.type.name);
    });
    return tipos;
  };

  useEffect(() => {
    pegarInformacoesDoPokemon();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-20 gap-20">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl">{pokemon?.name.toUpperCase()}</h1>
        <img className="h-[15rem] w-auto" src={pokemon?.sprites?.other?.dream_world?.front_default || pokemon?.sprites?.front_default} alt={`Imagem do ${pokemon?.name}`} />
      </div>

      <div className="w-full justify-center items-center text-center gap-4">
        <span className="font-bold">STATS:</span>
        <div className="flex gap-10 justify-center">
          {pokemon?.stats.map((stat) => (
            <p>
              {stat.stat.name}
              :
              <span className="font-bold">
                {' '}
                {stat.base_stat}
              </span>
            </p>
          ))}
        </div>
      </div>

      {evolucoes && evolucoes.length > 0 && (
      <Categoria nome="EVOLUÇÕES" pokemonsDaCategoria={evolucoes} pegarTiposDoPokemon={pegarTiposDoPokemon} />
      )}
    </div>
  );
}

export default PaginaPokemon;
