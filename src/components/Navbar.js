import React, { useState } from 'react';
import logo from '../images/stephmens-logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='relative flex items-center justify-between p-4 bg-white text-blue-700 shadow-md'>
            <div className="company-logo">
                <img className="w-36" src={logo} alt="company-logo" />
            </div>
            <button className="lg:hidden text-3xl z-50" onClick={toggleMenu}>
                {isMenuOpen ? '✕' : '☰'}
            </button>
            <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} w-full lg:w-auto absolute lg:relative top-full lg:top-auto right-0 lg:right-auto bg-white lg:bg-transparent transition-all duration-300 ease-in-out z-40`}>
                <ul className="flex flex-col space-y-2 p-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                    <li><a href="./" className="hover:text-yellow-500 text-blue-700 p-2 rounded-md">Home</a></li>
                    <li className="relative group">
                        <a href="./" className="text-blue-700 p-2 rounded-md hover:text-yellow-500">About</a>
                    </li>
                    <li className="relative group">
                        <a href="./" className="text-blue-700 p-2 rounded-md hover:text-yellow-500">Services</a>
                        <ul className="absolute left-0 hidden mt-2 bg-yellow-500 group-hover:block lg:group-hover:flex lg:flex-row lg:space-y-0 lg:mt-0 lg:bg-yellow-500 w-96">
                            <div className="flex flex-col lg:flex-row w-full">
                                <div className="w-full lg:w-1/2 p-4">
                                    <h3 className="text-lg font-semibold mb-2">Printing Services</h3>
                                    <ul className="space-y-2">
                                        <li><a href="./" className="block px-6 py-2 hover:bg-blue-700 hover:text-white lg:hover:bg-yellow-500 lg:hover:text-blue-700">Lamination</a></li>
                                        <li><a href="./" className="block px-6 py-2 hover:bg-blue-700 hover:text-white lg:hover:bg-yellow-500 lg:hover:text-blue-700">Large Format Printing</a></li>
                                        <li><a href="./" className="block px-6 py-2 hover:bg-blue-700 hover:text-white lg:hover:bg-yellow-500 lg:hover:text-blue-700">Magazines & Brochures</a></li>
                                        <li><a href="./" className="block px-6 py-2 hover:bg-blue-700 hover:text-white lg:hover:bg-yellow-500 lg:hover:text-blue-700">DTF Printing</a></li>
                                        <li><a href="./" className="block px-6 py-2 hover:bg-blue-700 hover:text-white lg:hover:bg-yellow-500 lg:hover:text-blue-700">Signage Printing & Installation</a></li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/2 p-4">
                                    <h3 className="text-lg font-semibold mb-2">IT Support Services</h3>
                                    <ul className="space-y-2">
                                        <li><a href="./" className="block px-6 py-2 hover:bg-blue-700 hover:text-white lg:hover:bg-yellow-500 lg:hover:text-blue-700">Network Setup</a></li>
                                        <li><a href="./" className="block px-6 py-2 hover:bg-blue-700 hover:text-white lg:hover:bg-yellow-500 lg:hover:text-blue-700">Hardware Support</a></li>
                                        <li><a href="./" className="block px-6 py-2 hover:bg-blue-700 hover:text-white lg:hover:bg-yellow-500 lg:hover:text-blue-700">Software Installation</a></li>
                                        <li><a href="./" className="block px-6 py-2 hover:bg-blue-700 hover:text-white lg:hover:bg-yellow-500 lg:hover:text-blue-700">IT Consulting</a></li>
                                        <li><a href="./" className="block px-6 py-2 hover:bg-blue-700 hover:text-white lg:hover:bg-yellow-500 lg:hover:text-blue-700">Cybersecurity</a></li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li><a href="./" className="text-blue-700 hover:text-yellow-500 p-2 rounded-md">Our Works</a></li>
                    <li><a href="./" className="text-blue-700 hover:text-yellow-500 p-2 rounded-md">Gallery</a></li>
                    <li><a href="./" className="text-blue-700 hover:text-yellow-500 p-2 rounded-md">Contacts</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;