import React, {useEffect, useState} from "react";
import { Divider } from "antd";
import phoneIcon from "../assets/icon/phone.svg";
import birthIcon from "../assets/icon/calendar.svg";
import emailIcon from "../assets/icon/email.svg";
import githubIcon from "../assets/icon/github.svg";
import {getIntroduceData} from "../services/introService";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../services/session"
import {Button} from "antd";

// const introduction = {
//   NameKor: "김동혁",
//   NameEng: "Kim Dong Hyuk",
//   brith: new Date(2002, 2, 15),
//   phone: "010-9522-9505",
//   email: "dh95229505@gmail.com",
//   github: "https://github.com/hahagoodgood",
//   introduce_title: "지속적 개발과 응용이 가능한 개발자",
//   introduce:
//     "컴퓨터 과학은 지속적인 학습과 응용이 필요한 분야입니다 방대한 학습만을 추구하면 프로젝트 진행이나 가치 창출에 악영향을 줄 수 있고 응용만을 강조하면 새로운 변화에 뒤처져 프로젝트의 발전이 더뎌질 수 있습니다.\n\n 저는 이러한 문제를 해결하기 위해 DevOps 모델의 CICD지속적 통합지속적 배포처럼 새로운 기술이나 문제 해결에 필요한 지식에 대해 지속적인 학습과 응용이 필요하다고 생각합니다.\n\n 이러한 생각을 바탕으로 이론적 학술적인 측면의 학습과 이를 이용한 실습이나 사이드 프로젝트를 통해 지속적으로 기술을 습득해왔으며 컴퓨터 정보공학을 전공하며 데이터 처리 방법과 문제 해결을 위한 다양한 알고리즘을 공부하고 있으며 특히 Python의 다양한 모듈을 활용하여 데이터 사이언스 머신러닝 딥러닝 분야를 깊이 있게 학습하였습니다.\n\n 현재 저는 DBpia에서 AI 관련 논문을 읽어보거나 논문 재현 영상과 교재를 이용한 자연어 처리 공부 등으로 자기 계발에 힘쓰고 있습니다 이를 통해 좀 더 좋은 예측 모델을 만들어 내는 ML 개발자가 되기 위해 노력하고 있습니다\n\n",
//   imgURL:"/assets/img/profile_img.jpg"
// };

const Intro = () => {

  const [ introduction, setIntroData ] = useState({});
  const [birth, setBirth] = useState(new Date());
  const [introduce, setIntroduce] = useState(" "); 
  const [fetchedLoading, setFetchedLoading] = useState(true); 
  const [githubURL, setGithubURL] = useState("");
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const today = new Date();


  useEffect(() => {
    const fetchIntroData = async () => {
      const data = await getIntroduceData();
      setIntroData(data);

      console.log("intro 데이터 패치 완료");
      console.log(data);
      setFetchedLoading(false);
      // 
    }
    fetchIntroData();
  },[])
  
  useEffect(() => {
    if(Object.keys(introduction).length > 0){
      const birthToDate = introduction.birth.toDate();
      setBirth(birthToDate);
    //   const formattedIntroduce = introduction.introduce
    // .split("\n")
    // .map((line, index) => <p key={index}>{line}<br/></p>); 
    const introduce_cont = introduction.introduce
    setIntroduce(introduce_cont);
    console.log(formattedIntroduce);
    setGithubURL(introduction.github);
      // console.log(getType(introduce_cont), introduce_cont);
    }
  },[fetchedLoading, introduction])


  // 만 나이 계산
  const age =
    today.getFullYear() - birth.getFullYear()
    - (today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate()) 
    ? 1 : 0);

    const formattedIntroduce =
    typeof introduce === "string"
      ? introduce.split("\\n").map((line, index) => <p key={index}>{line}<br /></p>)
      : null;

    const gitHubSplit = githubURL.split("//").pop();
    
  return (
    <section id="intro">
      <div className="intro__inner">
        <h2 className="intro__title">
          INTRODUCTION <em>자기소개</em>
        </h2>
        <div className="intro__wrap">
          <div className="intro__img">
            <img src={introduction.imgURL} />
          </div>
          <div className="intro__content">
            <h1>
              {introduction.NameKor}({introduction.NameEng})
            </h1>
            <div>
              <img src={birthIcon} alt="SVG" />
              <p>
                : {birth.getFullYear()}.
                {birth.getMonth().toString().padStart(2, "0")}.
                {birth.getDate()}( 만 {age} 세 )
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
                : {gitHubSplit}
              </a>
            </div>
          </div>
        </div>
        <div className="intro__intoduce">
          <Divider>{introduction.introduce_title}</Divider>
          {formattedIntroduce}
        </div>
        {isLoggedIn && (
          <Button
            type="primary"
            onClick={() => navigate("/edit-intro")}
          >
            수정
          </Button>
        )}
      </div>
    </section>
  );
};

export default Intro;
