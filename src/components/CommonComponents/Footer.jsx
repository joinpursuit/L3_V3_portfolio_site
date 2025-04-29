import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light-blue text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-center text-sm md:text-base mb-4 md:mb-0">
          © {new Date().getFullYear()} Michael Restrepoross | All Rights Reserved
        </p>

        <div className="flex space-x-6">
          <a href="/" className="hover:underline hover:text-duke-blue transition duration-300">Home</a>
          <a href="/about" className="hover:underline hover:text-duke-blue transition duration-300">About</a>
          <a href="/projects" className="hover:underline hover:text-duke-blue transition duration-300">Projects</a>
          <a href="/contact" className="hover:underline hover:text-duke-blue transition duration-300">Contact</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
