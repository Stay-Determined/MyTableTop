import React from "react";

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

import style from "./index.module.css";

import illustration from "../../assets/Illustrations/about_illustration.jpg";

const Index = () => {
  return (
    <div className={style.about__page}>
      <Header />

      <div className={style.about__content}>
        <h1>A propos de MyTableTop</h1>
        <div className={style.first__section}>
          <div>
            <h2>Notre mission </h2>
            <p>
              Chez MyTableTop, nous croyons que la créativité doit être
              accessible à tous, sans nécessiter de compétences en
              programmation. C'est pourquoi nous avons conçu une application qui
              permet à chacun de créer des jeux de société, des histoires
              interactives ou des animations.
            </p>
            <p>
              Notre objectif est d'encourager les créateurs de tout âge à
              explorer et partager leurs idées.
            </p>

            <h2>L'idée derrière MyTableTop et la révolution No-Code</h2>
            <p>
              Les jeux de société rassemblent les gens pour des moments de
              réflexion et de partage. Toutefois, leur création a souvent été
              perçue comme complexe et réservée aux professionnels. MyTableTop
              simplifie ce processus grâce à la puissance du no-code. En
              quelques clics, sans écrire une seule ligne de code, chacun peut
              concevoir des jeux interactifs de manière intuitive, aussi simple
              que d'assembler des blocs. Nous rendons la création accessible à
              tous, permettant à chaque utilisateur de donner vie à ses idées et
              de créer des projets innovants.
            </p>
          </div>
          <div>
            <img src={illustration} alt="logo" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
