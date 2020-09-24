import React from 'react';
import DeckBox from './DeckBox';
import CardBox from './CardBox';
import './App.css';
  

  class Card {
    rank: string|number;
    suit: string;

    constructor(rank: string|number, suit: string) {
      this.rank = rank;
      this.suit = suit;
    }
  }

  let oneCard = new Card(2, 'Club');
  /*const kList = Object.entries(oneCard).map(([key,value])=>{
    return (
      <div key = {key}>{key} : {value.toString()}</div>
    );
  })*/

/*
  dealOneCard(){
    // TODO:take a random card, remove this random card from the deck, display it as selected card. 
    function getRandomCardId(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1));
    }
    let randomCardId = getRandomCardId(0, 51);
    //return this.deck.pop();
    return this.deck.splice(randomCardId, 1);
    //return {card: this.deck[randomCardId]};
  }*/
  //console.log("default Deck data", data)

const App = () => {
  const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  
  const generateDeck = (suits:Array<string>, values:Array<string|number>) => {
    const deck = []
    for (let suit in suits) {
      for (let value in values) {
        // deck.push(new Card(values[value], suits[suit]));
        deck.push({ 'rank': values[value], 'suit': suits[suit] });
      }
    }
    return deck;
  }
  const data = generateDeck(suits, values);

  const shuffle = (data: any[]) => {
    let m = data.length;
    let i = 0;
    while(m){
      i = Math.floor(Math.random() * m--);
      [data[m], data[i]] = [data[i], data[m]];
    }
    return data;
  }
  //<!--<header className="App-header">{ kList }</header>-->
  return (
    <div className="App">
      <DeckBox data={ data }/>
      <div className="button-container">
        <button onClick={() => shuffle(data)}>Shuffle</button>
      </div>
      <div className="card-container">
        <div className="animated slideInUp">
         { oneCard && <CardBox rank={oneCard?.rank} suit={oneCard?.suit} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
