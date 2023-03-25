/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { addPokemonToTeam, removePokemonFromList } from '../redux/pokemonSlice';

function Card({
  name, types, imagem, backgroundColor,
}) {
  const [isOver, setIsOver] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const addPokemon = () => {
    const pokemon = {
      name, types, imagem, backgroundColor,
    };

    dispatch(addPokemonToTeam(pokemon));
  };

  const removePokemon = () => {
    dispatch(removePokemonFromList(name));
  };

  return (
    <span
      onMouseOver={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      onClick={() => navigate(`/${name}`)}
      className={`hover:scale-105 flex items-center min-w-[20rem] h-[25rem] flex-col m-5 border border-gray-500 rounded-2xl bg-${backgroundColor}`}
    >
      <img className=" w-full h-[14rem] p-4" src={imagem} alt={`Imagem do ${name}`} />
      <div className="flex flex-col justify-center gap-6 items-center w-full h-full rounded-2x1">

        <h1 className="font-bold text-xl">
          {name}
        </h1>
        <div>
          {types.map((tipo) => (
            <p key={tipo}>{tipo}</p>
          ))}
        </div>

      </div>
      {isOver && (
        <div
          className={`h-36 w-full justify-center items-center flex rounded-b-xl bg-gradient-to-t from-${backgroundColor} to-white font-bold`}
          onClick={(e) => {
            if (location.pathname === '/meu_time') {
              removePokemon();
            } else {
              addPokemon();
            }
            e.stopPropagation();
          }}
        >
          <h1 className="text-xs">{location.pathname === '/meu_time' ? 'REMOVER' : 'ADICIONAR'}</h1>
        </div>
      )}
    </span>
  );
}

export default Card;
