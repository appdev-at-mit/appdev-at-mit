interface TeamMember {
  name: string;
  roles: string[];
  year: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Hailey Pan",
    roles: ["Backend Engineer", "Frontend Engineer"],
    year: "2027",
    imageSrc: "/people/hailey-pan.jpg",
  },
  {
    name: "Josie Wang",
    roles: ["Backend Engineer", "Frontend Engineer"],
    year: "2027",
    imageSrc: "/people/josie-wang.jpg",
  },
  {
    name: "Kaitlyn Zhang",
    roles: ["Backend Engineer", "Frontend Engineer"],
    year: "2027",
    imageSrc: "/people/kaitlyn-zhang.png",
  },
];

export default teamMembers;
