import React from 'react'

const Footer = () => {
    return (
        <div className="antialiased bg-white font-sans text-gray-800">
            <main className="w-full">
                <div class="flex ...">
                    <div class="w-1/3 ">
                        <footer className="relative bg-gray-600 text-white px-4 sm:px- lg:px-16 xl:px-z 2xl:px-64 py-2">
                            <ul className="mb-1 flex  w-full lg:w-1/4 lg:mx-4 lg:pr-10  space-x-4 " >
                                <li className="mt-0  ">
                                    <a href="/" target="_blank" title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" className="fill-current">
                                            <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="mt-0">
                                    <a href="/" target="_blank" title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" className="fill-current">
                                            <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </footer></div>
                    <div class="w-2/3  bg-gray-700 "></div>
                </div>
            </main>
            <main className="w-full">
                <footer className="relative bg-gray-700 text-white px-4 sm:px- lg:px-16 xl:px-z 2xl:px-64 py-4">
                    <div className="flex flex-col md:flex-row  ">
                        <div className="w-full lg:w-1/3 lg:mx-4 lg:pr-8 "   >
                            <h3 className="uppercase tracking-wider " >PARTICIPA CON NOSOTROS:</h3>
                            <ul className="mt-8">
                                <li className="mt-2">
                                    <a href="/" title className="opacity-75 hover:opacity-100">Dirección:Ambato y García Moreno,</a>
                                </li>
                                <li className="mt-2">
                                    <a href="/" title className="opacity-75 hover:opacity-100">Campus: ISTYAVIRAC</a>
                                </li>
                                <li className="mt-2">
                                    <a href="/" title className="opacity-75 hover:opacity-100">Teléfono: (593) 999 705 620</a>
                                </li>
                                <li className="mt-2">
                                    <a href="/" title className="opacity-75 hover:opacity-100">Email:probayo@yavirac.edu.ec</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-2/3 lg:mx-4 lg:pr-8  mt-8 lg:mt-0 " >
                            <h3 className="uppercase tracking-wider  " >lINKS DE INTERÉS:</h3>
                            <ul className="mt-8">
                                <li className="mt-2">
                                    <a href="http://yavirac.edu.ec/" title className="opacity-75 hover:opacity-100">ISTYAVIRAC</a>
                                </li>
                                <li className="mt-2">
                                    <a href="/" title className="opacity-75 hover:opacity-100">Conoce al equipo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div class="flex items-center justify-center relative bg-gray-800  px-2 sm:px-4 lg:px-10 xl:px- 2xl:px-20 py-4">
                    <a href="/" title className="text-white"> © 2021 Proyecto Nur Tech.</a>
                </div>
            </main>
        </div>
        )
}

export default Footer
