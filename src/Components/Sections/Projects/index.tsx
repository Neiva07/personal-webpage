import React from "react";
import { Section, Heading } from "../../../Styles";
import styled from "styled-components";
import GithubIcon from "../../Icons/Github";
import LinkIcon from "../../Icons/Link";
import FolderIcon from "../../Icons/Folder";

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

const Index = (props: Props) => {
  const { title, projects } = props;
  return (
    <ProjectsContainer id="projects">
      <Heading>{title}</Heading>
      <ProjectsGrid>
        {projects &&
          projects.map(project => {
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
    </ProjectsContainer>
  );
};

export default Index;
