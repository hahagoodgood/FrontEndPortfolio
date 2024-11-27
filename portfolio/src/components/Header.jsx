import React, { useState } from "react";
import { Link } from "react-router-dom";

const headerNav = [
  {
    title: "intro",
    url: "/",
  },
  {
    title: "skill",
    url: "/skills",
  },
  {
    title: "portfolio",
    url: "/port",
  },
  {
    title: "career",
    url: "/career",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            Kim_DONG_HYUK<em>portfolio</em>
          </a>
        </div>
        <nav
          className={`header__nav ${show ? "show" : ""}`}
          role="navigation"
          aria-label="메인 메뉴"
        >
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <Link to={nav.url}>{nav.title}</Link>
                {/* {nav.url.startsWith("/") ? (
                  <Link to={nav.url}>{nav.title}</Link>
                ) : (
                  <a href={nav.url}>{nav.title}</a>
                )} */}
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          role="button"
          tabIndex="0"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
