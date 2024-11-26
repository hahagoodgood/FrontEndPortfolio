// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import Login from "./views/Login";
import Header from "./components/Header";
import testFirebaseConnection from "./firebase/testFirebase"

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

  React.useEffect(() => {
    testFirebaseConnection();
  }, []);

  return (
    <Router future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
