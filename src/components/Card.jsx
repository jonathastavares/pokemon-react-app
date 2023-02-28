/* eslint-disable react/prop-types */
import React from 'react';

function Card({ pokemon }) {
  return (
    <a href={`/${pokemon.name}`}>
      <div className="h-[90%] min-w-[13rem] flex flex-col items-center gap-4 border hover:scale-110 hover:mt-3 duration-500">
        <div className="w-full h-[60%] flex items-center">
          <img className="object-cover w-full h-auto p-12" src={pokemon.sprites.front_default} alt="Imagem do pokemon" />
        </div>
        <div>
          <h1 className="font-bold">{pokemon.name.toUpperCase()}</h1>
        </div>
      </div>
    </a>
  );
}

export default Card;
