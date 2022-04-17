import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div>
        <p>© 2023 by Sejung Seo.</p>
        <p>
          본 사이트는 취업을 위한 이력서 및 포트폴리오 용도로 제작되었습니다.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 100px;
  background-color: #ffd8be;
  > div {
    padding: 20px;
    p {
      padding-bottom: 5px;
      font-size: 12px;
    }
  }
`;

export default Footer;
