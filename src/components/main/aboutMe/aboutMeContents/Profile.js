import React from "react";
import styled from "styled-components";
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";

const Profile = () => {
  return (
    <Wrapper>
      <div className="greeting">
        <p>π± μλνμΈμ.</p>
        <p>μ±μ€ν μ±μ₯ν ,</p>
        <p>μ μκ°λ°μμλλ€!</p>
      </div>
      <div className="info">
        <div>
          <div className="Icons">
            <MdLocationPin />
          </div>
          <div className="detail">
            <p>μ£Όμ</p>
            <p>μμΈ μ‘νκ΅¬</p>
          </div>
        </div>
        <div>
          <div className="Icons">
            <MdPhone />
          </div>
          <div className="detail">
            <p>μ°λ½μ²</p>
            <p>010-4523-9686</p>
          </div>
        </div>
        <div>
          <div className="Icons">
            <MdEmail />
          </div>
          <div className="detail">
            <p>μ΄λ©μΌ</p>
            <p>seosj1225@gmail.com</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 550px;
  padding: 50px;
  .greeting {
    font-size: 50px;
    font-weight: bold;
    p {
      padding-top: 10px;
    }
  }
  .info {
    padding: 30px;

    > div {
      display: flex;
      padding: 20px 0 0;
      .Icons {
        width: 30px;
        height: 30px;
        font-size: 20px;
        line-height: 33px;
        text-align: center;
        background-color: #9381ff;
        border-radius: 50%;
        color: #f8f7ff;
      }
      .detail {
        line-height: 30px;
        display: flex;
        font-weight: bold;
        padding-left: 15px;
        font-size: 20px;
        p:last-child {
          color: gray;
          padding: 0 0 0 20px;
        }
      }
    }
  }
`;
export default Profile;

// 9381FF
// B8B8FF
// F8F7FF
// FFEEDD
// FFD8BE
