import React from 'react';
import img from '../assets/images/imgBuscamos.jpg';

const Buscamos = () => {
    return (
        <div className="h-screen">
            <div className="bg-gray-900  text-center p-8 text-gray-200">
                <h1 className="font-semibold text-2xl">Buscamos:</h1>
                <p> computadores usados <span className=" text-yellow-400 font-semibold"> 0 </span> Partes y piezas</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 sm:grid-cols-1 pt-10">
                <div className="relative lg:ml-60 lg:p-0 sm:p-10 p-5">
                    {/* Contenedor de información */}
                    <div className="lg:absolute sm:relative w-1/2 text-left z-40 text-gray-800">
                        <div className="dark:text-gray-200">
                            <h1 className="font-bold text-4xl">¿CÓMO</h1>
                            <h1 className="font-semibold text-4xl ">PUEDO AYUDAR?</h1>
                            <hr className="border-yellow-400 border-2 w-1/5 mt-5"></hr>
                            <p className="pt-6">Buscamos computadores usados,partes y repuestos para
                            entregarlos a estudiantes del IST YAVIRAC que no
                            disponen al momento de equipos
                                </p>
                        </div>
                        {/* BOTON DE APRENDER MAS */}
                        <div className="pt-4">
                            <button className="bg-yellow-500 pt flex flex-row">
                                <div className="p-2">
                                    <span className="font-bold">LEARN MORE </span>
                                </div>
                                <div className="bg-black text-gray-50 p-2">
                                    <a href="/" className="flex-auto">
                                        <svg className="h-8 w-8 text-secondary hover:text-accent transition duration-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd">

                                            </path>
                                        </svg>
                                        </a>
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* Fondo Gris */}
                    <div className="inset-y-0 right-0 bg-gray-100 float-right mt-10 py-10 pl-20 hidden md:block dark:text-gray-800">
                        <div className="inset-y-0 right-0 bg-yellow-50 float-right ml-28 -mr-6">
                            <p className="p-4">
                                <span className="float-left mr-2">
                                    <svg className="h-8 w-8 text-secondary hover:text-accent transition duration-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path>
                                        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                                    </svg>
                                </span>
                                    Dona un computador
                                </p>
                            <p className="p-4">
                                <span className="float-left mr-2">
                                    <svg className="h-8 w-8 text-secondary hover:text-accent transition duration-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                    Dona partes y piezas
                                </p>
                            <p className="p-4">
                                <span className="float-left mr-2">
                                    <svg className="h-8 w-8 text-secondary hover:text-accent transition duration-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                    Promueve el proyecto en tus redes
                                </p >
                            <p className="p-4">
                                <span className="float-left mr-2">
                                    <svg className="h-8 w-8 text-secondary hover:text-accent transition duration-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                                    </svg>
                                </span>
                                    Hazte voluntario
                                </p>
                        </div>
                    </div>
                    {/* Contenedor de las opciones */}
                </div>
                {/* Imagen */}
                <div className="relative md:block hidden"> {/*CORREGIR ESTA LINEA PARA QUE SE VEA LA IMAGEN QUITAR /HIDDEN/ Y AJUSTAR LA IMAGEN*/}
                    <div className="lg:absolute sm:relative">
                        <img src={img} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buscamos
