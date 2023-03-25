/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Categoria from './Components/Categoria';
import { fetchPokemons } from './redux/pokemonSlice';

function App() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const categorias = useSelector((state) => state.pokemon.categorias);

  const [isLoading, setIsLoading] = useState(true);

  const pegarTiposDoPokemon = (pokemon) => {
    const tipos = [];
    pokemon.types.forEach((type) => {
      tipos.push(type.type.name);
    });
    return tipos;
  };

  const pegarPokemonsDeUmaCategoria = (categoria) => {
    const pokemonsDaCategoria = pokemons.filter((pokemon) => pokemon.types.some((tipo) => tipo.type.name.includes(categoria)));

    return pokemonsDaCategoria;
  };

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  useEffect(() => {
    if (pokemons.length > 0 && categorias.length > 0) {
      setIsLoading(false);
    }
  }, [pokemons, categorias]);

  return (
    <div>
      {isLoading ? (
        <div className="text-black w-screen h-screen text-center text-3xl justify-center items-center flex">
          <h1>
            CARREGANDO...
          </h1>
        </div>
      ) : (
        <div className="py-28">
          {categorias && categorias.map((categoria) => (
            <Categoria key={categoria} nome={categoria} pokemonsDaCategoria={pegarPokemonsDeUmaCategoria(categoria)} pegarTiposDoPokemon={pegarTiposDoPokemon} />
          ))}
        </div>
      )}

    </div>
  );
}

export default App;
