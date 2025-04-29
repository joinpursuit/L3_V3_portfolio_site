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

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-duke-blue mb-6">Hi, I'm Michael Restrepoross</h1>
        <h2 className="text-2xl md:text-3xl text-byz-blue mb-8">Aspiring Software Engineer | Full-Stack Developer</h2>
        <div className="flex gap-6">
          <button 
            onClick={handleContactClick}
            className="bg-duke-blue hover:bg-light-blue text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Contact Me
          </button>
          <button 
            onClick={handleProjectsClick}
            className="bg-white hover:bg-light-blue text-duke-blue font-bold py-3 px-6 rounded-lg border border-duke-blue transition duration-300"
          >
            View Projects
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="w-full max-w-5xl bg-white shadow-dark-lg rounded-xl p-10 my-10 mx-4 text-center">
        <h2 className="text-4xl font-bold text-duke-blue mb-6">About Me</h2>
        <p className="text-gray-700 text-lg">
          I'm a passionate software engineer who loves turning ideas into real-world applications. 
          My focus is on building clean, user-centered designs, scalable backends, and seamless full-stack experiences.
          Always learning. Always creating. Always improving.
        </p>
      </section>

      {/* Projects Preview */}
      <section className="w-full max-w-6xl px-6 py-16">
        <h2 className="text-4xl font-bold text-duke-blue text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Project 1 */}
          <div className="bg-white p-8 rounded-lg shadow-dark-lg hover:shadow-dark-xl transition duration-300 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-duke-blue mb-4">Portfolio Website</h3>
            <p className="text-gray-600 mb-6">
              A modern, responsive portfolio site built with React and TailwindCSS to showcase my skills and creativity.
            </p>
            <button
              onClick={handleProjectsClick}
              className="bg-duke-blue hover:bg-light-blue text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              View Details
            </button>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-8 rounded-lg shadow-dark-lg hover:shadow-dark-xl transition duration-300 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-duke-blue mb-4">Weather App</h3>
            <p className="text-gray-600 mb-6">
              A full-stack weather application that displays live weather updates using external APIs, optimized for mobile and desktop.
            </p>
            <button
              onClick={handleProjectsClick}
              className="bg-duke-blue hover:bg-light-blue text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              View Details
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default LandingPage;
