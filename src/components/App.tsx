import React, { useState } from 'react';
import DeckBox from './DeckBox';
import CardBox from './CardBox';
import './App.css';
  
interface ICard {
  rank: string|number;
  suit: string;
}

const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

// calcul default deck
const generateDeck = (suits:Array<string>, values:Array<string|number>) => {
  const deck = []
  for (let suit in suits) {
    for (let value in values) {
      deck.push({ 'rank': values[value], 'suit': suits[suit] });
    }
  }
  return deck;
}

const App = () => {

  let deck: ICard[] = generateDeck(suits, values);
  // watch state of cards in hand
  const [cards, setCard] = useState<ICard[]>([]);

  //get cards & update state when click event occurs in child
  const parentOneCardCallback = (cards: ICard[]) => {
    //console.log("Card here", cards)
    setCard(cards)
  }
  
  return (
    <div className="App">
      <DeckBox deck={deck} parentOneCardCallback={parentOneCardCallback}/>
      <div className="card-container">
      {
        cards && cards.map((card, index) => {
        return (
          <div className="animated slideInUp" key={index}>
            <CardBox suit={card.suit} rank={card.rank} />
          </div>
        ) 
      })} 
      </div>
    </div>
  );
}

export default App;
