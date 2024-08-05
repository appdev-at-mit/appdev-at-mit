import Image from "next/image";

interface TeamMemberProps {
  name: string;
  roles: string[];
  year: string;
  imageSrc: string;
}

const DEFAULT_IMAGE_WIDTH = 300;
const DEFAULT_IMAGE_HEIGHT = 300;

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  roles,
  year,
  imageSrc,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageSrc}
        alt={name}
        width={DEFAULT_IMAGE_WIDTH}
        height={DEFAULT_IMAGE_HEIGHT}
      />
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
