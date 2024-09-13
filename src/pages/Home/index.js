import React from "react";

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

import style from "./index.module.css";

import { BsStars } from "react-icons/bs";
import { HiLightningBolt } from "react-icons/hi";

import illustration from "../../assets/home_illustration.jpg";

const Index = () => {
  return (
    <div className={style.home__page}>
      <Header />
      <div className={style.home__content}>
        <div className={style.first__section}>
          <h1>MyTableTop</h1>
          <h2>Créez des histoires, des jeux et des animations avec Blockly</h2>
          <div className={style.button__content}>
            <button
              type="button"
              className={`${style.btn} ${style.btn__primary}`}
            >
              <div className={style.btn__style}>
                <BsStars />
                Commencer à créer
              </div>
            </button>
            <button
              type="button"
              className={`${style.btn} ${style.btn__secondary}`}
            >
              <div className={style.btn__style}>
                <HiLightningBolt />
                Autre btn
              </div>
            </button>
          </div>
        </div>
        <img src={illustration} alt="logo" />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
