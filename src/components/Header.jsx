import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoNew.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white p-4 border-b-2">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black pt-10 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-x-6 absolute
             md:relative top-28 p-5  md:top-auto left-0 md:left-auto right-0 md:right-auto
             bg-gray-800 md:bg-transparent md:flex-row flex-col 
             md:space-y-0 space-y-4 text-center w-full md:w-auto z-50 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden md:flex'
            }`}
        >
          <li>
            <Link to="/" className="md:text-primary text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="md:text-primary text-white hover:text-gray-400">
              Our Services
            </Link>
          </li>
          <li>
            <Link to="/TrainingPlacement" className="md:text-primary text-white hover:text-gray-400">
              Training & Placement
            </Link>
          </li>
          <li>
            <Link to="/about" className="md:text-primary text-white hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="md:text-primary text-white hover:text-gray-400">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
