import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import Skip from "../components/Skip";
import Main from "../components/Main";
import Education from "../components/Education";

const HomeView = () => {
  return (
    //React Fragment
    <> 
      {/* <Skip /> */}
      {/* <Header /> */}
      <Main>
        {/* <Skill /> */}
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
        <Education />
      </Main>
      {/* <Footer /> */}
    </>
  );
};

export default HomeView;