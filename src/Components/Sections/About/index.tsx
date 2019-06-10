import React from "react";
import * as about from "../../../Content/about";
import avatar from "../../../assets/images/me.png";
import styled from "styled-components";
import Section from "../../../Styles/Sections";

const index = () => {
  const AboutContainer = styled(Section)``;

  const AboutText = styled.p`
    max-width: 400px;
    text-align: justify;
    margin: 0;
  `;

  const ImageLayer = styled.img`
    max-width: 400px;
    width: 100%;
  `;

  const ContentContainer = styled.div`
    align-items: center;
  `;

  const SkillsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    overflow: hidden;
    margin-top: 20px;
    list-style-type: none;
  `;
  const TextContainer = styled.div`
    margin-right: 0;
  `;

  const Skill = styled.li`
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;

    &:before {
      content: "▹";
      left: 0;

      position: absolute;
    }
  `;

  return (
    <AboutContainer id="about" className="container">
      <div className="is-mobile level">
        <TextContainer className="level-item">
          <ContentContainer>
            <AboutText>{about.message}</AboutText>
            <SkillsContainer>
              {about.techSkills.map((skill, i) => (
                <Skill key={i}>{skill}</Skill>
              ))}
            </SkillsContainer>
          </ContentContainer>
        </TextContainer>

        <div className="level-item">
          <ImageLayer src={avatar} alt="avatar" />
        </div>
      </div>
    </AboutContainer>
  );
};

export default index;
