import React from "react";
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

const Intro = () => {
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
      {/* <div class="intro__inner">
                <h1 class="intro__title">{introText.title}</h1>
                <div class="intro__lines" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                <div class="intro__text">
                    <div class="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div class="img">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>
                <div class="intro__lines bottom" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div> */}
    </section>
  );
};

export default Intro;
