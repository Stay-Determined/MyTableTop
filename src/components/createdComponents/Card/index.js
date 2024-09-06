import React from 'react';


import piques from '../../../assets/Cartes/pique';
import trefles from '../../../assets/Cartes/trefle'
import carreaux from '../../../assets/Cartes/carreau';
import coeurs from '../../../assets/Cartes/coeur';

const index = ({ textNombre, textFamille }) => {
  var image = null;
  var famille = null;


switch(textFamille){
  case "PIQUE":
    famille = piques;
  break;

  case "TREFLE":
    famille = trefles;
  break;

  case "COEUR":
    famille = coeurs;
  break;
  
  case "CARREAU":
    famille = carreaux;
  break;

  default:
    image = "none";
  break;
}

switch (textNombre){
  case "AS":
    image = famille.img1;
  break;

  case "DEUX":
    image = famille.img2;
  break;

  case "TROIS":
    image = famille.img3;
  break;

  case "QUATRE":
    image = famille.img4;
  break;

  case "CINQ":
    image = famille.img5;
  break;

  case "SIX":
    image = famille.img6;
  break;

  case "SEPT":
    image = famille.img7;
  break;

  case "HUIT":
    image = famille.img8;
  break;

  case "NEUF":
    image = famille.img9;
  break;

  case "DIX":
    image = famille.img10;
  break;

  case "VALET":
    image = famille.img11;
  break;

  case "DAME":
    image = famille.img12;
  break;

  case "ROI":
    image = famille.img13;
  break;

  default:
    image = "none";
  break;
}





  return (
    <img src={image} alt="card" style={{margin: "auto"}}/>
  );
};


export default index;