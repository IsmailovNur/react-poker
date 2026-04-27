import './App.css';
import Card from './lib/Card.ts';
import CardEl from "./Card.tsx";
import CardDeck from "./lib/CardDeck.ts";
import {useState} from "react";

function App() {
  const [hand, setHand] = useState<Card[]>([]);

  const dealCards = () => {
    const deck = new CardDeck();
    const newCards = deck.getCards();
    setHand(newCards);
  };

  if (hand.length === 0) {
    return (<button onClick={dealCards} style={{marginBottom: '20px'}}>
      Раздать карты
    </button>);
  }

  return (
    <div className="App">
      <div className="playingCards faceImages">
        {hand.map((card, i) => (
          <CardEl
            key={i}
            rank={card.rank}
            suit={card.suit}
          />
        ))}
      </div>
    </div>
  );
}

export default App
