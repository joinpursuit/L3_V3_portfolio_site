import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light-blue flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold text-duke-blue mb-8">Contact Me</h1>
      <p className="text-gray-700 text-lg mb-8 text-center max-w-xl">
        I'd love to hear from you! Whether you have a question, project idea, or just want to connect, feel free to reach out.
      </p>

      <div className="bg-white rounded-lg shadow-dark-lg p-8 flex flex-col items-center">
        <p className="text-xl mb-4 text-gray-800">Email me at:</p>
        <a 
          href="mailto:michaelrestrepoross@pursuit.org" 
          className="text-light-blue text-2xl font-semibold hover:underline"
        >
          michaelrestrepoross@pursuit.org
        </a>
      </div>
    </div>
  );
};

export default Contact;
