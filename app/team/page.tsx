import React from "react";
import TeamMember from "../components/TeamMember";
import teamMembers from "./teamMembers";
import Image from "next/image";

const Team: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col xl:mx-64 lg:mx-48 md:mx-32 mx-6 xl:my-20 my-10">
      <div className="flex flex-col md:flex-row items-center">
        <div className="text-left max-w-2xl">
          <h2 className="text-4xl font-bold my-3 text-gray-800">Our Team</h2>
          <h3 className="text-xl font-bold mt-3 mb-5 text-gray-800">
            Putting in the blood, sweat, and tears
          </h3>
          <p className="text-md my-5 text-gray-700">
            Our team builds each app from the ground up. Every
            year, we recruit a diverse team of engineers, designers, and leaders to
            further our mission of improving the lives of the MIT community. We
            ensure that all members have the unique opportunity to develop their
            technical and soft skills through practical projects that have real
            impact.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <Image
            src="/images/collaboration.svg"
            alt="collaboration.svg"
            width={600}
            height={250}
          />
        </div>
      </div>

      <div className="md:mt-24 mt-20">
        <h3 className="text-2xl font-semibold my-3 text-gray-800 text-center">
          Executive Team
        </h3>
        <p className="mb-12 my-3 text-gray-600 text-center lg:mx-32 xl:mx-48">
          Exec is the heart and soul of fs@MIT. They manage all
          initiatives, spanning both technical and business aspects, to keep us
          growing.
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
          <button className="text-lg my-3 text-gray-600 border border-gray-600 text-center justify-center px-5 py-1 rounded-full mx-auto transition duration-300 ease-in-out hover:text-dark-blue hover:border-dark-blue">
            Apply now!
          </button>
        </a>
      </div>
    </div>
  );
};

export default Team;
