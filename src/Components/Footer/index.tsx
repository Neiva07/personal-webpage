import React from "react";
import styled from "styled-components";

const Index = () => {
  const Footer = styled.footer`
    height: 100%;
  `;

  const FooterContainer = styled.div``;

  const LinkComponent = styled.div`
    display: flex;
    justify-content: center;
    vertical-align: middle;
  `;

  const Copyright = styled.a.attrs({ target: "_blank" })``;

  return (
    <FooterContainer>
      <Footer>
        <LinkComponent>
          <Copyright href={"https://github.com/Neiva07/personal-webpage"}>
            <p>Designed and built by Lucas Neiva.</p>
          </Copyright>
        </LinkComponent>
      </Footer>
    </FooterContainer>
  );
};

export default Index;
