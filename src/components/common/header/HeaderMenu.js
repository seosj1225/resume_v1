import React from "react";
import styled from "styled-components";

const HeaderMenu = ({ onMenu }) => {
  console.log("onMenu", onMenu);
  return (
    <Wrapper>
      <ul className="depth1">
        <li className={onMenu === 0 ? "on" : ""}>
          <a href="#menu1">ABOUT ME</a>
        </li>
        <li className={onMenu === 1 ? "on" : ""}>
          <a href="#menu2">RESUME</a>
        </li>
        <li className={onMenu === 2 ? "on" : ""}>
          <a href="#menu3">SKILLS &#38; PORTFOLIO</a>
        </li>
        <li className={onMenu === 3 ? "on" : ""}>
          <a href="#menu4">CONTACT</a>
        </li>
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  ul.depth1 {
    display: flex;
    li {
      padding: 0 25px;
      font-size: 15px;

      &.on {
        a {
          color: #9381ff;
        }
      }
    }
  }
`;

export default HeaderMenu;
