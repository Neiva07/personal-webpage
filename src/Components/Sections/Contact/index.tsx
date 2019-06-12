import React from "react";
import { Section, Heading } from "../../../Styles/index";
import styled from "styled-components";

type Props = {
  title: string;
  message: string;
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

const Index = (props: Props) => {
  const { title, message } = props;

  return (
    <ContactContainer id="contact">
      <Heading>{title}</Heading>
      <Message>Get In Touch</Message>

      <Text>{message}</Text>
    </ContactContainer>
  );
};

export default Index;
