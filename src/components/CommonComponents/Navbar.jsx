import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigateLanding = () => {
    navigate('/');
    setIsOpen(false);
  };

  const handleNavigateAbout = () => {
    navigate('/about');
    setIsOpen(false);
  };

  const handleNavigateProjects = () => {
    navigate('/projects');
    setIsOpen(false);
  };

  const handleNavigateContact = () => {
    navigate('/contact');
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <header className="bg-gray-50 overflow-hidden z-10 relative border-b-4 border-gray-500 shadow-dark-lg">
      <div className="flex justify-between items-center h-full max-w-screen-xl px-6 mx-auto relative z-10">
        <div className="flex items-center">
          {/* Text logo instead of image */}
          <div 
            onClick={handleNavigateLanding}
            className="text-3xl font-bold text-light-blue cursor-pointer transform transition-transform duration-300 hover:scale-110"
          >
            MyLogo
          </div>
        </div>

        <div className="hidden nav-buttons md:flex items-center gap-4">
          <button
            onClick={handleNavigateAbout}
            className="flex items-center text-2xl text-gray-700 bg-transparent border-none cursor-pointer transform transition-transform duration-300 ease-in-out hover:text-light-blue hover:scale-150"
          >
            <span className="mr-2">About</span>
          </button>

          <button
            onClick={handleNavigateProjects}
            className="flex items-center text-2xl text-gray-700 bg-transparent border-none cursor-pointer transform transition-transform duration-300 ease-in-out hover:text-light-blue hover:scale-150"
          >
            <span className="mr-2">Projects</span>
          </button>

          <button
            onClick={handleNavigateContact}
            className="flex items-center text-2xl text-gray-700 bg-transparent border-none cursor-pointer transform transition-transform duration-300 ease-in-out hover:text-light-blue hover:scale-150"
          >
            <span className="mr-2">Contact</span>
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleDropdown} className="bg-gray-50 text-gray-800 hover:text-light-blue focus:outline-none">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-50 shadow-md">
          <button 
            onClick={handleNavigateLanding} 
            className="text-center block w-full text-left px-4 py-2 text-gray-800 bg-gray-50 hover:bg-gray-100 hover:text-light-blue"
          >
            Home
          </button>

          <button 
            onClick={handleNavigateAbout} 
            className="text-center block w-full text-left px-4 py-2 bg-gray-50 text-gray-800 hover:bg-gray-100 hover:text-light-blue"
          >
            About
          </button>

          <button 
            onClick={handleNavigateProjects} 
            className="text-center block w-full text-left px-4 py-2 bg-gray-50 text-gray-800 hover:bg-gray-100 hover:text-light-blue"
          >
            Projects
          </button>

          <button 
            onClick={handleNavigateContact} 
            className="text-center block w-full text-left px-4 py-2 bg-gray-50 text-gray-800 hover:bg-gray-100 hover:text-light-blue"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
