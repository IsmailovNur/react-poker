import Card from './Card';

class PokerHand {
  private hand: Card[] = [];

  constructor(hand: Card[]) {
    this.hand = hand;
  }

  getOutcome(): string {
    const rankCounts: { [key: string]: number } = {};
    const suitCounts: { [key: string]: number } = {};

    this.hand.forEach((card) => {
      rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
      suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
    });

    const counts = Object.values(rankCounts);
    const suits = Object.values(suitCounts);

    if (suits.includes(5)) return 'Flash';
    if (counts.includes(3)) return 'Set';

    const pairs = counts.filter(count => count === 2).length;
    if (pairs === 2) return 'Two pair';
    if (pairs === 1) return 'One pair';

    return 'High card';
  }
}

export default PokerHand;