interface TeamMember {
  name: string;
  roles: string[];
  year: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Hailey Pan",
    roles: ["Co-President", "Backend Engineer", "Frontend Engineer"],
    year: "2027",
    imageSrc: "/people/hailey-pan.jpg",
  },
  {
    name: "Josie Wang",
    roles: ["Co-President", "Backend Engineer", "Frontend Engineer"],
    year: "2027",
    imageSrc: "/people/josie-wang.jpg",
  },
  {
    name: "Sejal Rathi",
    roles: ["Tech Chair", "Backend Engineer", "Frontend Engineer"],
    year: "2026",
    imageSrc: "/people/sejal-rathi.png",
  },
  {
    name: "Andrew Yuan",
    roles: ["Tech Chair", "Backend Engineer", "Frontend Engineer"],
    year: "2027",
    imageSrc: "/people/andrew-yuan.png",
  },
  // {
  //   name: "Sophie Wang",
  //   roles: ["Backend Engineer", "Frontend Engineer"],
  //   year: "2027",
  //   imageSrc: "/people/sophie-wang.JPG",
  // },
  {
    name: "Rebecca Xiong",
    roles: ["Finance Chair", "Business/Marketing"],
    year: "2028",
    imageSrc: "/people/rebecca-xiong.jpg",
  },
  
];

export default teamMembers;
