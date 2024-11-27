import React from "react";
import Port from "../components/Port";
import Main from "../components/Main";
import Footer from "../components/Footer";

const HomePort = () => {
  return (
    //React Fragment
    <> 
      <Main>
        {/* <Skill /> */}
        {/* <Site /> */}
        <Port />
        {/* <Contact /> */}
      </Main>
      <Footer /> 
    </>
  );
};

export default HomePort;