import React from "react";
import "./index.css";
import club from "../../images/club.svg";
import spade from "../../images/spade.svg";
import heart from "../../images/heart.svg";
import diamond from "../../images/diamond.svg";

/**
class Card {
  rank: string|number;
  suit: string;

  constructor(rank: string|number, suit: string) {
    this.rank = rank;
    this.suit = suit;
  }
}

let oneCard = new Card(2, 'Spade');
 */

type Props = {
  rank: string|number;
  suit: string;
}
const CardBox = (props: Props) => {
  const { rank, suit } = props;

  const getCardIcon = (suit: string) => {
    switch(suit) {
      case "Diamond":
        return {icon: diamond, color: 'red'};
      case "Heart":
        return {icon: heart, color: 'red'};
      case "Club":
        return {icon: club, color: 'black'};
      case "Spade":
        return {icon: spade, color: 'black'};
      default:
        return null;
    };
  };

  const cardIcon = getCardIcon(suit)

  console.log("Here card", rank, suit, cardIcon)
    return (
      <div className="OneCard" style={{ color: `${cardIcon?.color}` }}>
        <div style={{ position: "absolute", top: 5, left: 5 }}>
          <div style={{ maxWidth: 20 }}>{rank}</div>
          <img src={cardIcon?.icon} style={{ maxWidth: 20 }}/>
        </div>
        <div>
          <img src={cardIcon?.icon} style={{ height: 40, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
        </div>
        <div style={{ position: "absolute", bottom: 5, right: 5, transform: "rotate(-180deg)" }}>
          <div style={{ maxWidth: 20 }}>{rank}</div>
          <img src={cardIcon?.icon} style={{ maxWidth: 20 }}/>        
        </div>
      </div> 
    );
}; 
export default CardBox;