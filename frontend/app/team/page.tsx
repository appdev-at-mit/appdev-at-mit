import TeamMember from "../components/TeamMember";
import teamMembers from "./teamMembers";

const Team: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col mx-72 my-24">
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

      <div className="mt-32">
        <h3 className="text-2xl font-semibold my-3 text-gray-800 text-center">
          Executive Team
        </h3>
        <p className="mb-12 mx-48 my-3 text-gray-600 text-center">
          Directors make FS@MIT who we are. They manage both the technical and
          business sides of  FS@ MIT to keep us growing and creating new
          products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
};

export default Team;
