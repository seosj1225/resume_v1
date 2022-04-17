import React from "react";
import styled from "styled-components";
import AboutmeContents from "./aboutMeContents/AboutmeContents";
import backgroundPic from "../../../images/laura-adai-RgSmEnzURlc-unsplash.jpg";

const AboutMe = (props, ref) => {
  return (
    <Wrapper ref={ref} id="menu1">
      <div className="row1">
        <div className="backgroundPic">
          <img src={backgroundPic} alt="배경사진" />
        </div>
        <div className="backgroundColor"></div>
        <AboutmeContents />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 130px 0 0 0;
  > div.row1 {
    position: relative;
    > .backgroundPic,
    > .backgroundColor {
      height: 800px;
      width: 40%;
    }
    > .backgroundPic {
      overflow: hidden;
      z-index: 0;
    }
    > .backgroundColor {
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255, 216, 190, 0.5);
      z-index: 10;
    }
  }
`;

export default React.forwardRef(AboutMe);
