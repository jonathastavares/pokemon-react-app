/* eslint-disable react/prop-types */
import React from 'react';

function Card({
  name, types, imagem, backgroundColor,
}) {
  return (
    <a
      href={`/${name}`}
      className={`hover:scale-105 flex items-center min-w-[20rem] h-[25rem] flex-col m-5 border border-gray-500 rounded-2xl bg-${backgroundColor}`}
    >
      <img className=" w-full h-[14rem] p-4" src={imagem} alt={`Imagem do ${name}`} />
      <div className="flex flex-col justify-center gap-6 items-center w-full h-full rounded-2x1">

        <h1 className="font-bold text-xl">
          {name}
        </h1>
        <div>
          {types.map((tipo) => (
            <p>{tipo}</p>
          ))}
        </div>

      </div>
    </a>
  );
}

export default Card;
