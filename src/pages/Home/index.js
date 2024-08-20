import React from "react";

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

import style from "./index.module.css";

import { BsStars } from "react-icons/bs";
import { HiLightningBolt } from "react-icons/hi";

import illustration from "../../assets/home_illustration.png";

const Index = () => {
  return (
    <div className={style.home__page}>
      <Header />

      <div className={style.home__content}>
        <div className={style.first__section}>
          <h1>Create stories, games, and animations with Blockly</h1>
          <div className={style.button__content}>
            <button
              type="button"
              className={`${style.btn} ${style.btn__primary}`}
            >
              <div className={style.btn__style}>
                <BsStars />
                Start creating
              </div>
            </button>

            <button
              type="button"
              className={`${style.btn} ${style.btn__secondary}`}
            >
              <div className={style.btn__style}>
                <HiLightningBolt />
                Other btn
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
