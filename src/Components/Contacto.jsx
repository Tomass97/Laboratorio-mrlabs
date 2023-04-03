import React from 'react'
import Header from './Header'
import Footer from './Footer'
import imagenContacto from '../img/imagen-contacto.jpg'

import { useState } from "react";
import Validator from 'validatorjs';

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = { nombre, email, mensaje };
    const rules = {
      nombre: "required|string",
      email: "required|email",
      mensaje: "required|string"
    };
    const validation = new Validator(data, rules);
    
    if (validation.passes()) {
      console.log("Se ha enviado el formulario con los siguientes datos:");
      console.log("Nombre:", nombre);
      console.log("Email:", email);
      console.log("Mensaje:", mensaje);
      setEnviado(true);
    } else {
      console.log("El formulario contiene errores:", validation.errors.all());
    }
  };
  return (
    <>
    <Header/>

    <section className='flex justify-center md:flex-row p-10'>
    <div className='bg-cover md:block hidden  bg-center mr-3 w-1/3 h-auto bg-no-repeat' style={{backgroundImage: `url(${imagenContacto})`}}></div>
    <form className='w-2/3' onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mensaje" className="block text-gray-700 font-bold mb-2">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5"
        >
          Enviar
        </button>
      </div>
    </form>
    </section>
    <Footer/>
    </>
  );
};

export default Formulario;