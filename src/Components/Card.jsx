import React from "react";

const Card = () => {

    return(
        <div className="flex items-center border border-gray-500 w-[20rem] h-[25rem] flex-col m-5 rounded-2xl ">
            <img className=" border-gray-500 w-full h-[14rem] rounded-2xl p-4">
            </img>
            <div>
                <h1>
                    pikachu
                </h1>
                <p>
                    informação pokémon
                </p>

            </div>
        </div>
    )
}

export default Card 