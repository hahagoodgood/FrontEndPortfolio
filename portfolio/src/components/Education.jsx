import React from "react";
// import {db} from "../firebase"


const educationData = [
  // {
  //   startDate: new Date(2017,1),
  //   endDate: new Date(2020,1),
  //   school: "고려대학교사범대학부속고등학교",
  //   major: "자연과학",
  //   graduation: "졸업"
  // },
  // {
  //   startDate: new Date(2020,1),
  //   endDate: new Date(2025,1),
  //   school: "인하공업전문대학",
  //   major: "컴퓨터정보공학과",
  //   grade: 3.26,
  //   graduation: "재학"
  // },
];

const Education = () => {
  return (
    <section id="Education">
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
    </section>
  );
};

export default Education;
