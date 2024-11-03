import React from "react";

const portText = [
    {
        num: "01",
        title: "제목",
        desc: "설명",
        // img: port01,
        code: "https://gmail.com",
        view: "https://naver.com",
        name: "glgglg",
    },
    {
        num: "02",
        title: "제목",
        desc: "설명",
        // img: port01,
        code: "https://gmail.com",
        view: "https://naver.com",
        name: "glgglg",
    },
   
];


const Port = () => {
    return (
        <section id="port">
            <div className="port__inner">
                <div className="port__title">
                    portfolio <em>포폴 작업물</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article className={`port__item p${key + 1}`} key={key}>
                            <span className="num">{port.num}.</span>
                            <a href={port.code} target="_blank" className="img" rel="noreferrer">
                                {/* <img src={port.img} alt={port.name} /> */}
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" className="site" rel="noreferrer">사이트 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;