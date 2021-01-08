import React from 'react'

const Footer = () => {
    return (
        <div className="antialiased bg-white font-sans text-gray-800">
            <main className="w-full">
                <footer className="relative bg-gray-800 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-24">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
                            <ul className="mb-4 flex">
                                <li className="mt-0">
                                    <a href="/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" className="fill-current">
                                            <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="mt-0">
                                    <a href="/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" className="fill-current">
                                            <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="mt-0">
                                    <a href="/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" className="fill-current">
                                            <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>

                                <li className="mt-0">
                                    <a href="/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" className="fill-current">
                                            <path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="mt-0">
                                    <a href="/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current">
                                            <path d="M25 5H5a2.497 2.497 0 00-2.487 2.5l-.013 15C2.5 23.875 3.625 25 5 25h20c1.375 0 2.5-1.125 2.5-2.5v-15C27.5 6.125 26.375 5 25 5zm-.5 5.313l-8.838 5.524c-.4.25-.925.25-1.325 0L5.5 10.314a1.063 1.063 0 111.125-1.8L15 13.75l8.375-5.238a1.062 1.062 0 111.125 1.8z"></path>
                                        </svg>
                                    </a>
                                </li>

                            </ul>
                            <h3 className="uppercase tracking-wider font-semibold" > CONTACTO  </h3>
                            <ul className="mt-4">
                                <li className="mt-2">
                                    <a href="/" className="opacity-75 hover:opacity-100"> Celular:098595515</a>

                                </li>
                                <li className="mt-2">
                                    <a href="/" className="opacity-75 hover:opacity-100">correo:andys@gmail.com</a>

                                </li>
                            </ul>
                            <div className="mx-auto pt-9 flex text-gray-50 ">
                                <input className=" bg-gray-900 hover:bg-gray-500  px-2 py-1 rounded accent-gradient text-on-accent" id="search" type="text" placeholder="Email Address"></input>
                                <button className="bg-grey-lightest border-grey border-l shadow hover:bg-grey-lightest bg-yellow-400 text-black  p-0 hover:bg-gray-400 focus:outline-none " >
                                    <span className="w-auto flex justify-end items-center text-grey p-2 hover:text-grey-darkest">
                                        <i className="material-icons text-xs">|||</i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8  mt-8 lg:mt-0 " >
                            <h3 className="uppercase tracking-wider font-semibold" >Información</h3>
                            <ul className="mt-4">
                                <li className="mt-2">
                                    <a href="/" className="opacity-75 hover:opacity-100"> Constancia</a>

                                </li>
                                <li className="mt-2">
                                    <a href="/" className="opacity-75 hover:opacity-100">Éxito de la vida</a>

                                </li>
                                <li className="mt-2">
                                    <a href="/" className="opacity-75 hover:opacity-100"> La Responsabilidad</a>

                                </li>
                                <li className="mt-2">
                                    <a href="/" className="opacity-75 hover:opacity-100">La Esperanza</a>

                                </li>
                                <li className="mt-2">
                                    <a href="/" className="opacity-75 hover:opacity-100">La bondad</a>

                                </li>
                                <li className="mt-2">
                                    <a href="/" className="opacity-75 hover:opacity-100">Reglamentos</a>

                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
                            <h3 className="uppercase tracking-wider font-semibold" >Interesante</h3>
                            <ul className="mt-4">

                                <li className="mt-2">
                                    <a href="/" className="opacity-75 hover:opacity-100"> No salgas de casa cuida </a>

                                </li>
                                <li className="mt-2">
                                    <a href="/" className="opacity-75 hover:opacity-100"> y protege a los seres que más</a>

                                </li>
                                <li className="mt-2">
                                    <a href="/" className="opacity-75 hover:opacity-100"> quieres por esta pandemia.</a>
                                </li>
                                <li className="mt-2">
                                    <a className="font-medium text-accent hover:text-accent hover:underline text-yellow-300" target="_blank" rel="noopener noreferrer" href="/"> http://andyisraell.blog </a>
                                </li>

                                <li className="mt-3">
                                    <a href="/" className="flex items-center opacity-75 hover:opacity-100">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" className="fill-current">
                                                <path d="M25 5H5a2.497 2.497 0 00-2.487 2.5l-.013 15C2.5 23.875 3.625 25 5 25h20c1.375 0 2.5-1.125 2.5-2.5v-15C27.5 6.125 26.375 5 25 5zm-.5 5.313l-8.838 5.524c-.4.25-.925.25-1.325 0L5.5 10.314a1.063 1.063 0 111.125-1.8L15 13.75l8.375-5.238a1.062 1.062 0 111.125 1.8z">
                                                </path>
                                            </svg>
                                        </span>
                                        &nbsp;
                                        <span className="ml-3"> Correo electronico</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
                            <h3 className="uppercase tracking-wider font-semibold" >Comunicación</h3>
                            <ul className="mt-4">
                                <li className="mt-1">
                                    <a href="/" className="opacity-75 hover:opacity-100"> Acccese a nuestra</a>

                                </li>
                                <li className="mt-1">
                                    <a href="/" className="opacity-75 hover:opacity-100"> página secundaria </a>

                                </li>
                                <li className="mt-1">
                                    <a href="/" className="opacity-75 hover:opacity-100"> para información</a>

                                </li>
                            </ul>

                            <div className="mx-auto pt-10 flex text-gray-50 ">
                                <a className="border-2 border-yellow-300 bg-gray-900 hover:bg-gray-500  px-10 py-2 rounded accent-gradient text-on-accent" target="_blank" rel="noopener noreferrer" href="/">
                                    <span>
                                        Registrate
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="flex items-center justify-center relative bg-gray-900  px-2 sm:px-4 lg:px-10 xl:px- 2xl:px-20 py-4">
                    <a href="/" className="text-white"> drag.camilo.@gmail.com</a>
                </div>
            </main>
        </div>
    )
}

export default Footer
