import type { ProjectData } from "../../../../types";
import { TechIcon } from "../../styled";
import { techIcons } from "../../utils";
import {
  ButtonContainer,
  InfoContainer,
  ProjectCardContainer,
  ProjectDescription,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  TechStackContainer,
  ViewProjectButton,
} from "./styled";
export const ProjectCard: React.FC<{
  project: ProjectData;
}> = ({ project }) => {
  return (
    <ProjectCardContainer>
      <ProjectImage img={project.image}>
        <TechStackContainer>
          {project.technologies.map((tech) => (
            <TechIcon
              key={tech}
              src={techIcons[tech]}
              alt={tech}
              title={tech}
            />
          ))}
        </TechStackContainer>
      </ProjectImage>
      <ProjectInfo>
        <InfoContainer>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 3,
            }}
          >
            {project.description}
          </ProjectDescription>
        </InfoContainer>
        <ButtonContainer>
          <ViewProjectButton
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            view-project
          </ViewProjectButton>
        </ButtonContainer>
      </ProjectInfo>
    </ProjectCardContainer>
  );
};
