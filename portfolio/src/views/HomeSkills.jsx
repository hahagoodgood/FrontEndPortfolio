import React from "react";
import Skill from "../components/Skill";
import Main from "../components/Main";
import Footer from "../components/Footer";

const HomeSkills = () => {
  return (
    //React Fragment
    <> 
      <Main>
        <Skill />
      </Main>
      <Footer /> 
    </>
  );
};

export default HomeSkills;