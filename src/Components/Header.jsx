import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header className=' p-10 h-30 border-b-4 border-blue-300' >
        <div className='flex flex-col items-center md:flex-row justify-between'>
          <div className='text-4xl text-blue-400'>
            MR<span className='text-blue-700'>Labs</span>
          </div>
          <nav className='navegacion flex gap-8 mt-10  flex-col md:mt-0 md:flex-row'>
            <Link to='/'>Inicio</Link>
            <Link to='/trabajos'>Trabajos</Link>
            <Link to='/servicios'>Servicios</Link>
            <Link to='/contacto'>Contacto</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header