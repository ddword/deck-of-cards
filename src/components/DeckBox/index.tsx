import React, {useState} from "react";
import CardBox from '../CardBox';
import './index.css';

interface ICard {
  rank: string|number;
  suit: string;
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
    // console.log("Shuffle data", data[0], data[1])
  }

  const shuffle = (deck: any[]) => {
    let m = deck.length;
    let i = 0;
    while(m){
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
    return deck;
  }

  const dealOneCard = (card:ICard, id:number) => {
    //deal cards by one, accumulate it in hand 
    if (cards.length < 52) {
      cards.push(card);
      setCards([...cards])
    }
    // transfer cards to parent App
    props.parentOneCardCallback(cards);
    data.splice(id, 1);
  }

  return (
    <div className="DeckContent">
      <div className="container">
        {data && data.map((card: ICard, index) => {
          return (
            <div className="animated slideInDown" key={index} onClick={() => dealOneCard(card, index)}>
              <CardBox rank={card.rank} suit={card.suit} />
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