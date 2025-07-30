import type { ProjectData } from "../../../types";

export const allProjects: ProjectData[] = [
  {
    id: "project-ui-animations",
    title: "Project 1 // ui-animations",
    image:
      "https://codify.lv/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fandroid-monitoring-application.7fad17a0.jpg&w=3840&q=100",
    description:
      "Duis aute irure dolor in velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident.",
    technologies: ["React", "HTML", "CSS"],
    projectUrl: "https://github.com/brunosp-49/ui-animations",
  },
  {
    id: "project-tetris-game",
    title: "Project 2 // tetris-game",
    image:
      "https://stream-blog-v2.imgix.net/blog/wp-content/uploads/057abc479202cd545d51b159a0e0e58b/NowInAndroid-1200x630px.png?auto=format&auto=compress",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    technologies: ["React", "JavaScript"],
    projectUrl: "https://github.com/brunosp-49/tetris-game",
  },
  {
    id: "project-ecommerce-api",
    title: "Project 3 // e-commerce-api",
    image:
      "https://www.brillmindz.com/wp-content/uploads/2022/06/Which-android-app-development-framework-should-you-choose-for-your-project.png",
    description:
      "Backend robusto para e-commerce com autenticação e carrinho de compras.",
    technologies: ["Node.js", "TypeScript", "MongoDB"],
    projectUrl: "https://github.com/brunosp-49/ecommerce-api",
  },
  {
    id: "project-mobile-chat",
    title: "Project 4 // mobile-chat",
    image: "https://placehold.co/400x200/1E293B/E2E8F0?text=Mobile+Chat",
    description: "Aplicativo de chat mobile com notificações em tempo real.",
    technologies: ["React Native", "Firebase"],
    projectUrl: "https://github.com/brunosp-49/mobile-chat",
  },
  {
    id: "project-dashboard",
    title: "Project 5 // admin-dashboard",
    image: "https://placehold.co/400x200/1E293B/E2E8F0?text=Admin+Dashboard",
    description:
      "Dashboard administrativo com gráficos interativos e gerenciamento de usuários.",
    technologies: ["React", "TypeScript", "Node.js"],
    projectUrl: "https://github.com/brunosp-49/admin-dashboard",
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
  MongoDB: "https://placehold.co/20x20/4DB33D/FFFFFF?text=M",
  Firebase: "https://placehold.co/20x20/FFCA28/000000?text=F",
};
