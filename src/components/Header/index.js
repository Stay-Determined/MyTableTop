import React from "react";

import { Link } from "react-router-dom";

import style from "./index.module.css";

const Header = () => {
  return (
    <nav className={style.header}>
      <div className={style.header__content}>
        <ul>
          <Link to="/">
            <li>Acceuil</li>
          </Link>
          <Link to="/projects/editor">
            <li>Créer</li>
          </Link>
          <Link to="/">
            <li>Jouer</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
