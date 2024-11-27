import React, { useEffect, useRef } from "react";
import android from "../assets/img/android.png";
import gagood from "../assets/img/GAGOOD.png"
import simulation from "../assets/img/simulation.png"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const portText = [
    {
        num: "01",
        title: "제22회 한국시뮬레이션학회 경진대회 출품작",
        desc: "AnyLogic을 활용하여 한국 시뮬레이션학회에서 진행하는 경진대회의 출품작을 제출하였습니다.\n파운더리 공장 최적화 로직을 제작하였으며 해당 출품작에서는 병목현상, 교착상태 등의 원인 분석과 문제해결을 진행하였습니다.",
        img: simulation,
        code: "",
        view: "https://github.com/hahagoodgood/simulation",
        // name: "glgglg",
    },
    {
        num: "02",
        title: "가구 쇼핑몰 웹 페이지 제작",
        desc: "사용자 계정과 관리자 계정의 권한들 다르게 두어 컴퓨터과학적 지식이 없는 관리자가 서비스를 사용할 수 있도록 하는 서비스 입니다. 해당 프로젝트로 텍스트가 아닌 자료를 다루는 방식과 사용자 별 권한 구별방법 관리자 입장 서비스 재공 방법등을 알게 되었습니다",
        img: gagood,
        code: "",
        view: "https://github.com/hahagoodgood/gagoodmarket-web",
        // name: "glgglg",
    },
    {
        num: "03",
        title: "안드로이드 todo list",
        desc: "java와 firebase, 안드로이드 스튜디오를 활용하여 개발한 To-Do 리스트 애플리케이션입니다. 안드로이드 환경에서 할 일 목록을 관리할 수 있는 기능을 제공합니다.",
        img: android,
        code: "",
        view: "https://github.com/hahagoodgood/todotodo_malangmalang_list",
        // name: "glgglg",
    },
    
   
];


const Port = () => {

    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;
    if (horizontal && sections.length > 0) {
        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
            trigger: horizontal,
            start: "top 56px",
            end: () => "+=" + horizontal.offsetWidth,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            },
        });
    
        return () => {
            scrollTween.kill();
        };
    }
    }, []);

    return (
        <section id="port">
            <div className="port__inner">
                <div className="port__title">
                    portfolio <em>포폴 작업물</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article className={`port__item p${key + 1}`} key={key} ref={(el) => (sectionsRef.current[key] = el)}>
                            <span className="num">{port.num}.</span>
                            <a className="img" rel="noreferrer">
                                <img src={port.img} alt={port.name} />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" className="site" rel="noreferrer">GitHub</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;