import React from 'react'
import DarkMode from './Dark/DarkMode';
import '../assets/css/navbar.css';

import logo from '../assets/images/logo_nur_tech_bg_new.png';
import bar from '../assets/images/top-bar-icon.png';

const Header = () => {
    const [colorTheme, setTheme] = DarkMode();
    return (
        <nav id="header" className="w-full z-30 top-0">
            <div className="flex bg-gray-700 h-10 text-sm">
                <div className="flex order-1 md:order-2 md:w-1/2 justify-center items-center text-gray-400 px-2">
                    <p className="flex items-center no-underline hover:no-underline font-bold">
                        <img src={bar} className="w-5 h-5 mr-2" alt="Not Found" />
                        Equipamos el futuro hoy.
                    </p>
                </div>
                <div className="md:flex order-1 md:order-2 hidden md:w-1/2 justify-center items-center text-gray-400 font-bold">
                    <p className="px-2">Teléfono:(593) 999 705 620 </p>
                    <p className="px-2">Email: <span className="italic">probayo@yavirac.edu.ec</span></p>
                </div>
            </div>

            <div className="flex bg-gray-50 h-20 justify-center items-center dark:bg-gray-200">
                <div className="md:flex order-1 md:order-2 hidden md:w-1/2 justify-center items-center">
                    <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
                        <img src={logo} className=" mr-2" alt="Not Found" />
                    </a>
                </div>
                <div className="flex order-1 md:order-2 md:w-1/2 justify-center items-center">
                    <button className="flex font-serif bg-gradient-to-r from-gray-600 to-yellow-400 text-gray-200 p-2 md:p-3 text-sm md:text-sm shadow-lg ">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 mr-2 animate-ping" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                            </path></svg>
                        DONA UN COMPUTADOR
                    </button>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-wrap items-center justify-between md:justify-center mt-0 px-5 py-2 md:py-0 bg-yellow-400 border-t-2 border-yellow-200">
                <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                    <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <div className="flex order-1 md:order-2 w-1/2 justify-center items-center md:hidden">
                    <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
                        <img src={logo} className="h-auto w-auto" alt="Not Found" />

                    </a>
                </div>

                <input className="hidden" type="checkbox" id="menu-toggle" />
                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                    <nav>
                        <div className="md:flex items-center justify-center text-gray-700 pt-4 md:pt-0 hover:text-gray-900 text-sm">
                            <div><a className="inline-block no-underline hover:text-black hover:bg-yellow-500 py-2 md:py-4 px-4 uppercase w-full" href="/">Inicio</a></div>
                            <div><a className="inline-block no-underline hover:text-black hover:bg-yellow-500 py-2 md:py-4 px-4 uppercase w-full" href="/">El proyecto</a></div>
                            <div><a className="inline-block no-underline hover:text-black hover:bg-yellow-500 py-2 md:py-4 px-4 uppercase w-full" href="/">¿Cómo ayudar?</a></div>
                            <div><a className="inline-block no-underline hover:text-black hover:bg-yellow-500 py-2 md:py-4 px-4 uppercase w-full" href="/">Voluntarios</a></div>
                            <div><a className="inline-block no-underline hover:text-black hover:bg-yellow-500 py-2 md:py-4 px-4 uppercase w-full" href="/">Donantes</a></div>
                            <div><a className="inline-block no-underline hover:text-black hover:bg-yellow-500 py-2 md:py-4 px-4 uppercase w-full" href="/">Contacto</a></div>
                        </div>
                    </nav>
                </div>

                <div className="order-2 md:order-3 flex items-center px-2" id="nav-content">
                    <span className="rounded-full shadow-lg"
                        onClick={() => setTheme(colorTheme)}>
                        {colorTheme === "light" ? (
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 486.883 486.883">
                                <path d="M243.451,0C109.226,0,0.001,109.191,0.001,243.417c0,134.244,109.226,243.466,243.45,243.466
                                s243.431-109.222,243.431-243.466C486.882,109.191,377.676,0,243.451,0z M243.451,437.958c-0.237,0-0.479-0.033-0.716-0.033V48.96
                                c0.237,0,0.479-0.035,0.716-0.035c107.247,0,194.506,87.246,194.506,194.492C437.957,350.682,350.698,437.958,243.451,437.958z"/>
                            </svg>
                        ) : (
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 578.405 578.405">
                                    <path d="M289.203,0C129.736,0,0,129.736,0,289.203C0,448.67,129.736,578.405,289.203,578.405
                                    c159.467,0,289.202-129.735,289.202-289.202C578.405,129.736,448.67,0,289.203,0z M28.56,289.202
                                    C28.56,145.48,145.481,28.56,289.203,28.56l0,0v521.286l0,0C145.485,549.846,28.56,432.925,28.56,289.202z"/>
                                </svg>
                            )}
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Header;
