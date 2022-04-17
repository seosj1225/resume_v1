import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Skills from "../components/main/Skills";
import Portfolio from "../components/main/Portfolio";
import Contact from "../components/main/Contact";
import Footer from "../components/common/Footer";
import Header from "../components/common/header/Header";
import AboutMe from "../components/main/aboutMe/AboutMe";

const Main = () => {
  const skillsRef = useRef();
  const aboutMe = useRef();
  const portfolio = useRef();
  const contact = useRef();

  const [onMenuNum, setOnMenuNum] = useState(0);
  console.log("onMenuNum", onMenuNum);

  useEffect(() => {
    let options = {
      // root: document.querySelector('#scrollArea'),
      rootMargin: "0px",
      threshold: [0, 0.15, 0.25, 0.5, 0.75, 0.85, 1],
    };

    const rateList = [0, 0, 0, 0];

    const changeRate = (menuNum, value) => {
      console.log(menuNum, value);
      rateList[menuNum] = value;
      const maxNum = Math.max(...rateList);
      console.log("maxNum", maxNum);

      rateList.forEach((value, index) => {
        if (maxNum === value) {
          setOnMenuNum(index);
        }
      });
    };

    let callback1 = (entries, observer) => {
      entries.forEach((entry) => {
        changeRate(0, entry.intersectionRatio);
      });
    };
    let callback2 = (entries, observer) => {
      entries.forEach((entry) => {
        changeRate(1, entry.intersectionRatio);
      });
    };
    let callback3 = (entries, observer) => {
      entries.forEach((entry) => {
        changeRate(2, entry.intersectionRatio);
      });
    };
    let callback4 = (entries, observer) => {
      entries.forEach((entry) => {
        changeRate(3, entry.intersectionRatio);
      });
    };

    let observer1 = new IntersectionObserver(callback1, options);
    let observer2 = new IntersectionObserver(callback2, options);
    let observer3 = new IntersectionObserver(callback3, options);
    let observer4 = new IntersectionObserver(callback4, options);
    observer1.observe(aboutMe.current);
    observer2.observe(skillsRef.current);
    observer3.observe(portfolio.current);
    observer4.observe(contact.current);
  }, []);

  return (
    <Wrapper>
      <Header onMenu={onMenuNum} />
      <AboutMe ref={aboutMe} />
      <Skills ref={skillsRef} />
      <Portfolio ref={portfolio} />
      <Contact ref={contact} />
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default Main;
