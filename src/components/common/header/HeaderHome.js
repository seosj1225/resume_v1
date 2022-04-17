import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsFlower1 } from "react-icons/bs";

const HeaderHome = () => {
  return (
    <Wrapper>
      <Link to="/">
        <div className="mainIcon">
          <BsFlower1 />
        </div>
        <span className="mainTitle">Sejung</span>
        <span> &#47; Web publisher &#38; Front-end developer</span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.h1`
  a {
    display: flex;
    align-items: center;
    font-size: 17px;
    div.mainIcon {
      font-size: 20px;
      background-color: #9381ff;
      width: 20px;
      height: 20px;
      color: #ffeedd;
      svg {
        display: block;
      }
    }
    span.mainTitle {
      font-size: 25px;
      font-weight: bold;
      padding: 0 10px;
    }
  }
`;
export default HeaderHome;
