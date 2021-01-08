import React from 'react'

const Nosotros = () => {
    return (
        <div className=" md:flex md:px-32 py-16 px-2">
            <div className="md:container md:mx-auto px-4 md:w-4/6">
                <div className="">
                    <div>
                        <h1 className="text-3xl font-bold">
                            ¿QUÉ
                        </h1>
                        <h2 className="text-3xl">
                            ES NUR TECH?
                        </h2>
                    </div>
                    <div className="bg-yellow-400 w-20 h-1 rounded-lg">
                    </div>
                    <div className="font-sans text-gray-600">
                        <p>
                            A causa del COVID 19, con el objetivo de precautelar la salud de estudiantes y docentes, las
                            autoridadesdeterminaron el
                            cambio de modalidad educativa de presencial a virtual. En consecuencia, muchas familias se
                            enfrentaron a esta nueva
                            situación no siempre contando con computadores en sus hogares.

                            <span className="font-bold">
                                NUR TECH
                            </span> 
                            es un proyecto que tiene como objetivo entregar computadores
                            refaccionados a estudiantes de Institutos
                            Tecnológicos Superiores de Quito y sus familias que al momento no disponen de equipos propios.

                            El proyecto es gestionado por un grupo de voluntarios que son docentes del IST Benito Juárez y
                            activistas locales.
                            Nuestro porceso tiene tres pasos: recolectar, acondicionar y entregar. En el primer paso nos ponemos
                            en contacto con las
                            personas que desean donar equípos, y se define una cita para recolectar el equipo a domicilio; como
                            segundo paso todos locales
                            equipos son acondicionados: se borran sus discos duros, se revisan los componentes, se cambian
                            partes y piezas si hace
                            falta. Finalmente se hace la entrega del computador refaccionado en el domicilio del estudiante.
                      </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="h-12 w-12 " alt="Donacion"
                            src="https://media.istockphoto.com/vectors/the-hand-holds-the-gift-icon-on-a-white-background-vector-id1063654774?b=1&k=6&m=1063654774&s=170667a&w=0&h=Rnoz0Iu3UtmHW2wxFL5XMpeV_tE-qz2muoUCXO4UtdI="></img>
                        <h3 className="text-xl">
                            Recolectar
                        </h3>
                        <p className="font-sans text-gray-600">
                            Se acuerda una cita con el donante
                            para retirar el equipo y/o partes.
                        </p>
                    </div>
                    <div>
                        <img className="h-12 w-12 " alt="Reparacion"
                            src="https://image.flaticon.com/icons/png/512/126/126428.png"></img>
                        <h3 className="text-xl">
                            Acondicionar
                        </h3>
                        <p className="font-sans text-gray-600">
                            A cada equipo se le hace: limpieza,
                            mantenimiento, remanufactura e
                            instalación de software base.
                        </p>
                    </div>
                    <div>
                        <img className="h-12 w-12 " alt="Entrega"
                            src="https://thumbs.dreamstime.com/b/l%C3%ADnea-fina-icono-del-vector-domicilio-de-la-entrega-movimiento-ejemplo-esquema-muestra-linear-s%C3%ADmbolo-116624138.jpg"></img>
                        <h3 className="text-xl">
                            Entregar
                      </h3>
                        <p className="font-sans text-gray-600">
                            Llevamos los equipos directo a la causa
                            de los estudiantes.
                       </p>
                        <button className="font-bold italic text-yellow-400 mt-3 hover:text-yellow-500">
                            Dona ahora
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-60 md:w-1/5 md:pt-28 ">
                <p className="font-bold text-white py-4 px-4 text-center bg-yellow-400">
                    "El mejoramiento del
                    mundo puede ser
                    logrado por medio de
                    hechos puros y
                    hermosos, por medio de
                    una conducta loable y
                    correcta.
                    <br/>
                    <span className="text-black">Bahá'u'lláh</span>"
                </p>
            </div>
        </div>)
}

export default Nosotros;
