import React from "react";
import { Section, Heading } from "../../../Styles";
import styled from "styled-components";
import GithubIcon from "../../Icons/Github";
import LinkIcon from "../../Icons/Link";

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

const CardContainer = styled.div`
  position: relative;
  align-items: center;
`;

const ProjectsContainer = styled(Section)`
  position: relative;
`;

const IconContainer = styled.figure``;

const IconLink = styled.a`
  position: relative;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Index = (props: Props) => {
  const { title, projects } = props;
  return (
    <ProjectsContainer>
      <Heading>{title}</Heading>

      {projects &&
        projects.map(project => {
          const { github, link, techStack, title, description } = project;
          return (
            <CardContainer className="box">
              <IconContainer className="media-left">icon</IconContainer>
              {github && (
                <IconLink href={github.href} className="media-right">
                  <GithubIcon />
                </IconLink>
              )}
              {link && (
                <IconLink href={link.href} className="media-right">
                  <LinkIcon />
                </IconLink>
              )}
            </CardContainer>
          );
        })}
    </ProjectsContainer>
  );
};

export default Index;
