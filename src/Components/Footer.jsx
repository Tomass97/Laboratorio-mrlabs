import React from 'react'

function Footer() {
  return (
    <>
    <footer className='bg-sky-500 text-xl text-gray-100 flex justify-center flex-col md:flex-row p-5' >
    <div className='mr-20 mb-5'>
      <h4 className='mb-1'>MRLabs Laboratorio de Prótesis Dental</h4>
      <p className='mb-1'>Calle hernandez nr 9 Local</p>
      <p>Coslada, Comunidad de Madrid</p>
    </div>
    <div className='mb-5 mr-20'>
      <p className='mb-1'>Tfno:600600600</p>
      <p className='mb-1'>Email:Correo@correo.com</p>
    </div>
    <div>
      <p> &copy; 2023 Todos los derechos reservados MRLabs</p>
    </div>
  </footer>
  </>
  )
}

export default Footer