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
  back: boolean;
}
const CardBox = (props: Props) => {
  const { rank, suit, id, back } = props;
  let [icon, setIcon] = useState<string|undefined>(undefined);

  useEffect(() => {
    let result = getCardIcon(suit);
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
  
  return (
    <div>
      { 
        (back === false) ?
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
        :  <div className="BackCard"></div>
      }
    </div>  
  ); 
}; 
export default CardBox;