import React from "react";
import styled from "styled-components";

const HeaderMenu = () => {
  return (
    <Wrapper>
      <ul className="depth1">
        <li>About me</li>
        <li>skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  ul.depth1 {
    display: flex;
    li {
      padding: 0 25px;
      font-size: 17px;
    }
  }
`;

export default HeaderMenu;
