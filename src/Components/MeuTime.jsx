/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../redux/pokemonSlice';
import Card from './Card';

function MeuTime() {
  const meuTime = useSelector((state) => state.pokemon.myTeam);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);
  return (
    <div>
      {meuTime && meuTime.map((pokemon) => (
        <Card {...pokemon} />
      ))}
    </div>
  );
}

export default MeuTime;
