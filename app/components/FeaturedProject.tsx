import React from "react";

interface FeaturedProjectProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  isReversed: boolean;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  title,
  description,
  link,
  imageUrl,
  team,
  isReversed,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center rounded-lg ${isReversed ? 'md:flex-row-reverse' : ''
        }`}
    >
      <div className={`flex-shrink-0 mb-4 md:mb-0 w-full md:w-1/2 ${isReversed ? 'md:ml-10' : 'md:mr-10'}`}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-contain rounded-lg border border-gray-200"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h4 className={`text-2xl font-semibold text-gray-800 mb-2 text-left`}>{title}</h4>
        <p className={`text-md text-gray-800 mb-4 text-left }`}>{description}</p>
        <p className={`text-md text-gray-400 mb-4 text-left }`}>{team}</p>
        <a href={link} className={`text-blue-500 underline ${isReversed ? 'text-right' : 'text-left'}`}>
          {link}
        </a>
      </div>
    </div>
  );
};

export default FeaturedProject;
