import Card from './Card.ts';

class CardDeck {
  public deck: Card[] = [];
  private suits = ['spades', 'hearts', 'clubs', 'diams'];
  private ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  constructor() {
    this.suits.forEach((suit) => {
      this.ranks.forEach(rank => {
        const card = new Card(rank, suit);
        this.deck.push(card);
      });
    });
  }

  getCard(): Card {
    const random = Math.floor(Math.random() * this.deck.length);
    const takenCard = this.deck.splice(random, 1);
    return takenCard[0];
  }

  getCards(howMany: number = 5) {
    const cards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      cards.push(this.getCard())
    }
    return cards;
  }
}

export default CardDeck;