import React from "react";
import styled from "styled-components";

const Contact = (props, ref) => {
  return <Wrapper ref={ref} id="menu4"></Wrapper>;
};
const Wrapper = styled.section`
  height: 800px;
  background-color: #fff;
`;

export default React.forwardRef(Contact);
