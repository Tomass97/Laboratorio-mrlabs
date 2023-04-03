import React from 'react'
import Header from './Header'
import Footer from './Footer'

import Galeria1 from '../img/galeria1.jpg'
import Galeria2 from '../img/galeria2.jpg'
import Galeria3 from '../img/galeria3.jpg'
import Galeria4 from '../img/galeria4.jpg'
import Galeria5 from '../img/galeria5.jpg'
import Galeria6 from '../img/galeria6.jpg'
import Galeria7 from '../img/galeria7.jpg'
import Galeria8 from '../img/galeria8.jpg'
import Galeria9 from '../img/galeria9.jpg'


function Trabajos() {
  return (
    <>
    <Header/>
    <section className='p-11'>
      <div className='flex flex-col md:flex-row'>
      <div className='w-1/3 md:border-r-4 border-blue-300 md:text-2xl text-blue-600'>Fabricamos todo tipo de prótesis dentales</div>
      <div className='w-2/3 ml-4 md:text-2xl'>MRLabs pone a su servicio nuestra experiencia y gran conocimiento para cualquier problema dental.</div>
      </div>
    </section>

    <section className="overflow-hidden text-neutral-700 mb-5">
  <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Galeria1} />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Galeria3} />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Galeria2} />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Galeria4} />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Galeria5} />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Galeria6} />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Galeria7} />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Galeria8} />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={Galeria9} />
        </div>
      </div>
      
    </div>
  </div>
</section>
    <Footer/>
    </>
  )
}

export default Trabajos