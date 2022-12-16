import { Monster } from "../../app";

import "./card.css";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  return (
    <div className="card-container">
      <img
        alt={`Monster ${monster.name}`}
        src={`https://robohash.org/${monster.id}?set=set2?size=180*180`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
