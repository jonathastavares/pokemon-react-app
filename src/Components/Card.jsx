import React from 'react';

function Card({ name }) {
  return (
    <div className="flex items-center border border-gray-500 w-[20rem] h-[25rem] flex-col m-5 rounded-2xl ">
      <img className="border border-gray-500 w-full h-[14rem] p-4" alt="" />
      <div className="rounded-2x1 border border-gray-500">

        <h1>
          {name}
        </h1>
        <p>
          informação pokémon
        </p>

      </div>
    </div>
  );
}

export default Card;
