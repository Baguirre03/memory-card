import Card from "./card";

export default function CardContainer({ cards, handleClick }) {
  return (
    <div className="card-container">
      {cards.map((data, index) => (
        <Card
          data={data}
          key={data.id}
          index={index}
          handleClick={handleClick}
        ></Card>
      ))}
    </div>
  );
}
