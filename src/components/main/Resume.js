import React from "react";
import styled from "styled-components";
import ResumeJpg1 from "../../images/resumeSample (1).jpg";
import ResumeJpg2 from "../../images/resumeSample (2).jpg";
import ResumeJpg3 from "../../images/resumeSample (3).jpg";
import ResumeJpg4 from "../../images/resumeSample (4).jpg";
import ResumeJpg5 from "../../images/resumeSample (5).jpg";
import ResumeJpg6 from "../../images/resumeSample (6).jpg";
import ResumeJpg7 from "../../images/resumeSample (7).jpg";
import ResumeJpg8 from "../../images/resumeSample (8).jpg";

const Resume = (props, ref) => {
  return (
    <Wrapper ref={ref} id="menu2">
      <div className="row1">
        <h2>
          <div></div>
          <span>Resume</span>
        </h2>
        <div className="scroll">
          <ul>
            <li>
              <div>
                <img src={ResumeJpg1} alt="이력서사진" />
              </div>
            </li>
            <li>
              <div>
                <img src={ResumeJpg2} alt="이력서사진" />
              </div>
            </li>
            <li>
              <div>
                <img src={ResumeJpg3} alt="이력서사진" />
              </div>
            </li>
            <li>
              <div>
                <img src={ResumeJpg4} alt="이력서사진" />
              </div>
            </li>
            <li>
              <div>
                <img src={ResumeJpg5} alt="이력서사진" />
              </div>
            </li>
            <li>
              <div>
                <img src={ResumeJpg6} alt="이력서사진" />
              </div>
            </li>
            <li>
              <div>
                <img src={ResumeJpg7} alt="이력서사진" />
              </div>
            </li>
            <li>
              <div>
                <img src={ResumeJpg8} alt="이력서사진" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 800px;
  background-color: #fff;
  > div.row1 {
    margin: 0 auto;
    width: 1300px;
    h2 {
      padding: 60px 0;
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
    .scroll {
      > ul {
        /* display: flex; */
        padding: 50px 0;
        margin: auto;
        background-color: #ffeedd;

        /* 스크롤 커스텀 */
        width: 1200px;
        height: 100%;
        white-space: nowrap;
        overflow-x: scroll;

        &::-webkit-scrollbar {
          height: 20px;
        }
        &::-webkit-scrollbar-track {
          background: #b8b8ff;
        }
        &::-webkit-scrollbar-thumb {
          background: #9381ff;
        }
        &::-webkit-scrollbar-thumb:hover {
          background: #f8f7ff;
          transition: 0.3s;
        }

        > li {
          display: inline-block;
          div {
            width: 300px;
            margin: 0 30px;
            img {
              display: block;
            }
          }
        }
      }
    }
  }
`;

export default React.forwardRef(Resume);
