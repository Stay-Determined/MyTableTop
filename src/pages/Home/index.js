import React from "react";

import { Link } from "react-router-dom";

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

import style from "./index.module.css";

import { BsStars } from "react-icons/bs";
import { HiLightningBolt } from "react-icons/hi";

import illustration from "../../assets/Illustrations/home_illustration.jpg";

const Index = () => {
  return (
    <div className={style.home__page}>
      <Header />
      <div className={style.home__content}>
        <div className={style.first__section}>
          <h1>MyTableTop</h1>
          <h2>Créez des jeux de société sans coder !</h2>
          <p>
            MyTableTop vous permet de créer des jeux de société, des histoires
            interactives et des animations facilement, sans coder.
          </p>
          <p>
            Grâce à la bibliothèque Blockly de no-code, vous pouvez simplement
            assembler des blocs pour donner vie à vos idées. Que vous soyez
            novice ou créateur confirmé, MyTableTop vous donne les outils pour
            imaginer, développer et partager vos propres jeux interactifs en
            quelques clics.
          </p>
          <div className={style.button__content}>
            <Link to="/projects/editor">
              <button
                type="button"
                className={`${style.btn} ${style.btn__primary}`}
              >
                <div className={style.btn__style}>
                  <BsStars />
                  Créer
                </div>
              </button>
            </Link>
            <Link to="/about">
              <button
                type="button"
                className={`${style.btn} ${style.btn__secondary}`}
              >
                <div className={style.btn__style}>
                  <HiLightningBolt />A propos
                </div>
              </button>
            </Link>
          </div>
        </div>
        <img src={illustration} alt="logo" />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
