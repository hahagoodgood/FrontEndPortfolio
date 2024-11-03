import React from "react";

const skillText = [
    {
      title: "Python(4/5)",
      desc: "빅데이터 분석, 머신러닝/딥러닝 학습, 데이터 사이언스, 코딩테스트 등을 공부하여 높은 수준의 성취도를 가지고 있습니다.",
    },
    {
      title: "Java(3.5/5)",
      desc: "학과 커리큘럼에 많이 접하게 되는 언어로, 스프링, 스윙, 안드로이드 등을 하면서 높은 수준의 성취도를 가지고 있습니다.",
    },
    {
      title: "GitHub(2.5/5)",
      desc: " 프로젝트를 진행하며 지속적으로 사용한 기술로, 준수한 수준의 성취도를 가지고 있습니다.",
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
