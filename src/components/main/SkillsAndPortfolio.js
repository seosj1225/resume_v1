import React from "react";
import styled from "styled-components";
import skills from "../../images/skills.png";
import portfolio from "../../images/portfoilo.png";

const SkillsAndPortfolio = (props, ref) => {
  return (
    <Wrapper ref={ref} id="menu3">
      <div className="row1">
        <h2>
          <div></div>
          <span>Skills &#38; Portfolio</span>
        </h2>
        <div className="contents">
          <div className="skills">
            <div className="title">
              <h3>Skills</h3>
              <p>Front-end</p>
            </div>
            <div className="skillsImg">
              <div>
                <img src={skills} alt="개발가능한 언어들 이미지" />
              </div>
            </div>
          </div>
          <div className="portfolio">
            <div className="title">
              <h3>Portfolio</h3>
              <p>"오늘의 집" 사이트 메인페이지 클론코딩</p>
            </div>
            <div className="work">
              <div>
                <img src={portfolio} alt="포트폴리오 이미지" />
              </div>
              <div className="text">
                <ul>
                  <li>리액트기반 HTML, CSS 마크업 작업함</li>
                  <li>useState&#40;&#41; 사용하여 호버시 색상변화 적용 </li>
                  <li>
                    useLocation 활용하여 링크 이동시 해당 depth1 메뉴
                    색상변경되도록 함
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 800px;
  background-color: #ffd8be;
  > div.row1 {
    margin: 0 auto;
    width: 1300px;
    h2 {
      padding: 40px 0 50px;
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
    .contents {
      display: flex;
      justify-content: space-between;
      .portfolio {
        width: 760px;
      }
      .skills {
        width: 380px;
      }

      .skills,
      .portfolio {
        background-color: #fff;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        .title {
          border-left: 10px solid #9381ff;
          margin: 20px 0;
          padding-left: 30px;
          h3 {
            font-weight: bold;
            font-size: 25px;
            padding-bottom: 5px;
          }
          p {
            font-size: 16px;
            font-weight: bold;
          }
        }
        .skillsImg,
        .work {
          border-top: 1px solid #b8b8ff;
          padding: 10px;
          img {
            padding: 20px 20px 20px 20px;
          }
        }
        .work {
          display: flex;
          justify-content: space-between;
          > div {
            width: 360px;
          }
          .text {
            border-left: 1px dotted #b8b8ff;
            padding: 100px 40px 0 70px;
            ul {
              list-style-type: square;
              li {
                padding: 10px 0;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
  }
`;

export default React.forwardRef(SkillsAndPortfolio);
