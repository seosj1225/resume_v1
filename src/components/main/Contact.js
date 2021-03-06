import React from "react";
import styled from "styled-components";

const Contact = (props, ref) => {
  return (
    <Wrapper ref={ref} id="menu4">
      <div className="row1">
        <h2>
          <div></div>
          <span>Contact</span>
        </h2>
        <div className="text">
          <p className="smile">π</p>
          <p>μμ€ν κ΄μ¬ κ°μ¬λλ¦½λλ€ !</p>
          <p>μ΄λ©μΌ λ¨κ²¨μ£Όμλ©΄,</p>
          <p>3μΌ μ΄λ΄μ νμ λλ¦¬κ² μ΅λλ€.</p>
        </div>
        <div className="send">
          <a href="mailto:seosj1225@gmail.com">send email</a>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 800px;
  background-color: #fff;
  text-align: center;
  > div.row1 {
    margin: 0 auto;
    width: 1300px;
    padding-top: 150px;
    h2 {
      padding: 0 0 80px;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      > div {
        background-color: #9381ff;
        width: 25px;
        height: 25px;
        display: inline-block;
        margin-right: 10px;
      }
    }
    > div.text {
      .smile {
        font-size: 40px;
        margin-bottom: 20px;
      }
      > p {
        padding: 10px 0;
        font-size: 20px;
      }
    }
    .send {
      margin-top: 80px;
      border: 2px solid #9381ff;
      background-color: #ffd8be;
      padding: 8px 0 15px;
      a {
        letter-spacing: -1px;
        font-size: 30px;
        font-weight: bold;
        color: #9381ff;
      }
      &:hover {
        transition: 0.5s;
        border: 2px solid #ffd8be;
        background-color: #9381ff;
        a {
          color: #ffd8be;
        }
      }
    }
  }
`;

export default React.forwardRef(Contact);
