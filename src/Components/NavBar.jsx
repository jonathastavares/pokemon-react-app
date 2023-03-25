/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filtrarPokemons } from '../redux/pokemonSlice';

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <section className="fixed px-10 flex items-center justify-between h-[5rem] w-full bg-gold z-30">
      <span onClick={() => navigate('/')}>
        <img className="h-[6rem]" src="./log-pokemon.png" alt="" />
      </span>

      <div className="flex gap-20">
        <span onClick={() => navigate('/meu_time')} className="font-bold text-black">Meu time</span>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            const searchQuery = e.target.value;
            dispatch(filtrarPokemons(searchQuery));
          }}
        />
      </div>
    </section>

  );
}

export default NavBar;
