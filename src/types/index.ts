export enum PageName {
  Hello = "_hello",
  AboutMe = "_about-me",
  Projects = "_projects",
  ContactMe = "_contact-me",
}

export interface TabContentData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface ProjectData {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  projectUrl: string;
}
