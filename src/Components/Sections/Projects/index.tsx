import React, { useState, useMemo, useCallback } from "react";
import { Section, Heading } from "../../../Styles";
import styled from "styled-components";
import GithubIcon from "../../Icons/Github";
import LinkIcon from "../../Icons/Link";
import FolderIcon from "../../Icons/Folder";
const NUMPERPAGE = 4;

type Project = {
  title: string;
  description: string;
  techStack: string[];
  link?: URL;
  github?: URL;
};

type Props = {
  title: string;

  projects: Project[];
};

const BoxContainer = styled.div`
  position: relative;
  padding: 20px 16px;
`;

const ProjectsContainer = styled(Section)`
  position: relative;
  flex-direction: column;
  align-items: flex-start;
`;

const IconLink = styled.a.attrs(() => ({
  target: "_blank"
}))`
  position: relative;
  margin-left: 12px;
  float: right;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-gap: 15px;
  position: relative;
`;

const ProjectContent = styled.p`
  text-align: justify;
`;

const LinkContainer = styled.div`
  /* display: inline-block; */
`;

const TechList = styled.ul`
  align-items: flex-end;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  margin-top: 20px;
  list-style: none;
  padding: 0;
  li {
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const Button = styled.button`
  max-width: 100px;
  text-align: center;
  justify-content: center;
  display: flex;
  margin: 100px auto 0;
`;

const Index = (props: Props) => {
  const { title, projects } = props;

  const [projectsToShow, setProjectsToShow] = useState(() =>
    projects.length > 4 ? projects.slice(0, 4) : projects
  );

  const moreProjects = useCallback(() => setProjectsToShow(projects), []);
  const fewerProjects = useCallback(
    () => setProjectsToShow(projects.slice(0, 4)),
    []
  );

  return (
    <ProjectsContainer id="projects">
      <Heading>{title}</Heading>
      <ProjectsGrid>
        {projectsToShow &&
          projectsToShow.map(project => {
            const { github, link, techStack, title, description } = project;
            return (
              <BoxContainer>
                <LinkContainer>
                  <span>
                    <FolderIcon />
                  </span>
                  {github && (
                    <IconLink href={github.href}>
                      <GithubIcon />
                    </IconLink>
                  )}
                  {link && (
                    <IconLink href={link.href}>
                      <LinkIcon />
                    </IconLink>
                  )}
                </LinkContainer>

                <ProjectContent>{description}</ProjectContent>
                <footer>
                  <TechList>
                    {techStack.map(tech => {
                      return <li>{tech}</li>;
                    })}
                  </TechList>
                </footer>
              </BoxContainer>
            );
          })}
      </ProjectsGrid>

      {projects.length > 4 && projectsToShow.length === 4 && (
        <Button onClick={moreProjects}>More Projects</Button>
      )}
      {projectsToShow.length > 4 && (
        <Button onClick={fewerProjects}>Fewer Projects</Button>
      )}
    </ProjectsContainer>
  );
};

export default Index;
