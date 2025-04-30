import React from 'react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'Drippy',
    tech: 'JavaScript, React.js, Express.js, Node.js, CSS, Cloudinary, Firebase, OpenAI API',
    description: `Drippy is a virtual wardrobe app that uses AI to suggest outfits based on weather, environment, and personal preferences.
      I led a 3-person team, built the backend, handled Firebase login, and used Cloudinary for image uploads.`,
    live: 'https://dripy.netlify.app/',
    github: 'https://github.com/MichaelARestrepoross/Drippy-Client',
    logo: 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1746048673/drippylogo_imjrbm.png',
  },
  {
    title: 'SafePlate',
    tech: 'JavaScript, React.js, CSS, HTML, Node.js',
    description: `SafePlate is a meal planning app for people with dietary restrictions. 
      I helped build the backend, filtering system, and user profile support. 
      Worked in a team of 6 with strong focus on accessibility and usability.`,
    live: 'https://safeplate1.netlify.app/',
    github: 'https://github.com/MichaelARestrepoross/safeplate-project',
    logo: 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1746048697/SafePlateLogo_fys4yi.png',
  }
];

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

      {/* Projects Section */}
      <section className="w-full max-w-6xl px-6 py-16">
        <h2 className="text-4xl font-bold text-duke-blue text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-dark-lg hover:shadow-dark-xl transition duration-300 flex flex-col items-start"
            >
              <div className="bg-light-blue rounded-lg p-4 mb-6 w-full flex justify-center">
                <img
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  className="h-20 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-duke-blue mb-2">{project.title}</h3>
              <p className="text-sm italic text-gray-500 mb-4">Tech: {project.tech}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-blue font-semibold hover:underline"
                >
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-blue font-semibold hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
