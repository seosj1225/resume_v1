import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import ProfilePic from "./ProfilePic";

const AboutmeContents = () => {
  return (
    <Wrapper>
      <div>
        <ProfilePic />
        <Profile />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  z-index: 20;
  width: 100%;
  position: absolute;
  top: 150px;
  left: 0;
  display: flex;
  justify-content: center;
  > div {
    display: flex;
  }
`;
export default AboutmeContents;
