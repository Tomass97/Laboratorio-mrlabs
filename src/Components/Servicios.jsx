import React from 'react'
import Header from './Header'
import Footer from './Footer'

import removible from '../img/removible.jpg'
import implante from '../img/implante.jpg'
import fija from '../img/fija.jpg'

function Servicios() {
  return (
    <>
      <Header />

      <section className='p-11 flex my-10 '>
        <div className='flex flex-col md:flex-row' >
          <div className=' md:w-1/2 md:border-r-4 border-blue-300 md:text-2xl text-blue-600'>MRLabs pone a su servicio nuestra experiencia y gran conocimiento para cualquier problema dental. <br /> <br /> Contamos con los últimos avances a nivel protésico con una variedad de materiales que ofrecen una gran abanico de opciones.</div>
          <div className='md:w-1/2 ml-4 md:text-2xl'>Entre los diferentes tipos de prótesis dentales se encuentran: <br /> - Prótesis removible: <br />- Prótesis fija sobre implante <br /> - Prótesis fija sobre dentadura </div>
        </div>
      </section>

      <section className="flex justify-center gap-10 my-10">
        <div
          className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src={removible}
              alt="Prótesis removible" />
          </a>
          <div className="p-6">
            <h5
              className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Prótesis removible
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Es la que el propio paciente se puede quitar para poder limpiarlas y se apoya en las encías y mucosa.
            </p>
          </div>
        </div>

        <div
          className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src={implante}
              alt="Implante" />
          </a>
          <div className="p-6">
            <h5
              className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Prótesis fija sobre implante
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Va colocada sobre los implantes de uno o varios dientes. Son necesarias varias pruebas para que el especialista se asegure una prótesis exacta, en forma y color, a medida del paciente.
            </p>
          </div>
        </div>
        <div
          className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src={fija}
              alt="Fija" />
          </a>
          <div className="p-6">
            <h5
              className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Prótesis fija sobre dentadura
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Para esta prótesis se necesita rebajar los dientes para una correcta colocación de la misma y tenga la mejor funcionalidad y estética.
            </p>
           
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Servicios