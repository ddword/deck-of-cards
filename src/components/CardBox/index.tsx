import React, { useState, useEffect } from "react";
import "./index.css";
import club from "../../images/club.svg";
import spade from "../../images/spade.svg";
import heart from "../../images/heart.svg";
import diamond from "../../images/diamond.svg";

interface ICard {
  rank: string|number;
  suit: string;
  id: number;
}

type Props = {
  rank: string|number;
  suit: string;
  id: number;
}
const CardBox = (props: Props) => {
  const { rank, suit, id } = props;
  let [icon, setIcon] = useState<string|undefined>(undefined);

  useEffect(() => {
    let result = getCardIcon(suit);
    console.log("Suit icon",result, suit)
    setIcon(result)
  },[icon])

  const getCardIcon = (suit: string) => {
    let symbol;
    switch(suit) {
      case "Diamonds":
        return symbol = diamond;
      case "Hearts":
        return symbol = heart;
      case "Clubs":
        return symbol = club;
      case "Spades":
        return symbol = spade;
      default:
        return symbol;
    };
  };
  /**
   * <div className="symbolTop" style={{ position: "absolute", top: 5, left: 5 }}>
        <div className="cardRank" style={{ maxWidth: 20 }}>{rank}</div>
        <img className="suitIcon" src={icon} style={{ width: 20 }}/>
      </div>
      <div>
        <img className="symbolCenter" src={icon} style={{ height: 40, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
      </div>
      <div className="symbolBottom" style={{ position: "absolute", bottom: 5, right: 5, transform: "rotate(-180deg)" }}>
        <div className="cardRank" style={{ maxWidth: 20 }}>{rank}</div>
        <img className="suitIcon" src={icon} style={{ width: 20 }}/>        
      </div>
   */

  return (
    <div className="OneCard">
      <div className="symbolTop">
        <div className="cardRank">{rank}</div>
        <img className="suitIcon" src={icon} />
      </div>
      <div>
        <img className="symbolCenter" src={icon} />
      </div>
      <div className="symbolBottom">
        <div className="cardRank">{rank}</div>
        <img className="suitIcon" src={icon} />        
      </div>
    </div> 
  );
}; 
export default CardBox;