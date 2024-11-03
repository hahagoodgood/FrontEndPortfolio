import React from "react";
import about from "../assets/img/about.jpg";

const introText = {
    title: "port developer",
    desc: ["talent is", "found at the end of the", "effort"],
};


const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h2 className="intro__title">INTRODUCTION <em>자기소계</em></h2>
                <div className="intro__wrap">
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
                    </div>
                    <div>
                        <span>1</span> 
                        <h3>1212</h3>
                        <p>12</p>
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