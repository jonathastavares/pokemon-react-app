import React from 'react'


const NavBar = () => {
  return (
    
    <section className='flex justify-between h-[5rem] bg-yellow-100' >
      <a href='/'>
        <img  className= 'h-[6rem]' src='./log-pokemon.png' alt=''/>
      </a>
      
      <div>
        <a  href='#'>Meu time</a>
        <input type="text" placeholder='Search' />
      </div>      
    </section>      
  
  )
}

export default NavBar
