import './App.css'
import Card from "./Card.tsx";
import CardDeck from "./lib/CardDeck.ts";

function App() {

  const cards = new CardDeck();
  console.log(cards.deck);

  return (
    <>
      <Card rank={'A'} suit={'diams'} />
    </>
  )
}

export default App
