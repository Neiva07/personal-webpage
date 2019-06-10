import React from "react";
import About from "./About";
import Experience from "./Experience";
import styled from "styled-components";
import * as jobs from "../../Content/experience";

const index = () => {
  const SelectionsContainer = styled.div`
    margin-top: -52px;
  `;

  return (
    <SelectionsContainer>
      <About />
      <Experience nodes={jobs.nodes} />
    </SelectionsContainer>
  );
};

export default index;
