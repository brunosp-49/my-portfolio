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
export interface TextSegment {
  text: string;
  color?: string;
  fontWeight?: string;
}
export interface HighlightTextProps {
  segments: TextSegment[];
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  isBlock?: boolean;
}
