import React from "react";
import { Section, Heading } from "../../../Styles/index";
import styled from "styled-components";
import GithubIcon from "../../Icons/Github";
import LinkedinIcon from "../../Icons/Linkedin";

type Props = {
  title: string;
  message: string;
  links: {
    [ind: string]: URL;
  };
  email: string;
};

const ContactContainer = styled(Section)`
  position: relative;
`;

const Message = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const Text = styled.p`
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: 48px auto 0;
`;

const IconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const LinkIcon = styled.a.attrs({ target: "_blank" })`
  svg {
    width: 36px;
    height: 36px;
  }
  margin: 10px 10px;
`;

const EmailContainer = styled.h6``;

const Index = (props: Props) => {
  const { title, message, links, email } = props;

  return (
    <ContactContainer id="contact">
      <Heading>{title}</Heading>
      <Message>Get In Touch</Message>

      <Text>{message}</Text>
      <IconContainer>
        <LinkIcon href={links.github.href}>
          <GithubIcon />
        </LinkIcon>
        <LinkIcon href={links.linkedin.href}>
          <LinkedinIcon />
        </LinkIcon>
      </IconContainer>

      <EmailContainer>{email}</EmailContainer>
    </ContactContainer>
  );
};

export default Index;
