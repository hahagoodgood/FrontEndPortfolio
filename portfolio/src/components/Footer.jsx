import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Footer = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem("isLoggedIn");
    setIsLoggedIn(session === "ture");
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      sessionStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      alert("로그아웃 되었습니다.");
    } else {
      navigate("/login");
    }
  };
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__text">
          <span>Inha Technical COLLEGE</span>
        </div>
        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a 
              onClick={handleButtonClick}>
                {isLoggedIn ? "Logout" : "LogIn"}
              </a>
              {/* <button
                                type={isLoggedIn ? "default" : "primary"}
                                onClick={handleButtonClick}
                            >
                                {isLoggedIn ? "로그아웃" : "로그인"}
                            </button> */}
            </div>
            <p>회원가입을 하시면 수정하실 수 있으십니다.</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul></ul>
          </div>
        </div>
        <div className="footer__right">
          © 이 사이트의 UI는 webstoryboy를 참고하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
