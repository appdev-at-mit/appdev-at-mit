import React from "react";
import TeamMember from "../components/TeamMember";
import teamMembers from "./teamMembers";

const Team: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col xl:mx-64 lg:mx-32 md:mx-20 mx-6 my-24">
      <div className="text-left max-w-2xl">
        <h2 className="text-4xl font-bold my-3 text-gray-800">Our Team</h2>
        <h3 className="text-xl font-bold mt-3 mb-5 text-gray-800">
          The people behind the products
        </h3>
        <p className="text-md my-5 text-gray-600">
          Our products wouldn't exist without the commitment and hard work of
          our members. We recruit the best rising students at MIT to build the
          next generation of products. We structure our club to optimize for
          education and mobility between technologies and teams. At the end of
          the day, we’re a family that builds, learns, and plays together.
        </p>
      </div>

      <div className="md:mt-32 mt-20">
        <h3 className="text-2xl font-semibold my-3 text-gray-800 text-center">
          Executive Team
        </h3>
        <p className="mb-12 my-3 text-gray-600 text-center lg:mx-32 xl:mx-48">
          Directors make FS@MIT who we are. They manage both the technical and
          business sides of FS@ MIT to keep us growing and creating new
          products.
        </p>

        <div className="grid gap-6 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              roles={member.roles}
              year={member.year}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
      <div className="items-center text-center md:mt-32 mt-20">
        <h3 className="text-2xl font-semibold my-3 text-gray-800">
          Want to join?
        </h3>
        <a href="/apply">
          <button className="text-lg my-3 text-gray-600 border border-gray-600 text-center justify-center px-5 py-1 rounded-full mx-auto transition duration-200 ease-in-out hover:bg-gray-200">
            Apply now!
          </button>
        </a>
      </div>
    </div>
  );
};

export default Team;
