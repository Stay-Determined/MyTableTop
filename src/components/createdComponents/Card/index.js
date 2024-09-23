import React, { useEffect, useState } from "react";

import spade from "../../../assets/Cards/spade";
import clover from "../../../assets/Cards/clover";
import diamond from "../../../assets/Cards/diamond";
import heart from "../../../assets/Cards/heart";
import back from "../../../assets/Deck/back_deck.png";

import style from "./index.module.css";
import Index from "../../Footer";

const Card = ({ textNombre, textFamille }) => {
  const [imageContent, setImageContent] = useState("");
  const [isClicked, setIsClicked] = useState(true)

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    var famille = null;
  
    switch (textFamille) {
      case "PIQUE":
        famille = spade;
        break;
  
      case "TREFLE":
        famille = clover;
        break;
  
      case "COEUR":
        famille = heart;
        break;
  
      case "CARREAU":
        famille = diamond;
        break;
  
      default:
        setImageContent("none");
        break;
    }
  
    switch (textNombre) {
      case "AS":
        setImageContent(famille.img1);
        break;
  
      case "DEUX":
        setImageContent(famille.img2);
        break;
  
      case "TROIS":
        setImageContent(famille.img3);
        break;
  
      case "QUATRE":
        setImageContent(famille.img4);
        break;
  
      case "CINQ":
        setImageContent(famille.img5);
        break;
  
      case "SIX":
        setImageContent(famille.img6);
        break;
  
      case "SEPT":
        setImageContent(famille.img7);
        break;
  
      case "HUIT":
        setImageContent(famille.img8);
        break;
  
      case "NEUF":
        setImageContent(famille.img9);
        break;
  
      case "DIX":
        setImageContent(famille.img10);
        break;
  
      case "VALET":
        setImageContent(famille.img11);
        break;
  
      case "DAME":
        setImageContent(famille.img12);
        break;
  
      case "ROI":
        setImageContent(famille.img13);
        break;
  
      default:
        setImageContent("");
        break;
    }
  },[textFamille, textNombre]);

  return (
    <div>
      <img 
      src={!isClicked? imageContent: back } 
      alt="card"
      onClick={handleClick} 
      style={{ margin: "auto" }} />
    </div>
  )
};

export default Card;