import Image from "next/image";
import { FC } from "react";

interface TeamMemberProps {
  name: string;
  roles: string[];
  year: string;
  imageSrc: string;
}

const getRoleColor = (role: string): string => {
  switch (role) {
    case "Co-President":
      return "bg-light-blue text-gray-800"; 
    case "Tech Chair":
      return "bg-[#F7BEC2] text-gray-800"; 
    case "Finance Chair":
      return "bg-[#D2CCED] text-gray-800"; 
    case "Backend Engineer":
      return "bg-light-orange text-gray-800"; 
    case "Frontend Engineer":
      return "bg-[#FFF9C6] text-gray-800"; 
    case "Business/Marketing":
      return "bg-[#CDECCA] text-gray-800"; 
    default:
      return "bg-gray-200 text-gray-800"; 
  }
};


const TeamMember: FC<TeamMemberProps> = ({ name, roles, year, imageSrc }) => {
  return (
    <div className="max-w-72 mx-auto bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-custom">
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
        <div className="flex flex-wrap gap-2 mt-2">
          {roles.map((role, index) => (
            <span
              key={index}
              className={`inline-block text-sm px-2 py-1 rounded-md ${getRoleColor(role)}`}
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