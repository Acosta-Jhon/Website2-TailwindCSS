import React from 'react'
import pedido from '../assets/images/pedido.jpg';
import abstracto from '../assets/images/degradado.jpg';
import regalo from '../assets/images/regalo.png';
import mano from '../assets/images/help-icon-4.png';
import grupo from '../assets/images/help-icon-1.png';
import persona from '../assets/images/help-icon-2.png';

const Buscamos = () => {
    return (
        <div className="h-full">

            <div className="flex w-full h-32 md:h-60 font-serif justify-center items-center" style={{ backgroundImage: `url(${abstracto})` }}>
                <p className="md:text-3xl text-xl text-center text-gray-200">
                    <span className="font-bold">Buscamos</span> <br />
                    <span className="font-medium">Computadores usados<span className="text-yellow-500 font-bold"> o </span> partes y piezas </span>
                </p>
            </div>

            <div className="flex md:items-center md:justify-center md:px-20 md:py-10 py-16 px-4">
                <div className="md:flex">
                    <div className="md:w-2/3 w-ful">
                        <p className="md:text-5xl text-3xl font-serif pb-3"><span className="font-bold">¿CÓMO</span> <br /> PUEDO AYUDAR?</p>
                        <hr className="w-32 border-2 border-yellow-500" />
                        <div className="md:py-5 font-normal text-sm md:w-96 w-auto">
                            <p>Buscamos computadores usados, partes y repuestos para entregarlos a estudiantes del IST YAVIRAC que no disponen al momento de equipos propios</p>
                            <div className="flex">
                                <div className="py-4">
                                    <button className="py-3 bg-gradient-to-r from-gray-600 to-yellow-400 w-52 uppercase hover:text-gray-200 hover:text-md font-medium">
                                        Quiero participar
                                    </button>
                                </div>
                                <div className="py-4">
                                    <button className="p-2 bg-yellow-400 hover:shadow-lg">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28" height="28">
                                            <path className="animate-pulse" d="M501.306,226.7L326.791,52.183c-15.398-15.399-41.063-15.399-56.461,0L234.4,88.113 
                                            c-6.844,6.844-11.976,17.109-11.976,27.375s3.422,20.531,11.976,27.375l47.906,47.906H41.063C18.821,190.769,0,209.59,0,231.832
                                            v49.617c0,20.531,18.82,37.641,41.063,37.641h239.532l-46.196,46.196c-6.844,6.844-11.976,17.109-11.976,29.086
                                            c0,10.266,3.422,20.531,11.976,29.086l35.93,35.93c6.844,6.844,17.109,11.977,27.375,11.977c10.266,0,20.531-3.422,27.375-11.977
                                            l174.516-174.517c8.555-8.555,11.977-18.821,11.977-29.086C513.283,245.52,509.861,235.255,501.306,226.7z M477.353,260.918
                                            L302.837,435.435c-3.422,3.422-5.132,3.422-8.555,0l-35.93-35.93c-1.711-1.711-1.711-3.422-1.711-5.132
                                            c0-1.711,0-3.422,1.711-5.132l75.281-75.281c5.132-5.132,6.844-11.977,3.422-18.821c-3.422-6.844-8.555-10.266-15.398-10.266
                                            H41.063c-3.422,0-6.844-1.711-6.844-3.422v-49.617c0-3.422,3.422-6.844,6.844-6.844h284.017c6.844,0,13.688-3.422,15.398-10.266
                                            c1.711-6.844,1.711-13.688-3.422-18.821l-76.992-76.992c-1.711-1.711-1.711-3.422-1.711-3.422c0-1.711,0-1.711,1.711-3.422
                                            l35.93-35.929c1.711-1.711,5.132-3.422,8.555,0l174.515,174.515c1.711,1.711,1.711,3.422,1.711,5.132
                                            C479.064,257.497,479.064,259.208,477.353,260.918z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="font-serif">
                        <div className="bg-yellow-100 p-10 font-normal">
                            <p className="pt-4 flex">
                                <img src={regalo} alt="Not Found" className="w-6 h-6" />
                                &nbsp;Dona un computador
                            </p>
                            <p className="pt-5 flex">
                                <img src={mano} alt="Not Found" className="w-6 h-6" />
                                &nbsp;Dona partes y piezas
                            </p>
                            <p className="pt-5 flex">
                                <img src={grupo} alt="Not Found" className="w-6 h-6" />
                                &nbsp;Promueve el proyecto en redes
                            </p>
                            <p className="pt-5 flex">
                                <img src={persona} alt="Not Found" className="" />
                                &nbsp;Hazte voluntario
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:w-1/3 hidden">
                    <img src={pedido} alt="Not Found" className="w-80" />
                </div>
            </div>
            <div className="flex md:hidden items-center justify-center">
                <img src={pedido} alt="Not Found" className="w-80" />
            </div>
            <div className="flex h-60 items-center justify-center font-serif p-2" style={{ backgroundImage: `url(${abstracto})` }}>
                <p className="md:text-3xl text-xl text-center text-gray-200">La <span className="font-bold"> educación </span>es uno de los factores que más influye en el avance y progreso de <br /> personas y sociedades</p>

            </div>
            <div className="flex items-center justify-center text-center p-2 h-40 bg-white dark:bg-gray-800 font-serif">
                <p className="text-yellow-400 md:px-5 text-5xl ">10</p>
                <p className="text-3xl"> Estamos muy orgullosos de nuestros Amables <span className="font-bold text-yellow-400">Donantes.</span></p>
            </div>
        </div>
    )
}

export default Buscamos
