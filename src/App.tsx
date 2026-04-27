import './App.css'
import Card from "./Card.tsx";
import CardDeck from "./lib/CardDeck.ts";

function App() {

  const cards = new CardDeck();
  const card = cards.getCard();
  console.log(card);
  console.log(cards.deck);

  return (
    <>
      <Card rank={'A'} suit={'diams'} />
    </>
  )
}

export default App
