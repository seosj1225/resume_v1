import React from "react";
import styled from "styled-components";
import profilePic from "../../../../images/profilepic.png";
import { BsGithub } from "react-icons/bs";

const ProfilePic = () => {
  return (
    <Wrapper>
      <div className="mainTitle">
        <div className="profilePicture">
          <img src={profilePic} className="profilePic" alt="프로필사진" />
        </div>
        <div className="myName">
          <p>서 세 정</p>
        </div>
        <div className="point"></div>
        <div className="position">
          <p>Web publisher </p>
          <p>&#38; Front-end developer</p>
        </div>
      </div>
      <div className="Links">
        <div>
          <BsGithub />
        </div>
      </div>
    </Wrapper>
  );
};
// 380 530
const Wrapper = styled.div`
  width: 380px;
  background-color: #ffeedd;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;

  .mainTitle {
    padding: 40px 0;
    text-align: center;
    .profilePicture {
      margin: auto;
      width: 170px;
      border-radius: 50px;
      overflow: hidden;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .myName {
      font-weight: bold;
      font-size: 35px;
      margin: 30px 0 30px;
    }
    .point {
      margin: auto;
      background-color: #9381ff;
      width: 60px;
      height: 3px;
    }
    .position {
      margin: 30px 0 0;
      font-size: 18px;
    }
  }
  .Links {
    background-color: #fff;
    height: 50px;
    font-size: 30px;
    > div {
      text-align: center;
      line-height: 53px;
    }
  }
`;

export default ProfilePic;
