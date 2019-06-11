import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import styled from "styled-components";
import * as jobs from "../../Content/experience";
import * as projectsContent from "../../Content/projects";

const index = () => {
  const SelectionsContainer = styled.div`
    margin-top: -52px;
  `;

  return (
    <SelectionsContainer>
      <About />
      <Experience nodes={jobs.nodes} />
      <Projects
        title={projectsContent.title}
        projects={projectsContent.projects}
      />
    </SelectionsContainer>
  );
};

export default index;
