import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import styled from "styled-components";
import * as jobs from "../../Content/experience";
import * as projectsContent from "../../Content/projects";
import * as contactData from "../../Content/contact";

const index = () => {
  const SelectionsContainer = styled.div`
    margin-top: -52px;
  `;

  return (
    <SelectionsContainer>
      <About />
      <Experience nodes={jobs.nodes} />
      <Projects {...projectsContent} />
      <Contact {...contactData} />
    </SelectionsContainer>
  );
};

export default index;
