import Image from "next/image";
import { FC } from "react";

interface TeamMemberProps {
  name: string;
  roles: string[];
  year: string;
  imageSrc: string;
}

const TeamMember: FC<TeamMemberProps> = ({ name, roles, year, imageSrc }) => {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-custom">
      <div className="relative w-full" style={{ paddingTop: '100%' }}>
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <div className="flex flex-wrap space-x-2 mt-2">
          {roles.map((role, index) => (
            <span
              key={index}
              className="inline-block bg-light-orange text-gray-800 text-sm px-2 rounded-md"
            >
              {role}
            </span>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-sm">Class of {year}</p>
      </div>
    </div>
  );
};

export default TeamMember;
