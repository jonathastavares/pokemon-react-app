import React from 'react';

function NavBar() {
  return (

    <section className="px-10 flex items-center justify-between h-[5rem] bg-yellow-350">
      <a href="/">
        <img className="h-[6rem]" src="./log-pokemon.png" alt="" />
      </a>

      <div className="flex gap-20">
        <a href="/">Meu time</a>
        <input type="text" placeholder="Search" />
      </div>
    </section>

  );
}

export default NavBar;
