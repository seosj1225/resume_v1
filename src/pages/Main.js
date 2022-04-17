import React from "react";
import styled from "styled-components";
import Skills from "../components/main/Skills";
import Portfolio from "../components/main/Portfolio";
import Contact from "../components/main/Contact";
import Footer from "../components/common/Footer";
import Header from "../components/common/header/Header";
import AboutMe from "../components/main/aboutMe/AboutMe";

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default Main;
