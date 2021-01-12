import React from 'react'
import pedido from '../assets/imagenes/pedido.jpg';

const Buscamos = () => {
    return (
        <div className="h-auto pb-10">
            <div className="bg-black  text-center text-gray-50 p-8">
                <h1 className="font-semibold text-2xl">Buscamos:</h1>
                <p> computadores usados <span className=" text-yellow-400 font-semibold"> 0 </span> Partes y piezas</p>
            </div>
                <div className="grid lg:grid-cols-2 gap-6 sm:grid-cols-1 pt-10 ">
                    <div className="relative lg:ml-60 lg:p-0 sm:p-10">
                        {/* Contenedor de información */}
                        <div class="lg:absolute sm:relative w-1/2 text-left z-40">
                            <div>
                                <h1 class="font-bold text-4xl ">¿CÓMO</h1>
                                <h1 class="font-semibold text-4xl ">PUEDO AYUDAR?</h1>
                                <hr class="border-yellow-400 border-2 w-1/5 mt-5"></hr>
                                <p class="pt-6">Buscamos computadores usados,partes y repuestos para
                                    entregarlos a estudiantes del IST YAVIRAC que no
                                    disponen al momento de equipos
                                </p>
                            </div>
                            {/* BOTON DE APRENDER MAS */}
                            <div class="pt-4">
                            <button class="bg-yellow-500 pt flex flex-row">
                                <div class="p-2">
                                <span class="font-bold">LEARN MORE </span>
                                </div>
                                <div class="bg-black text-gray-50 p-2">
                                    <a href="/" class="flex-auto">
                                    <svg class="h-8 w-8 text-secondary hover:text-accent transition duration-100"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                    </svg></a>
                                </div>
                            </button>
                            </div>
                        </div>
                        {/* Fondo Gris */}
                        <div class="inset-y-0 right-0 bg-gray-100 float-right mt-10 py-10 pl-20">
                            <div class="inset-y-0 right-0 bg-yellow-50 float-right ml-10 -mr-6 w-3/4">
                                <p class="p-4">
                                    <span class="float-left mr-2">
                                        <svg class="h-8 w-8 text-secondary hover:text-accent transition duration-100"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" />
                                        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                                        </svg>
                                    </span>
                                    Dona un computador
                                </p>
                                <p class="p-4">
                                    <span class="float-left mr-2">
                                        <svg class="h-8 w-8 text-secondary hover:text-accent transition duration-100"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    Dona partes y piezas
                                </p>
                                <p class="p-4">
                                    <span class="float-left mr-2">
                                        <svg class="h-8 w-8 text-secondary hover:text-accent transition duration-100"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    Promueve el proyecto en tus redes
                                </p >
                                <p class="p-4">
                                    <span class="float-left mr-2">
                                        <svg class="h-8 w-8 text-secondary hover:text-accent transition duration-100"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                        </svg>
                                    </span>
                                    Hazte voluntario
                                </p>

                            </div>
                        </div>
                        {/* Contenedor de las opciones */}
                    </div>
                    {/* Imagen */}
                    <div class="relative">
                        <div class="img-responsive lg:w-1/2 sm:w-100" >
                            <img src={pedido}  alt="img"></img>
                        </div>
                    </div>
                </div>          
            </div>
    )
}

export default Buscamos
