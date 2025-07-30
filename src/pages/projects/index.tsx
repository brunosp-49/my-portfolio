import { useState, useCallback, useMemo } from "react";
import { Accordion } from "../../components/accordion";
import { Container } from "../../components/container";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import {
  Content,
  MenuLeft,
  RightContainer,
  SubContainer,
  TabContentArea,
  TechIcon,
  NoProjectsMessage,
  ProjectsContainers,
} from "./styled";
import { Checkbox } from "./components/checkbox";
import { ProjectCard } from "./components/projectCard";
import { allProjects, techIcons } from "./utils";
export const Projects = () => {
  const [selectedTechs, setSelectedTechs] = useState<Set<string>>(new Set());
  const availableTechs = useMemo(
    () => [
      "React",
      "React Native",
      "Node.js",
      "TypeScript",
      "HTML",
      "CSS",
      "JavaScript",
      "Geolocation",
      "Firebase",
    ],
    []
  );
  const handleTechCheckboxChange = useCallback(
    (tech: string, isChecked: boolean) => {
      setSelectedTechs((prevSelectedTechs) => {
        const newSet = new Set(prevSelectedTechs);
        if (isChecked) {
          newSet.add(tech);
        } else {
          newSet.delete(tech);
        }
        return newSet;
      });
    },
    []
  );
  const filteredProjects = useMemo(() => {
    if (selectedTechs.size === 0) {
      return allProjects;
    }
    return allProjects.filter((project) =>
      project.technologies.some((tech) => selectedTechs.has(tech))
    );
  }, [selectedTechs]);
  const displayProjectsContent = useMemo(() => {
    if (filteredProjects.length === 0) {
      return (
        <NoProjectsMessage>
          No projects found for the selected technologies.
        </NoProjectsMessage>
      );
    }
    return (
      <ProjectsContainers>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContainers>
    );
  }, [filteredProjects]);
  return (
    <Container>
      <SubContainer>
        <Header />
        <Content>
          <MenuLeft>
            <Accordion
              allowMultipleOpen
              items={[
                {
                  title: "projects",
                  content: (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        padding: "8px 0",
                      }}
                    >
                      {availableTechs.map((tech) => (
                        <Checkbox
                          key={tech}
                          label={tech}
                          icon={
                            <TechIcon
                              key={tech}
                              src={techIcons[tech]}
                              alt={tech}
                              title={tech}
                            />
                          }
                          checked={selectedTechs.has(tech)}
                          onChange={(isChecked) =>
                            handleTechCheckboxChange(tech, isChecked)
                          }
                        />
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          </MenuLeft>
          <RightContainer>
            <TabContentArea>{displayProjectsContent}</TabContentArea>
          </RightContainer>
        </Content>
        <Footer />
      </SubContainer>
    </Container>
  );
};
