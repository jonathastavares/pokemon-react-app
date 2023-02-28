import React from 'react';

function Navbar() {
  return (
    <nav className="border border-black flex justify-between h-20 items-center px-4 bg-red-500">
      <a href="/">
        <img className="h-12 w-32 object-cover" src="./logo-pokemon.png" alt="Logo pokemon" />
      </a>
      <input className="rounded-full w-80 py-1 px-4 text-center border-2 border-blue-400" placeholder="Pesquisar" />
      <div>
        <a className="text-yellow-300 font-bold hover:text-black text-lg" href="/meus_times">Meus Times</a>
      </div>
    </nav>
  );
}

export default Navbar;
