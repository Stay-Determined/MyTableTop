import React from "react";

import { Link } from "react-router-dom";

import style from "./index.module.css";

const Header = () => {
  return (
    <nav className={style.header}>
      <div className={style.header__content}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/projects/editor">
            <li>Create</li>
          </Link>
          <Link to="/">
            <li>Play</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
