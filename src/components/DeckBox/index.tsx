import React from "react";
import CardBox from '../CardBox';
import './index.css';

/**
class Card {
  rank: string|number;
  suit: string;

  constructor(rank: string|number, suit: string) {
    this.rank = rank;
    this.suit = suit;
  }
}

let oneCard = new Card(2, 'Hearts');

class Deck {
  deck: {}[]
  constructor(deck: []) {
    this.deck = deck;
    this.reset();
    //
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push({ 'rank': values[value], 'suit': suits[suit] });
      }
    }
    //
  }

  shuffle(){
    const { deck } = this;
    let m = deck.length, i;
    // simplify
    while(m){
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  dealOneCard(){
    // TODO:take a random card, remove this random card from the deck, display it as selected card. 
    function getRandomCardId(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1));
    }
    let randomCardId = getRandomCardId(0, 51);
    //return this.deck.pop();
    return this.deck.splice(randomCardId, 1);
    //return {card: this.deck[randomCardId]};
  }

  // reset deck before deal a card
  reset(){
    this.deck = [];

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(new Card(values[value], suits[suit]));
      }
    }
  }
}

let deck1 = new Deck([]);
console.log(deck1.deck);
deck1.shuffle()
console.log(deck1.deck);

let card = deck1.dealOneCard()
console.log(deck1.deck, card[0])

deck1.reset()
deck1.shuffle()
console.log(deck1.deck);

card = deck1.dealOneCard()
console.log(deck1.deck, card);
console.log("test card", Object.values(card[0]).map((value)=> value))
const kList = Object.entries(oneCard).map(([key,value])=>{
  return (
    <div key = {key}>{key} : {value.toString()}</div>
  );
})
 */
type Props = {
  data: any[]
}

const DeckBox: React.FC<Props>= (props) => {
  const { data } = props;
  console.log("default Deck data", data)
    return (
      <div className="DeckContent">
        <div className="container">
          {data.map((card, index) => {
            return (
              <div className="animated slideInDown" key={index}>
                <CardBox rank={card.rank} suit={card.suit} />
              </div>
            ); 
          })}
        </div>
      </div>
    )
};     
export default DeckBox;