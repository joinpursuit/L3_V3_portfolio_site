import React from 'react';
import { Linkedin } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { Mail } from 'lucide-react';

function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-light-blue to-white min-h-screen flex flex-col items-center py-16 px-6">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-duke-blue mb-4">About Me</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Hi, I'm Michael Restrepoross — a passionate Software Engineer with a love for building impactful, user-friendly applications.
          I enjoy full-stack development, creative problem solving, and learning new technologies that push my skills further every day.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white p-8 rounded-lg shadow-dark-lg flex flex-col items-center text-center max-w-md w-full">
        <div className="bg-duke-blue text-white rounded-full h-24 w-24 flex items-center justify-center text-4xl font-bold mb-6">
          MR
        </div>
        <h2 className="text-2xl font-semibold text-duke-blue mb-2">Michael Restrepoross</h2>
        <p className="text-gray-600 mb-6">Software Engineer</p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="http://www.linkedin.com/in/michael-restrepoross" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-duke-blue hover:bg-light-blue transition-colors">
            <Linkedin className="text-white w-6 h-6" />
          </a>
          <a href="https://github.com/MichaelARestrepoross" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-900 transition-colors">
            <FiGithub className="text-white w-6 h-6" />
          </a>
          <a href="mailto:MichaelRestrepoross@pursuit.org" className="p-3 rounded-full bg-green-600 hover:bg-green-700 transition-colors">
            <Mail className="text-white w-6 h-6" />
          </a>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
