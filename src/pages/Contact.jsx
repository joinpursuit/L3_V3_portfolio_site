import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-light-blue to-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-5xl font-bold text-duke-blue mb-10">Get in Touch</h1>

      <div className="bg-white shadow-dark-lg rounded-xl p-10 w-full max-w-xl text-center">
        <p className="text-lg text-gray-700 mb-6">
          Have a question, opportunity, or just want to connect? Feel free to reach out:
        </p>

        <ul className="space-y-4 text-lg">
          <li>
            <span className="font-semibold">Email:</span>{' '}
            <a
              href="mailto:michaelrestrepoross@pursuit.org"
              className="contact-link float-hover"
            >
              michaelrestrepoross@pursuit.org
            </a>
          </li>

          <li>
            <span className="font-semibold">LinkedIn:</span>{' '}
            <a
              href="https://www.linkedin.com/in/michael-restrepoross"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link float-hover"
            >
              linkedin.com/in/michael-restrepoross
            </a>
          </li>

          <li>
            <span className="font-semibold">GitHub:</span>{' '}
            <a
              href="https://github.com/MichaelARestrepoross"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link float-hover"
            >
              github.com/MichaelARestrepoross
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
