import React, { useState } from 'react';
import logo from '../images/stephmens-logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='relative flex items-center justify-between p-4 bg-slate-200 text-blue-700 shadow-md'>
            <div className="company-logo">
                <img className="w-36" src={logo} alt="company-logo" />
            </div>
            <button className="lg:hidden text-3xl z-50" onClick={toggleMenu}>
                {isMenuOpen ? '✕' : '☰'}
            </button>
            <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} w-full lg:w-auto absolute top-full left-0 bg-slate-200 lg:bg-transparent transition-all duration-300 ease-in-out z-40`}>
                <ul className="flex flex-col space-y-2 p-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                    <li><a href="./" className="hover:text-gray-400">Home</a></li>
                    <li className="relative group">
                        <a href="./" className="hover:text-gray-400">About</a>
                        <ul className="absolute left-0 hidden mt-2 space-y-2 bg-gray-800 group-hover:block">
                            <li><a href="./" className="block px-4 py-2 hover:bg-gray-700">Our Team</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <a href="./" className="hover:text-gray-400">Services</a>
                        <ul className="absolute left-0 hidden mt-2 space-y-2 bg-gray-800 group-hover:block">
                            <li><a href="./" className="block px-4 py-2 hover:bg-gray-700">Lamination</a></li>
                            <li><a href="./" className="block px-4 py-2 hover:bg-gray-700">Large Format Printing</a></li>
                            <li><a href="./" className="block px-4 py-2 hover:bg-gray-700">Magazines & Brochures</a></li>
                            <li><a href="./" className="block px-4 py-2 hover:bg-gray-700">Graphics Designing</a></li>
                            <li><a href="./" className="block px-4 py-2 hover:bg-gray-700">DTF Printing</a></li>
                            <li><a href="./" className="block px-4 py-2 hover:bg-gray-700">Signage Printing & Installation</a></li>
                        </ul>
                    </li>
                    <li><a href="./" className="hover:text-gray-400">Our Works</a></li>
                    <li><a href="./" className="hover:text-gray-400">Gallery</a></li>
                    <li><a href="./" className="hover:text-gray-400">Contacts</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;