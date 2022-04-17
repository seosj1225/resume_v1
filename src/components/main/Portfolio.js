import React from "react";
import styled from "styled-components";

const Portfolio = (props, ref) => {
  return <Wrapper ref={ref} id="menu3"></Wrapper>;
};

const Wrapper = styled.section`
  height: 800px;
  background-color: #ffd8be;
`;

export default React.forwardRef(Portfolio);
