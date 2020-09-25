import React from "react";
import CardBox from '../CardBox';
import './index.css';

interface ICard {
  rank: string|number;
  suit: string;
}
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
  }*/

  /*
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
  data: ICard[],
  parentOneCardCallback(card: ICard): void,
  parentShuffleCallback(data: ICard[]): void
}

const DeckBox: React.FC<Props>= (props) => {
  const { data } = props;
  console.log("default Deck data", data[0], data[1])

  const shuffle = (data: any[]) => {
    let m = data.length;
    let i = 0;
    while(m){
      i = Math.floor(Math.random() * m--);
      [data[m], data[i]] = [data[i], data[m]];
    }
    console.log('Here shuffle', data[0], data[1])
    props.parentShuffleCallback(data);
    return data;
  }

  const dealOneCard = (card:ICard, id:number) => {
    props.parentOneCardCallback(card);
    props.data.splice(id, 1);
    //return {card: this.deck[randomCardId]};
  }
    return (
      <div className="DeckContent">
        <div className="container">
          {data.map((card: ICard, index) => {
            return (
              <div className="animated slideInDown" key={index} onClick={() => dealOneCard(card, index)}>
                <CardBox rank={card.rank} suit={card.suit} />
              </div>
            ); 
          })}
        </div>
        <div className="button-container">
          <button onClick={() => shuffle(data)}>Shuffle</button>
        </div>
      </div>
    )
};     
export default DeckBox;