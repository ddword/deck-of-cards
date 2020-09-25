import React, { useState, useEffect } from "react";
import "./index.css";
import club from "../../images/club.svg";
import spade from "../../images/spade.svg";
import heart from "../../images/heart.svg";
import diamond from "../../images/diamond.svg";

interface ICard {
  rank: string|number;
  suit: string;
}

type Props = {
  rank: string|number;
  suit: string;
}
const CardBox = (props: Props) => {
  const { rank, suit } = props;
  let [icon, setIcon] = useState<string|undefined>(undefined);

  useEffect(() => {
    let result = getCardIcon(suit);
    setIcon(result)
  },[icon])

  const getCardIcon = (suit: string) => {
    let x;
    if (suit === "Diamonds") {
      x = diamond;
    }
    if (suit === "Hearts") {
      x = heart;
    }
    if (suit === "Clubs") {
      x = club
    }
    if (suit === "Spades") {
      x = spade
    }
    return x;
  };

  return (
    <div className="OneCard">
      <div style={{ position: "absolute", top: 5, left: 5 }}>
        <div style={{ maxWidth: 20 }}>{rank}</div>
        <img src={icon} style={{ maxWidth: 20 }}/>
      </div>
      <div>
        <img src={icon} style={{ height: 40, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
      </div>
      <div style={{ position: "absolute", bottom: 5, right: 5, transform: "rotate(-180deg)" }}>
        <div style={{ maxWidth: 20 }}>{rank}</div>
        <img src={icon} style={{ maxWidth: 20 }}/>        
      </div>
    </div> 
  );
}; 
export default CardBox;