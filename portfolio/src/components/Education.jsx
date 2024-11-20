/* import React from "react";
import phoneIcon from "../assets/icon/phone.svg";
import birthIcon from "../assets/icon/calendar.svg";
import emailIcon from "../assets/icon/email.svg";
import Myimg from "../assets/img/profile_img.jpg";
import githubIcon from "../assets/icon/github.svg"

const introduction = {
  NameKor: "김동혁",
  NameEng: "Kim Dong Hyuk",
  brith: new Date(2002, 2, 15),
  phone: "010-9522-9505",
  email: "dh95229505@gmail.com",
  github: "https://github.com/hahagoodgood",
};

const Education = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h2 className="intro__title">
          INTRODUCTION <em>자기소개</em>
        </h2>
        <div className="intro__wrap">
          <div className="intro__img">
            <img src={Myimg}/>
          </div>
          <div className="intro__content">
            <h1>
                {introduction.NameKor}({introduction.NameEng})
            </h1>
            <div>
              <img src={birthIcon} alt="SVG" />
              <p>
                : {introduction.brith.getFullYear()}.
                {introduction.brith.getMonth().toString().padStart(2, "0")}.
                {introduction.brith.getDate()}( 만{" "}
                {new Date().getFullYear() - introduction.brith.getFullYear()} 세
                )
              </p>
            </div>
            <div>
              <img id="phni" src={phoneIcon} alt="SVG" />
              <p>: {introduction.phone}</p>
            </div>
            <div>
              <img src={emailIcon} alt="SVG" />
              <a href={`mailto:${introduction.email}`}>
                : {introduction.email}
              </a>
            </div>
            <div>
              <img src={githubIcon} alt="SVG" />
              <a href={introduction.github}>
                : {introduction.github.split('//').pop()}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
 */

import React from "react";

const educationData = [
  {
    startDate: new Date(2017,1),
    endDate: new Date(2020,1),
    school: "고려대학교사범대학부속고등학교",
    major: "자연과학",
    graduation: "졸업"
  },
  {
    startDate: new Date(2020,1),
    endDate: new Date(2025,1),
    school: "인하공업전문대학",
    major: "컴퓨터정보공학과",
    grade: 3.26,
    graduation: "재학"
  },
  
];

const Education = () => {
  return (
    <selection id="Education">
      <div className="education__inner">
        <h2 className="education__title">
          Education <em>학 력</em>
        </h2>
        <div className="education__content">
          <table>
            <thead>
              <tr>
                {/* 기간 학교, 전공, 성적, 졸업여부 */}
                <th>기간</th>
                <th>학교</th>
                <th>전공</th>
                <th>성적</th>
                <th>졸업여부</th>
              </tr>
            </thead>
            <tbody>
              {educationData.map((item, index) => (
                <tr key={index}>
                  <td>{`${item.startDate.getFullYear()}.
                  ${(item.startDate.getMonth() + 1)
                  .toString()
                  .padStart(2, "0")} ~ 
                  ${item.endDate.getFullYear()}.
                  ${(item.endDate.getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}.`}</td>
                  <td>{item.school}</td>
                  <td>{item.major}</td>
                  <td>{item.grade ? item.grade : '-'}</td>
                  <td>{item.graduation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </selection>
  );
};

export default Education;
