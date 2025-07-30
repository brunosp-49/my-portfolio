import type { ProjectData } from "../../../types";

export const allProjects: ProjectData[] = [
  {
    id: "project-ui-animations",
    title: "Project 1 // E-caver",
    image:
      "https://i.ibb.co/RTRcPj8k/Captura-de-Tela-2025-07-30-a-s-17-36-33.png",
    description:
      "Brandt Meio Ambiente LTDA.'s speleological information registration and management application. It allows for the entry of information related to speleological prospecting, topography, geospeleological diagnosis, and biospeleological diagnosis.",
    technologies: ["React Native", "TypeScript", "Geolocation", "JavaScript"],
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.eecaver&pcampaignid=web_share",
  },
  {
    id: "project-tetris-game",
    title: "Project 2 // Cave Tools",
    image:
      "https://i.ibb.co/G4CRVvy6/Captura-de-Tela-2025-07-30-a-s-17-36-16.png",
    description:
      "Cave Tools is a practical application for identifying, mapping, and registering caves. It allows you to record cave characteristics, collect topographic data, and organize the information simply and efficiently. After collection, the data can be exported to the web system for analysis and storage.",
    technologies: ["React Native", "TypeScript", "Geolocation", "JavaScript"],
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.anonymous.cavetools&pcampaignid=web_share",
  },
  {
    id: "project-ecommerce-api",
    title: "Project 3 // TechGym",
    image:
      "https://i.ibb.co/ym4LC2Kq/Captura-de-Tela-2025-07-30-a-s-17-58-51.png",
    description:
      "I created a full-stack application called TechGym, which is a gym management system. It includes features for managing members, classes, and schedules. The application is built with Node.js and TypeScript for the backend, and React and React Native for the frontend.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Geolocation",
      "React",
      "JavaScript",
      "React Native",
      "HTML",
      "CSS",
      "Firebase",
    ],
    projectUrl: "https://github.com/TechGymPro",
  },
];

export const techIcons: { [key: string]: string } = {
  React: "https://placehold.co/20x20/00D5BE/FFFFFF?text=R",
  "React Native": "https://placehold.co/20x20/615FFF/FFFFFF?text=RN",
  "Node.js": "https://placehold.co/20x20/00C950/FFFFFF?text=N",
  TypeScript: "https://placehold.co/20x20/3182CE/FFFFFF?text=TS",
  HTML: "https://placehold.co/20x20/E34C26/FFFFFF?text=H",
  CSS: "https://placehold.co/20x20/264DE4/FFFFFF?text=C",
  JavaScript: "https://placehold.co/20x20/F0DB4F/000000?text=JS",
  Geolocation: "https://placehold.co/20x20/4DB33D/FFFFFF?text=G",
  Firebase: "https://placehold.co/20x20/FFCA28/000000?text=F",
};
