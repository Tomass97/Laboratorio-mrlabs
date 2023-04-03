import imagenHero from '../img/Dental-Lab-header.jpg'
import imagen1 from '../img/imagen1.jpg'
import Footer from './Footer'
import Header from './Header'

function Inicio() {
  return (
    <>
    <Header/>
    <div className="h-screen bg-cover bg-center lg:bg-contain bg-no-repeat  flex-col justify-center " style={{ backgroundImage: `url(${imagenHero})` }}>
        <h2 className='px-10 py-5 text-6xl font-bold text-slate-700'>Moralí Labs</h2>
        <p className='px-8 py-1 text-3xl '>Un laboratorio especializado en prótesis fija e implantes.</p>
      </div>

    <section className='flex flex-col text-center p-4 md:flex-row'>
        <div className='seccion-principal'>
          <h3 className='text-blue-700 text-2xl my-5'>
            Laboratorio
          </h3>
          <p>
            A lo largo de sus más de quince años de trayectoria, MRLabs ha conseguido consolidar un equipo en constante evolución profesional, dotándola de una estructura organizativa dirigida a la cercanía a la clínica , personalización de los casos y la trazabilidad de cada producto.
          </p>
        </div>
        <div className='seccion-principal '>
          <h3 className='text-blue-700 text-2xl my-5'>
            CAD-CAM
          </h3>
          <p>
            Pioneros en el campo de la odontología digital, MRLabs cuenta con escaners, fresadoras e impresoras 3D, con las que se diseñan todas nuestras estructuras aportándoles una precisión imposible en un entorno analógico.
          </p>
        </div>
        <div className='seccion-principal '>
          <h3 className='text-blue-700 text-2xl my-5 md:'>
            Soluciones
          </h3>
          <p>MRLabs dispone de un equipo de ceramistas bien coexinado que garantiza un excelente resultado estético. Permitiendo además, adaptarse a las exigencias de cada caso en función de las expectativas del paciente, necesidades del clínico y características de la estructura elegida.</p>
        </div>
      </section>

      <div className=' bg-contain h-screen bg-no-repeat md:bg-cover bg-center md:mt-32' style={{ backgroundImage: `url(${imagen1})`}}></div>
      <div className='flex justify-center bg-sky-700 p-4 text-neutral-200'>TU LABORATORIO DE PRÓTESIS DENTAL EN MADRID</div>
      <Footer/>
  </>
  )
}

export default Inicio