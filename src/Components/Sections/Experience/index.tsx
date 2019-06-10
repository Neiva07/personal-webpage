import React, { useState } from "react";
import { Section, Heading } from "../../../Styles";
import styled, { ThemedStyledProps } from "styled-components";
import * as experience from "../../../Content/experience";

type JobsProps = {
  nodes: {
    job: {
      company: string;
      url: URL;
      range: string;
      title: string;
      descriptions: string[];
    };
  }[];
};

interface TabsProps {
  isActive: boolean;
}
const ExperienceContainer = styled(Section)`
  position: relative;
  max-width: 700px;
`;

const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
`;

const Tabs = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
`;

const Tab = styled.button<TabsProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  text-align: left;
  color: ${props => (props.isActive ? "green" : "gray")};
`;

const TabContent = styled.div<TabsProps>`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  z-index: ${props => (props.isActive ? 2 : -1)};
  position: ${props => (props.isActive ? "relative" : "absolute")};
  visibility: ${props => (props.isActive ? "visible" : "hidden")};
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
      }
    }
  }
`;

const ContentContainer = styled.div`
  position: relative;
  padding-top: 12px;
  padding-left: 30px;
  flex-grow: 1;
`;

const JobTitle = styled.h4`
  font-weight: 500;
  margin-bottom: 5px;
`;

const Company = styled.span`
  color: blue;
  a,
  a:active,
  a:focus {
    outline: none;
  }
`;
const JobDetails = styled.h5`
  font-weight: normal;
  margin-bottom: 30px;
  letter-spacing: 0.5px;
`;

const index = ({ nodes }: JobsProps) => {
  //   const [activeTabId, setActiveTabId] = useState(0);

  return (
    <ExperienceContainer id="experience" className="container">
      <Heading>{experience.title}</Heading>
      <TabsContainer>
        <Tabs role="tablist">
          {nodes.map((node, i) => {
            const { company } = node.job;
            return (
              <Tab
                key={i}
                isActive={i === 0}
                // onClick={() => setActiveTabId(i)}
                role="tab"
                // aria-selected={activeTabId === i ? "true" : "false"}
                aria-controls={`tab${i}`}
                id={`tab${i}`}
                // tabIndex={activeTabId === i ? 0 : -1}
              >
                <span>{company}</span>
              </Tab>
            );
          })}
        </Tabs>
        <ContentContainer>
          {nodes.map((node, i) => {
            const { job } = node;
            const { title, url, company, range, descriptions } = job;
            return (
              <TabContent
                key={i}
                isActive={i === 0}
                id={`job${i}`}
                role="tabpanel"
                tabIndex={0}
                aria-labelledby={`job${i}`}
                aria-hidden={i !== 0}
              >
                <JobTitle>
                  <span>{title}</span>
                  <Company>
                    <span>&nbsp;@&nbsp;</span>
                    <a
                      href={url.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer external"
                    >
                      {company}
                    </a>
                  </Company>
                </JobTitle>
                <JobDetails>
                  <span>{range}</span>
                </JobDetails>
                <ul>
                  {descriptions.map((desc, i) => {
                    <li key={i}>{desc}</li>;
                  })}
                </ul>
              </TabContent>
            );
          })}
        </ContentContainer>
      </TabsContainer>
    </ExperienceContainer>
  );
};

export default index;
