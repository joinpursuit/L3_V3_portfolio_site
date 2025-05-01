import React from 'react';

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

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light-blue py-16 px-6">
      <h1 className="text-5xl font-bold text-duke-blue text-center mb-12">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-dark-lg hover:shadow-dark-xl transition duration-300 flex flex-col items-start"
          >
          <div className="bg-light-blue rounded-lg p-4 mb-6 w-full flex justify-center">
            <img
              src={project.logo}
              alt={`${project.title} Logo`}
              className="h-32 object-contain"
            />
          </div>
            <h2 className="text-2xl font-bold text-duke-blue mb-2">{project.title}</h2>
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
    </div>
  );
};

export default Projects;
