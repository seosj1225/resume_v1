import React from "react";
import styled from "styled-components";

const Skills = (props, ref) => {
  return <Wrapper ref={ref} id="menu2"></Wrapper>;
};
const Wrapper = styled.section`
  height: 800px;
  background-color: #fff;
`;

//

export default React.forwardRef(Skills);
