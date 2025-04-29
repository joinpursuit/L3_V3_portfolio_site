import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-light-blue to-white flex flex-col items-center">



    </div>
  );
};

export default LandingPage;
