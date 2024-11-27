import React from "react";
import Main from "../components/Main";
import Education from "../components/Education";
import Footer from "../components/Footer";

const HomeCareer = () => {
  return (
    //React Fragment
    <> 
      <Main>
        {/* <Intro /> */}
        {/* <Skill /> */}
        {/* <Site /> */}
        {/* <Port /> */}
        {/* <Contact /> */}
        <Education />
      </Main>
      <Footer /> 
    </>
  );
};

export default HomeCareer;