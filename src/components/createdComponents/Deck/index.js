import React, { useState } from "react";

import spade from "../../../assets/Cards/spade";
import clover from "../../../assets/Cards/clover";
import diamond from "../../../assets/Cards/diamond";
import heart from "../../../assets/Cards/heart";
import deck from "../../../assets/Deck/back_deck.png"
import draw from "../../../assets/Deck/draw.png"
import shuffle from "../../../assets/Deck/shuffle.png"
import arrayShuffle from 'array-shuffle';

const Deck = () => {
  var cartesDeck = ["1s","2s","3s","4s","5s","6s","7s","8s","9s","10s","11s","12s","13s",
              "1c","2c","3c","4c","5c","6c","7c","8c","9c","10c","11c","12c","13c",
              "1d","2d","3d","4d","5d","6d","7d","8d","9d","10d","11d","12d","13d",
              "1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h"];
  var image = null;
  var famille = null;
  const [carte, setCarte] = useState(null);
  
  const [listeCarte, setListeCarte] = useState(cartesDeck);

  function melangerDeck() {
    setListeCarte(arrayShuffle(listeCarte));
  }
  

  function pioche(){
    
    switch (listeCarte[0].slice(-1)) {
      case "s":
        famille = spade;
        break;
      case "c":
        famille = clover;
      break;
      case "d":
        famille = diamond;
      break;
      case "h":
        famille = heart;
      break;
      default:
        famille = "none";
      }

      switch (listeCarte[0].slice(0,-1)) {
        case "1":
          image = famille.img1;
          break;
    
        case "2":
          image = famille.img2;
          break;
    
        case "3":
          image = famille.img3;
          break;
    
        case "4":
          image = famille.img4;
          break;
    
        case "5":
          image = famille.img5;
          break;
    
        case "6":
          image = famille.img6;
          break;
    
        case "7":
          image = famille.img7;
          break;
    
        case "8":
          image = famille.img8;
          break;
    
        case "9":
          image = famille.img9;
          break;
    
        case "10":
          image = famille.img10;
          break;
    
        case "11":
          image = famille.img11;
          break;
    
        case "12":
          image = famille.img12;
          break;
    
        case "13":
          image = famille.img13;
          break;
    
        default:
          image = "none";
          break;
        
  };
  
  setCarte(image);
  listeCarte.shift();
  };


 return (
  <div>
    
     {listeCarte.length > 0 &&
     (<div>
          <img src={shuffle} alt="shuffle" style={{ margin: "auto", cursor : "pointer" }} onClick={melangerDeck} />
          {/* <img src={deck} alt="card"/> */}
          <img src={draw} alt="draw" style={{ margin: "auto", cursor : "pointer" }} onClick={pioche} />
      </div>)}
    
    {carte && <img src={carte} alt="card" style={{ margin: "auto" }} />}
  
   
    </div>
 );
};

export default Deck;
