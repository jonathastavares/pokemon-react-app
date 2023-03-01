/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Categoria({ nome, pokemonsDaCategoria, pegarTiposDoPokemon }) {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const colors = [
    { name: 'grass', color: '#2be017' },
    { name: 'poison', color: '#e017d6' },
    { name: 'fire', color: '#e02e17' },
    { name: 'flying', color: '#afe8e5' },
  ];

  const pegarCorDeFundo = () => {
    const result = colors.find((color) => (
      color.name === nome
    ));
    if (result) {
      setBackgroundColor(result.color);
    } else {
      setBackgroundColor('#FFFFFF');
    }
  };

  useEffect(() => {
    pegarCorDeFundo();
  }, []);
  return (
    <div>
      <h1 className="font-bold text-2xl pl-6">{nome.toUpperCase()}</h1>
      <div className="flex overflow-x-scroll">
        {pokemonsDaCategoria.map((pokemon) => (
          <Card name={pokemon.name} types={pegarTiposDoPokemon(pokemon)} imagem={pokemon.sprites?.other?.dream_world?.front_default} backgroundColor={backgroundColor} />
        ))}
      </div>
    </div>
  );
}

export default Categoria;
