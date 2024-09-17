import React from 'react';

import style from "./index.module.css";

import illustration from "../../assets/Illustrations/echec_illustration.jpg";

const Index = () => {
    return (
        <div className={style.error__page}>
            <h1>Oups... Partie manquante !</h1>
            <p>Il semblerait que vous ayez tiré une carte "Page Introuvable" ! Pas d'inquiétude, vous n'avez pas perdu la partie. Voulez-vous :</p>
            <ul>
                <li><a href="/">Retourner au plateau principal</a> (retour à page d'accueil)</li>
                <li><a href="/projects/editor">Tenter une nouvelle stratégie</a> (créer un jeux de société)</li>
            </ul>
            <p>On dirait que cette page s'est cachée mieux qu'un pion dans une partie de cache-cache ! Essayez de revenir au point de départ, peut-être que vous trouverez ce que vous cherchez. 
            Bonne chance, et que les cartes soient avec vous !</p>

            <img src={illustration} alt="logo" />
        </div>
    );
}

export default Index;
