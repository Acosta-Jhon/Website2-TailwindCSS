import React from 'react'
import DarkMode from './Dark/DarkMode';
import '../assets/css/navbar.css'

const Header = () => {
    const [colorTheme, setTheme] = DarkMode();
    return (
        <nav id="header" className="w-full z-30 top-0">
            <div className="flex bg-gray-700 h-8">
                <div className="flex order-1 md:order-2 md:w-1/2 justify-center items-center text-gray-300 px-2">
                    <p className="flex items-center no-underline hover:no-underline text-xs italic">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                            </path>
                        </svg>
                        Equipamos el futuro hoy.
                    </p>
                </div>
                <div className="md:flex order-1 md:order-2 hidden md:w-1/2 justify-center items-center text-gray-300 text-xs">
                    <p className="px-2 italic">Teléfono:(593) 999 705 620 </p>
                    <p className="px-2 italic">Email: probayo@yavirac.edu.ec </p>
                </div>
            </div>

            <div className="flex bg-gray-100 h-16 justify-center items-center">
                <div className="md:flex order-1 md:order-2 hidden md:w-1/2 justify-center items-center">
                    <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        NUR TECH
                    </a>
                </div>
                <div className="flex order-1 md:order-2 md:w-1/2 justify-center items-center">
                    <button className="flex font-serif bg-gradient-to-r from-gray-600 to-yellow-500 text-gray-200 p-2 md:p-3 text-xs md:text-sm shadow-lg">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 mr-2 animate-ping" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                            </path></svg>
                        DONA UN COMPUTADOR
                    </button>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-wrap items-center justify-between md:justify-center mt-0 px-6 py-2 bg-yellow-400">
                <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                    <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <div className="flex order-1 md:order-2 w-1/2 justify-center items-center md:hidden">
                    <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                            </path>
                        </svg>
                        NUR TECH
                    </a>
                </div>

                <input className="hidden" type="checkbox" id="menu-toggle" />
                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-center text-gray-700 pt-4 md:pt-0 hover:text-gray-800">
                            <li><a className="inline-block no-underline hover:text-black hover:bg-yellow-500 py-2 px-4 rounded-lg uppercase" href="/">Home</a></li>
                            <li><a className="inline-block no-underline hover:text-black hover:bg-yellow-500 py-2 px-4 rounded-lg uppercase" href="/">El proyecto</a></li>
                            <li><a className="inline-block no-underline hover:text-black hover:bg-yellow-500 py-2 px-4 rounded-lg uppercase" href="/">¿Cómo ayudar?</a></li>
                            <li><a className="inline-block no-underline hover:text-black hover:bg-yellow-500 py-2 px-4 rounded-lg uppercase" href="/">Voluntarios</a></li>
                            <li><a className="inline-block no-underline hover:text-black hover:bg-yellow-500 py-2 px-4 rounded-lg uppercase" href="/">Donantes</a></li>
                            <li><a className="inline-block no-underline hover:text-black hover:bg-yellow-500 py-2 px-4 rounded-lg uppercase" href="/">Contacto</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="order-2 md:order-3 flex items-center px-2" id="nav-content">
                    <span className="rounded-full shadow-lg bg-gradient-to-r from-gray-600 to-yellow-500"
                        onClick={() => setTheme(colorTheme)}>
                        {colorTheme === "light" ? (
                            <svg className="w-6 h-6  text-gray-700" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6  text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z">
                                </path>
                            </svg>
                            )}
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Header;
