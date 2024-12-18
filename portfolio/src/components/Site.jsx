import React from "react";

const siteText = [
    {
        text: ["simulation", "Anylogic", "java"],
        title: "제22회 한국시뮬레이션학회 경진대회 출품작",
        code: "https://github.com/hahagoodgood/simulation",
        info: [
            "사용프로그램:AnyLogic",
            "프로젝트 진행 : two days",
            "use stack : HTML5/CSS3, CSS Variable, Vite",
        ],
    },
    {
        text: [ "Web","react", "JavaScript"],
        title: "제22회 한국시뮬레이션학회 경진대회 출품작",
        code: "https://github.com/hahagoodgood/gagoodmarket-web",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, Vite",
        ],
    },
    {
        text: [ "App","Android", "Java"],
        title: "안드로이드 todo list",
        code: "https://github.com/hahagoodgood/todotodo_malangmalang_list",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, CSS Variable, Vite",
        ],
    },
];

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">Site coding <em>나의 작업물</em></h2>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <article className={`site__item s${key+1}`} key={key}>
                            <span className="num">{key+1}.</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="btn">
                                <a href={site.code}>code</a>
                                {/* <a href={site.view}>view</a> */}
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Site;