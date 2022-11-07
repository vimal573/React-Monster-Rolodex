import "./card-list.css";
import Card from "../card/card";

function CardList({ monster }) {
  return (
    <div className="card-list">
      {monster.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
}

export default CardList;
