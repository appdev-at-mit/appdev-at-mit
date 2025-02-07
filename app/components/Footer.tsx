import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white bottom-0 left-0 right-0 z-50">
      <div className="max-w-8xl my-4 mx-8 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col items-start sm:items-center sm:flex-row justify-between">
          <div>
            <p className="text-gray-500 text-left text-md mb-1">AppDev @ MIT © 2025. fullstack-exec@mit.edu</p>
            <p className="text-gray-500 text-left text-sm">
              Made with <span className="text-red-600">❤️</span> by AppDev @ MIT.
            </p>
            <p className="text-gray-400 text-left text-xs mt-1">
              Originally known as Full Stack @ MIT
            </p>
          </div>
          {/* <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://www.instagram.com/mitfullstack/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-500 hover:text-gray-900" size={24} />
            </a>
            <a href="https://www.linkedin.com/company/full-stack-at-mit/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-500 hover:text-gray-900" size={24} />
            </a>
            <a href="mailto:contact@mitfullstack.org">
              <FaEnvelope className="text-gray-500 hover:text-gray-900" size={24} />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
