/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card';

function Categoria({ titulo, pokemons }) {
  return (
    <section className="h-[20rem] w-full py-4 flex flex-col gap-4">
      <h1 className="text-2xl pl-6 text-red-700">{titulo.toUpperCase()}</h1>
      <div className="flex h-full w-full gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {pokemons && pokemons.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
}

export default Categoria;
