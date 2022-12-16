import { Monster } from "../../app";

import "./card-list.css";
import Card from "../card/card.component";

type CardListProps = {
  monster: Monster[];
};

function CardList({ monster }: CardListProps) {
  return (
    <div className="card-list">
      {monster.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
}

export default CardList;
