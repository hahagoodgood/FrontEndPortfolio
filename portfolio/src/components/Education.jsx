import React, { useEffect, useState } from "react";
import {getEducationData} from "../services/educationService";

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

  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const fetchEducationData = async () => {
      const data = await getEducationData();
      setEducationData(data);
      console.log("Data fetched:", data);
    };

    fetchEducationData();
    // getIsLogined();
    // setIsLoggedIn();
    // .then((data) => console.log("Data fetched:", data))
    // .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
                  <td>
                    {/* 
                      입학년도 출력 
                      item.startDate.toDate().getFullYear()

                      입학 월 출력 date의 month는 0부터 11까지 되어 있기에 +1 하였습니다.
                      (item.startDate.toDate().getMonth() + 1)
                      
                      월을 02월 처럼 나타내기 위해 사용
                      .toString()
                      .padStart(2, "0")
                    */}
                    {`${item.startDate.toDate().getFullYear()}.
                    
                  ${(item.startDate.toDate().getMonth() + 1)
                  .toString()
                  .padStart(2, "0")} ~ 
                  ${item.endDate.toDate().getFullYear()}.
                  ${(item.endDate.toDate().getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}.`}
                  </td>
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
