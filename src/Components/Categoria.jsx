/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Categoria({ nome, pokemonsDaCategoria, pegarTiposDoPokemon }) {
  const [backgroundColor, setBackgroundColor] = useState(null);
  const colors = [
    { name: 'grass', color: 'grass' },
    { name: 'poison', color: 'poison' },
    { name: 'fire', color: 'fire' },
    { name: 'flying', color: 'flying' },
  ];

  const pegarCorDeFundo = () => {
    const result = colors.find((color) => (
      color.name === nome
    ));
    if (result) {
      setBackgroundColor(result.color);
    } else {
      setBackgroundColor('white');
    }
  };

  useEffect(() => {
    pegarCorDeFundo();
  }, []);
  return (
    <div>
      <h1 className="font-bold text-2xl pl-6">{nome.toUpperCase()}</h1>
      <div className="flex overflow-x-scroll">
        {backgroundColor && pokemonsDaCategoria.map((pokemon) => (
          <Card name={pokemon.name} types={pegarTiposDoPokemon(pokemon)} imagem={pokemon.sprites?.other?.dream_world?.front_default || pokemon.sprites?.front_default} backgroundColor={backgroundColor} />
        ))}
      </div>
    </div>
  );
}

export default Categoria;
