// import logo from './logo.svg';
// import './App.css';
import React from "react";
import{BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./views/HomeView";

function App() {

  ////초기 세팅
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
