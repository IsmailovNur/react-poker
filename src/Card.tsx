import type {FC} from "react";

interface CardProps {
  rank?: string;
  suit?: string;
}

const Card: FC<CardProps> = () => {
  const props = {
    rank: 'j',
    suit: 'spades'
  }
  const cardClasses = `card rank-${props.rank} diams`;
  return (
    <div className="playingCards faceImages">
      <span className={cardClasses}>
      <span className="rank">K</span>
      <span className="suit">♦️</span>
      </span>
    </div>
  );
};

export default Card;