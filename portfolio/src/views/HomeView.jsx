import React from "react";
import Intro from "../components/Intro";
import Main from "../components/Main";
import Footer from "../components/Footer";

const HomeView = () => {
  return (
    <> 
      <Main>
        <Intro />
      </Main>
      <Footer /> 
    </>
  );
};

export default HomeView;