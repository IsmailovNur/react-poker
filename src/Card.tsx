import type {FC} from 'react';

interface CardProps {
  rank: string;
  suit: string;
}

const Card: FC<CardProps> = ({rank, suit}) => {

  const cardSuits: { [key: string]: string } = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
  };

  const cardClasses = `card rank-${rank.toLowerCase()} ${suit}`;
  return (
    <span className={cardClasses}>
      <span className="rank">{rank}</span>
      <span className="suit">{cardSuits[suit]}</span>
    </span>
  );
};

export default Card;