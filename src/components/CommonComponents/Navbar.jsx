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

    </header>
  );
};

export default Navbar;
