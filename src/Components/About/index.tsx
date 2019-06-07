import React from "react";
import * as about from "../../Content/about";
import avatar from "../../assets/images/me.png";
import styled from "styled-components";
const index = () => {
  const AboutContainer = styled.div``;

  const AboutText = styled.p`
    max-width: 400px;
  `;

  return (
    <AboutContainer className="container level">
      <div className="level-item">
        <AboutText>{about.message}</AboutText>
        <ul>
          {about.techSkills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>

      <img className="level-item" src={avatar} alt="avatar" />
    </AboutContainer>
  );
};

export default index;
