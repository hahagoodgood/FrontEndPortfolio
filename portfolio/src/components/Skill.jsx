import React from "react";

const skillText = [
  {
    title: "Python(4/5)",
    desc: "빅데이터 분석, 머신러닝/딥러닝 학습, 데이터 사이언스, 코딩테스트 등을 공부하여 높은 수준의 성취도를 보유하고 있습니다.",
  },
  {
    title: "Pandas(4/5)",
    desc: "빅데이터 분석, 머신러닝/딥러닝 학습, 데이터 사이언스 등을 수행하면서 데이터 프레임 형식의 데이터를 가공, 사용, 응용을 할 수 있는 수준의 성취도를 보유하고 있습니다.",
  },
  {
    title: "Matplotlib(4/5)",
    desc: "빅데이터 분석, 머신러닝/딥러닝 학습, 데이터 사이언스 등을 수행하면서 데이터를 시각화하여 데이터 간의 상관 관계를 분석할 수 있을 수준의 공부하여 높은 수준의 성취도를 보유하고 있습니다.",
  },
  {
    title: "scikit-learn(4/5)",
    desc: "빅데이터 분석, 머신러닝/딥러닝 학습, 데이터 사이언스, 코딩테스트 등을 공부하여 높은 수준의 성취도를 보유하고 있습니다.",
  },
  {
    title: "javaScript(3.5/5)",
    desc: "학과 커리큘럼과 개인 웹 프로젝트를 진행하면서 준수한 웹에서 동작할 수 있는 코드를 제작할 수준의 성취도를 보유하고 있습니다.",
  },
  {
    title: "Node.js(3.5/5)",
    desc: "학과 커리큘럼과 개인 웹 프로젝트를 진행하면서 준수한 웹에서 보유하고 있는 서버 프로그램을 구축할 수 있는 수준의 성취도를 보유하고 있습니다.",
  },
  {
    title: "react.js(4/5)",
    desc: "학과 커리큘럼과 개인 웹 프로젝트를 진행하면서 준수한 웹에서의 UI/UX를 제작할 수준의 성취도를 보유하고 있습니다.",
  },
  {
    title: "SQL(4/5)",
    desc: "학과 커리큘럼과 개인 웹 프로젝트를 진행하면서 MySQL, Oracle 등의 RDBMS를 다룰 수 있으며, ERD와 같은 문서화를 할 수 있는 수준의 성취도를 보유하고 있습니다.",
  },
  {
    title: "Java(3.5/5)",
    desc: "학과 커리큘럼에 많이 접하게 되는 언어로 웹 개발, 스윙, 앱 개발 등을 하면서 높은 수준의 성취도를 보유하고 있습니다.",
  },
  {
    title: "Java(3/5)",
    desc: "학과 커리큘럼을 이수하면서 기초적인 웹에서 보유하고 있는 서버 프로그램을 구축할 수 있는 수준의 성취도를 보유하고 있습니다.",
  },
  {
    title: "GitHub(3/5)",
    desc: " 프로젝트를 진행하며 지속적으로 사용한 기술로, 준수한 수준의 성취도를 보유하고 있습니다.",
  },
];

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          Skills <em>기술 스택</em>
        </h2>
        <div className="skill__desc">
          {skillText.map((skill, key) => (
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
