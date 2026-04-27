import './App.css';
import Card from './lib/Card.ts';
import CardEl from './Card.tsx';
import CardDeck from './lib/CardDeck.ts';
import {useState} from 'react';
import PokerHand from './lib/PokerHand.ts';

function App() {
  const [hand, setHand] = useState<Card[]>([]);
  const [combination, setCombination] = useState<string>('');

  const dealCards = () => {
    const deck = new CardDeck();
    const cards = deck.getCards();
    setHand(cards);
    const pokerHand = new PokerHand(cards);
    setCombination(pokerHand.getOutcome());
  };

  if (hand.length === 0) {
    return (
      <div className='app'>
        <button onClick={dealCards} className='app-btn'>
          Раздать карты
        </button>
      </div>
    );
  }

  return (
    <div className='app'>
      <div className='playingCards faceImages'>
        {hand.map((card, i) => (
          <CardEl
            key={i}
            rank={card.rank}
            suit={card.suit}
          />
        ))}
      </div>

      <div className='result'>
        <h1 className='hand-combination'>{combination}</h1>
        <button onClick={dealCards} className='app-btn'>
         Еще раз раздать карты
        </button>
      </div>
    </div>
  );
}

export default App;
