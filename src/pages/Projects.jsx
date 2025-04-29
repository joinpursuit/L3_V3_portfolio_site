import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Project One',
      description: 'This is a sample description for Project One.',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'This is a sample description for Project Two.',
      link: '#',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light-blue flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-duke-blue mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-dark-lg hover:shadow-dark-xl transition duration-300">
            <h2 className="text-2xl font-bold text-byz-blue mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href={project.link} className="text-light-blue hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
