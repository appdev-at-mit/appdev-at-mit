import Image from "next/image";
import CurrentProject from "../components/CurrentProject";
import FeaturedProject from "../components/FeaturedProject";
import { currentProjects } from "./projectDetails";
import { featuredProjects } from "./projectDetails";

const Products: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col xl:mx-32 lg:mx-24 md:mx-16 mx-6 xl:my-20 my-10">
      <div className="flex flex-col md:flex-row items-center">
        <div className="text-left max-w-2xl">
          <h2 className="text-4xl font-bold my-3 text-gray-800">Projects</h2>
          <h3 className="text-xl font-bold mt-3 mb-5 text-gray-800">
            To not only foster skills, but create impact
          </h3>
          <p className="text-md my-5 text-gray-700">
            Our products are our pride and joy. We&apos;re building apps to help
            students plan their academic career, find places to live, get around
            campus, and so much more. Each app is inspired by a problem we&apos;ve
            seen in the world and are motivated to solve.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 md:mb-0 mb-24 ">
          <Image
            src="/images/presenter2.JPG"
            alt="presentation.JPG"
            width={600}
            height={250}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="md:mt-24 mb-24">
        <h3 className="text-2xl font-semibold my-10 text-gray-800 text-center">
          Featured
        </h3>
        <div className="space-y-8 md:mb-48 mb-24 my-5">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              imageUrl={project.imageUrl}
              team={project.team}
              isReversed={index % 2 === 1} // alternate left-right
            />
          ))}
        </div>

        <h3 className="text-2xl font-semibold my-10 text-gray-800 text-center">
          Upcoming Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8 my-5">
          {currentProjects.map((project, index) => (
            <CurrentProject
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
