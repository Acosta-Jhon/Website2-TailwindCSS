import React from 'react';

import icon1 from '../assets/images/icon_give.png'
import icon2 from '../assets/images/icon_fix.png'
import icon3 from '../assets/images/icon_delivery.png'

const Nosotros = () => {
    return (
        <div className=" md:flex pt-10 pb-20 px-2 dark:text-gray-200 items-center justify-center md:px-20">
            <div className="px-4 md:w-4/6">
                <div className="">
                    <div>
                        <h1 className="text-5xl font-bold">
                            ¿QUÉ
                        </h1>
                        <h2 className="text-4xl pb-3">
                            ES NUR TECH?
                        </h2>
                    </div>
                    <div className="bg-yellow-400 w-32 h-1">
                    </div>
                    <div className="pt-3 font-normal">
                        <p className="pb-3">
                            A causa del COVID 19, con el objetivo de precautelar la salud de estudiantes y docentes, las autoridades determinaron el cambio de modalidad educativa de presencial a virtual. En consecuencia,
                            muchas familias se enfrentaron a esta nueva situación no siempre contando con computadores en sus hogares.
                        </p>
                        <p className="pb-3">
                            NUR TECH es un proyecto que tiene como objetivo entregar computadores refaccionados a estudiantes de Institutos Tecnológicos Superiores de Quito y sus familias que al momento
                            no disponen de equipos propios.
                        </p>
                        <p className="pb-3">
                            El proyecto es gestionado por un grupo de voluntarios que son docentes del IST Benito Juárez y activistas locales.
                        </p>
                        <p className="pb-3">
                            Nuestro proceso tiene tres pasos: recolectar,acondicionar y entregar. En el primer paso nos ponemos en contacto con las personas que desean donar equipos, y se define una cita para recolectar el equipo a domicilio; como segundo paso todos los equipos son acondicionados: se borran sus discos duros, se revisan los componentes, se cambian partes y piezas si hace falta. Finalmente se hace la entrega del computador refaccionado en el domicilio del estudiante.
                        </p>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="pr-10 py-3">
                        <img className="h-12 w-12 " alt="Donacion"
                            src={icon1}/>
                        <h3 className="text-xl">
                            Recolectar
                        </h3>
                        <p className="font-normal">
                            Se acuerda una cita con el donante
                            para retirar el equipo y/o partes.
                        </p>
                    </div>
                    <div className="pr-10 py-3">
                        <img className="h-12 w-12 " alt="Reparacion"
                            src={icon2}/>
                        <h3 className="text-xl">
                            Acondicionar
                        </h3>
                        <p className="font-normal">
                            A cada equipo se le hace: limpieza,
                            mantenimiento, remanufactura e
                            instalación de software base.
                        </p>
                    </div>
                    <div className="py-3">
                        <img className="h-12 w-12 " alt="Entrega"
                            src={icon3}/>
                        <h3 className="text-xl">
                            Entregar
                      </h3>
                        <p className="font-normal">
                            Llevamos los equipos directo a la causa
                            de los estudiantes.
                       </p>
                        <button className="font-bold italic text-yellow-500 mt-3 hover:text-yellow-600 transition delay-150 duration-300 ease-in-out">
                            Dona ahora
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex h-full md:w-2/6 md:px-10">
                <div className=" border-yellow-200 border-t-8 border-r-8">
                    <p className="font-serif font-bold text-white text-3xl py-4 px-4 text-center bg-yellow-400">
                        "El mejoramiento del
                        mundo puede ser
                        logrado por medio de
                        hechos puros y
                        hermosos, por medio de
                        una conducta loable y
                        correcta.
                        <br />
                        <span className="text-black">Bahá'u'lláh</span>"
                </p>
                </div>
            </div>
        </div>)
}

export default Nosotros;
