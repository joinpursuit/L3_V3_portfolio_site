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

          {/* Drippy */}
          <div className="bg-white p-8 rounded-lg shadow-dark-lg hover:shadow-dark-xl transition duration-300 flex flex-col items-start">
            <div className="bg-light-blue rounded-lg p-4 mb-6 w-full flex justify-center">
              <img src="/src/assets/drippylogo.png" alt="Drippy Logo" className="h-20 object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-duke-blue mb-2">Drippy</h3>
            <p className="text-sm italic text-gray-500 mb-4">Tech: JavaScript, React.js, Express.js, Node.js, CSS, Cloudinary, Firebase, OpenAI API</p>
            <p className="text-gray-700 mb-4">
              Drippy is a virtual wardrobe app that uses AI to suggest outfits based on weather, environment, and personal preferences. 
              I led a 3-person dev team, built the backend, implemented Firebase authentication, and integrated Cloudinary for clothing image uploads.
            </p>
            <div className="flex space-x-4 mt-auto">
              <a href="https://dripy.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-light-blue font-semibold hover:underline">Live Site</a>
              <a href="https://github.com/MichaelARestrepoross/Drippy-Client" target="_blank" rel="noopener noreferrer" className="text-light-blue font-semibold hover:underline">GitHub</a>
            </div>
          </div>

          {/* SafePlate */}
          <div className="bg-white p-8 rounded-lg shadow-dark-lg hover:shadow-dark-xl transition duration-300 flex flex-col items-start">
            <div className="bg-light-blue rounded-lg p-4 mb-6 w-full flex justify-center">
              <img src="/src/assets/SafePlateLogo.png" alt="SafePlate Logo" className="h-20 object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-duke-blue mb-2">SafePlate</h3>
            <p className="text-sm italic text-gray-500 mb-4">Tech: JavaScript, React.js, CSS, HTML, Node.js</p>
            <p className="text-gray-700 mb-4">
              SafePlate is a meal planning app for people with dietary restrictions. 
              I contributed to backend API integration and led a team of 6. We implemented advanced filtering, user profiles, and a responsive UI using React.
            </p>
            <div className="flex space-x-4 mt-auto">
              <a href="https://safeplate1.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-light-blue font-semibold hover:underline">Live Site</a>
              <a href="https://github.com/MichaelARestrepoross/safeplate-project" target="_blank" rel="noopener noreferrer" className="text-light-blue font-semibold hover:underline">GitHub</a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default LandingPage;
