import React, {useState} from "react";
import CardBox from '../CardBox';
import './index.css';

interface ICard {
  rank: string|number;
  suit: string;
  id: number;
}

type Props = {
  deck: ICard[],
  parentOneCardCallback(cards: ICard[]): void,
}

const DeckBox: React.FC<Props>= (props) => {
  const { deck } = props;
  // watch updates of state data when you do shuffle
  let [data, setData] = useState(deck);
  // watch cards state when you do shuffle, deal one card
  let [cards, setCards] = useState<ICard[]>([]);

  const onShuffle = (deck: any[]) => {
    // reset cards in hand
    setCards([])
    props.parentOneCardCallback([]);
    // do shuffle
    let newData = shuffle(deck);
    setData([...newData]);
  }

  const shuffle = (deck: any[]) => {
    let currentIndex = deck.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = deck[currentIndex];
      deck[currentIndex] = deck[randomIndex];
      deck[randomIndex] = temporaryValue;
    };console.log("Here shuffle", deck)
    return deck;
  }

  const dealOneCard = (card:ICard, idx:number) => {
    //deal cards by one, accumulate it in hand 
    if (cards.length < 52) {
      cards.push(card);
      setCards([...cards])
    }
    // transfer cards to parent App
    props.parentOneCardCallback(cards);
    data.splice(idx, 1);
  }
console.log("RES data", data)
  return (
    <div className="DeckContent">
      <div className="container">
        {data && data.map((card: ICard, index) => {
          return (
            <div key={card.id} onClick={() => dealOneCard(card, index)}>
              <CardBox rank={card.rank} suit={card.suit} id={card.id}/>
            </div>
          ); 
        })}
      </div>
      <div className="button-container">
        <button onClick={() => onShuffle(deck)}>Shuffle</button>
      </div>
    </div>
  )
};     
export default DeckBox;