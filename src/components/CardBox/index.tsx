import React, { useEffect } from "react";
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

  const getCardIcon = (suit: string) => {
    let icon;
    switch(suit) {
      case "Diamond":
        console.log('Diadmod', diamond)
        return icon = diamond;
      case "Heart":
        return icon =heart;
      case "Club":
        return icon =club;
      case "Spade":
        return icon=spade;
      default:
        return icon;
    };
  };
  

  //console.log("Here card", rank, suit, getCardIcon(suit))
    return (
      <div className="OneCard" style={{ color: `` }}>
        <div style={{ position: "absolute", top: 5, left: 5 }}>
          <div style={{ maxWidth: 20 }}>{rank}</div>
          <img src={getCardIcon(suit)} style={{ maxWidth: 20 }}/>
        </div>
        <div>
          <img src={getCardIcon(suit)} style={{ height: 40, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
        </div>
        <div style={{ position: "absolute", bottom: 5, right: 5, transform: "rotate(-180deg)" }}>
          <div style={{ maxWidth: 20 }}>{rank}</div>
          <img src={getCardIcon(suit)} style={{ maxWidth: 20 }}/>        
        </div>
      </div> 
    );
}; 
export default CardBox;