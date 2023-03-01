import React from 'react';

function NavBar() {
  return (
    <section className="fixed px-10 flex items-center justify-between h-[5rem] w-full bg-gold z-30">
      <a href="/">
        <img className="h-[6rem]" src="./log-pokemon.png" alt="" />
      </a>

      <div className="flex gap-20">
        <a href="/meus_times" className="font-bold text-white">Meu times</a>
        <input type="text" placeholder="Search" />
      </div>
    </section>

  );
}

export default NavBar;
