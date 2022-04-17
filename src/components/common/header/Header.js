import React from "react";
import styled from "styled-components";
import HeaderHome from "./HeaderHome";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <Wrapper>
      <section className="row1">
        <HeaderHome />
        <HeaderMenu />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  z-index: 9999999999999;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 130px;
  box-shadow: 0 5px 15px -15px black;
  section.row1 {
    margin: 0 auto;
    width: 1300px;
    display: flex;
    justify-content: space-between;
    line-height: 120px;
  }
`;
export default Header;
